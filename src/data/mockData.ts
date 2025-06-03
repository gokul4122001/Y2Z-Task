import { Itinerary } from '../types';

export const mockItinerary: Itinerary = {
  "id": "italian-adventure",
  "title": "Italian Adventure",
  "days": [
    {
      "id": "day-1",
      "date": "June 15, 2025",
      "title": "Rome Arrival",
      "activities": [
        {
          "id": "activity-1",
          "rank": 1,
          "title": "Flight to Rome",
          "rating": 4.8,
          "reviews": 10245,
          "type": "transport",
          "time": "08:00",
          "duration": "8h 30m",
          "description": "Flight AZ 609 from JFK to FCO",
          "location": "JFK to FCO",
          "image": "https://example.com/images/flight.jpg"
        },
        {
          "id": "activity-2",
          "rank": 2,
          "title": "Hotel Check-in",
          "rating": 4.7,
          "reviews": 6840,
          "type": "accommodation",
          "time": "14:00",
          "description": "Check in at Hotel Artemide",
          "location": "Via Nazionale, 22, Rome",
          "image": "https://example.com/images/hotel.jpg"
        },
        {
          "id": "activity-3",
          "rank": 3,
          "title": "Visit the Colosseum",
          "rating": 4.9,
          "reviews": 205310,
          "type": "attraction",
          "time": "16:00",
          "duration": "2h",
          "description": "Guided tour of the Colosseum and Roman Forum",
          "location": "Piazza del Colosseo, Rome",
          "image": "https://example.com/images/colosseum.jpg"
        },
        {
          "id": "activity-4",
          "rank": 4,
          "title": "Dinner at La Pergola",
          "rating": 4.6,
          "reviews": 9821,
          "type": "dining",
          "time": "20:00",
          "description": "Fine dining experience with panoramic city views",
          "location": "Via Alberto Cadlolo, 101, Rome",
          "image": "https://example.com/images/dinner.jpg"
        },
        {
          "id": "activity-5",
          "rank": 5,
          "title": "Breakfast at Hotel",
          "rating": 4.5,
          "reviews": 7234,
          "type": "dining",
          "time": "08:00",
          "description": "Continental breakfast at hotel restaurant",
          "location": "",
          "image": "https://example.com/images/breakfast.jpg"
        },
        {
          "id": "activity-6",
          "rank": 6,
          "title": "Vatican Museums",
          "rating": 4.9,
          "reviews": 312045,
          "type": "attraction",
          "time": "10:00",
          "duration": "3h",
          "description": "Guided tour of Vatican Museums & Sistine Chapel",
          "location": "Viale Vaticano, Vatican City",
          "image": "https://example.com/images/vatican.jpg"
        },
        {
          "id": "activity-7",
          "rank": 7,
          "title": "Lunch at Pizzarium",
          "rating": 4.7,
          "reviews": 4823,
          "type": "dining",
          "time": "13:30",
          "description": "Famous pizza by the slice spot",
          "location": "Via della Meloria, 43, Rome",
          "image": "https://example.com/images/pizza.jpg"
        },
        {
          "id": "activity-8",
          "rank": 8,
          "title": "St. Peter's Basilica",
          "rating": 4.8,
          "reviews": 187340,
          "type": "attraction",
          "time": "15:00",
          "duration": "1h 30m",
          "description": "Visit the world's largest church",
          "location": "Piazza San Pietro, Vatican City",
          "image": "https://example.com/images/basilica.jpg"
        },
        {
          "id": "activity-9",
          "rank": 9,
          "title": "Dinner at Trattoria Da Enzo",
          "rating": 4.6,
          "reviews": 6295,
          "type": "dining",
          "time": "19:30",
          "description": "Traditional Roman cuisine in Trastevere",
          "location": "Via dei Vascellari, 29, Rome",
          "image": "https://example.com/images/trattoria.jpg"
        },
        {
          "id": "activity-10",
          "rank": 10,
          "title": "Train to Florence",
          "rating": 4.4,
          "reviews": 12380,
          "type": "transport",
          "time": "08:30",
          "duration": "1h 30m",
          "description": "High-speed train from Roma Termini to Firenze S.M.N.",
          "location": "Roma Termini",
          "image": "https://example.com/images/train.jpg"
        },
        {
          "id": "activity-11",
          "rank": 11,
          "title": "Uffizi Gallery",
          "rating": 4.7,
          "reviews": 112350,
          "type": "attraction",
          "time": "11:00",
          "duration": "2h",
          "description": "View Renaissance masterpieces",
          "location": "Piazzale degli Uffizi, 6, Florence",
          "image": "https://example.com/images/uffizi.jpg"
        },
        {
          "id": "activity-12",
          "rank": 12,
          "title": "Lunch at All'Antico Vinaio",
          "rating": 4.8,
          "reviews": 21850,
          "type": "dining",
          "time": "13:30",
          "description": "Famous sandwiches shop",
          "location": "Via dei Neri, 65, Florence",
          "image": "https://example.com/images/vinaio.jpg"
        },
        {
          "id": "activity-13",
          "rank": 13,
          "title": "Visit Duomo & Climb Bell Tower",
          "rating": 4.9,
          "reviews": 183255,
          "type": "attraction",
          "time": "15:00",
          "duration": "2h",
          "description": "Cathedral of Santa Maria del Fiore and Giotto's Bell Tower",
          "location": "Piazza del Duomo, Florence",
          "image": "https://example.com/images/duomo.jpg"
        },
        {
          "id": "activity-14",
          "rank": 14,
          "title": "Train back to Rome",
          "rating": 4.5,
          "reviews": 12035,
          "type": "transport",
          "time": "18:30",
          "duration": "1h 30m",
          "description": "High-speed train from Firenze S.M.N. to Roma Termini",
          "location": "Firenze S.M.N.",
          "image": "https://example.com/images/train_back.jpg"
        }
      ]
    }
  ]
}
