import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { format, addMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, isBefore, startOfDay } from "date-fns";
import { fr } from "date-fns/locale";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CalendarSectionProps {
  onDateSelect?: (checkIn: Date, checkOut: Date) => void;
  bookedDates?: Date[];
}

const CalendarSection = ({ onDateSelect, bookedDates = [] }: CalendarSectionProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const today = startOfDay(new Date());
  
  const getDaysInMonth = (date: Date) => {
    const start = startOfMonth(date);
    const end = endOfMonth(date);
    return eachDayOfInterval({ start, end });
  };

  const isDateBooked = (date: Date) => {
    return bookedDates.some(
      (bookedDate) => startOfDay(bookedDate).getTime() === startOfDay(date).getTime()
    );
  };

  const isDateDisabled = (date: Date) => {
    return isBefore(date, today) || isDateBooked(date);
  };

  const handleDateClick = (date: Date) => {
    if (isDateDisabled(date)) return;

    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(date);
      setCheckOut(null);
    } else if (date > checkIn) {
      // Check if any date in range is booked
      const daysInRange = eachDayOfInterval({ start: checkIn, end: date });
      const hasBookedInRange = daysInRange.some(d => isDateBooked(d));
      
      if (!hasBookedInRange) {
        setCheckOut(date);
        onDateSelect?.(checkIn, date);
      }
    } else {
      setCheckIn(date);
      setCheckOut(null);
    }
  };

  const isInRange = (date: Date) => {
    if (!checkIn || !checkOut) return false;
    return date > checkIn && date < checkOut;
  };

  const days = getDaysInMonth(currentMonth);
  const firstDayOfMonth = startOfMonth(currentMonth).getDay();
  const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  return (
    <section id="calendar" className="section-padding bg-muted">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-3 font-sans">
            Disponibilités
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Choisissez vos dates
          </h2>
          <p className="text-muted-foreground">
            Calendrier synchronisé avec Booking et Airbnb
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl shadow-sm border border-border p-6 max-w-md mx-auto"
        >
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCurrentMonth(addMonths(currentMonth, -1))}
              disabled={isSameMonth(currentMonth, today)}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <h3 className="font-serif text-xl capitalize">
              {format(currentMonth, "MMMM yyyy", { locale: fr })}
            </h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Weekday headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((day) => (
              <div key={day} className="text-center text-xs text-muted-foreground font-medium py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-1">
            {/* Empty cells for days before the first of the month */}
            {Array.from({ length: adjustedFirstDay }).map((_, i) => (
              <div key={`empty-${i}`} className="h-10" />
            ))}
            
            {days.map((day) => {
              const disabled = isDateDisabled(day);
              const isSelected = (checkIn && startOfDay(day).getTime() === startOfDay(checkIn).getTime()) ||
                                (checkOut && startOfDay(day).getTime() === startOfDay(checkOut).getTime());
              const inRange = isInRange(day);
              
              return (
                <button
                  key={day.toISOString()}
                  onClick={() => handleDateClick(day)}
                  disabled={disabled}
                  className={cn(
                    "h-10 w-full rounded-lg text-sm font-medium transition-colors",
                    disabled && "text-muted-foreground/40 cursor-not-allowed line-through",
                    !disabled && "hover:bg-primary/10 cursor-pointer",
                    isSelected && "bg-primary text-primary-foreground hover:bg-primary",
                    inRange && "bg-primary/20",
                    isToday(day) && !isSelected && "ring-1 ring-primary"
                  )}
                >
                  {format(day, "d")}
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-4 mt-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded bg-primary" />
              <span>Sélectionné</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded bg-muted-foreground/30 line-through" />
              <span>Indisponible</span>
            </div>
          </div>

          {/* Selected dates display */}
          {checkIn && (
            <div className="mt-6 p-4 bg-muted rounded-lg text-center">
              <p className="text-sm text-muted-foreground">
                {checkOut ? (
                  <>
                    <span className="font-medium text-foreground">
                      {format(checkIn, "d MMMM", { locale: fr })}
                    </span>
                    {" → "}
                    <span className="font-medium text-foreground">
                      {format(checkOut, "d MMMM yyyy", { locale: fr })}
                    </span>
                  </>
                ) : (
                  "Sélectionnez la date de départ"
                )}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CalendarSection;
