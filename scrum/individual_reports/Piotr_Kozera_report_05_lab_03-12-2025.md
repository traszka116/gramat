
# Raport indywidualny – Sprint 4

Imię i nazwisko: Piotr Kozera

Zespół: Granat

Numer sprintu: 4

Okres: 3.12.2025
<br/><br/>

### Zakres moich działań:

1. Usunięcie tablic question_types i answer_types i zastępienie ich kolumną exercise_properties w tabeli exercise
2. Wprowadzenie klas i endpointów reprezentujące pozostałe tabele w bazie danych (backend)
3. Zaplanowanie zadań na kolejny sprint
<br/><br/>

### Wkład w projekt:
Wraz z zespołem postanowiliśmy przechowywać informację o właściwości zadania w kolumnie exercise_properties w tabeli exercise w postaci obiektu JSON. Zmieniłem zatem strukturę bazy danych usuwając tabele oznaczającą typy zadań i tabele oznaczającą typy odpowiedzi. Tabele z zadaniami posiada teraz kolumnę exercise_properties. Dostosowałem również do tej zmiany backend i frontend.

Zacząłem również stworzenie klas i endpointów, aby reprezentować wszystkie tabele w bazie danych.

Zaplanowaliśmy zadania na kolejny sprint do zrealizowania przez kolejne 2 tygodnie.
<br/><br/>

### Załączniki:
- Rozbudowa backendu z podziałem na różne klasy i pliki
  - Issue: gra-mat/gramat#42
  - Commit: [456a428](https://github.com/gra-mat/gramat/commit/456a4282dceaecd20bf654f6586ba449d955bfab)
<br/><br/>

### Samoocena:

| Obszar | Ocena (1–5) | Komentarz |
|---------|--------------|-----------|
| Zaangażowanie | 4 | Wykonałem zaproponowany element |
| Wkład merytoryczny | 4 | Zmiana pomoże w stosowaniu data driven development, ale nie skończyłem jeszcze implementacji pozostałych klas i endpointów | 
| Komunikacja | 5 | Dobrze dogadaliśmy się w sprawie zadań na kolejny sprint |
| Terminowość | 3.5 | Zrealizowałem dwa z trzech zadań z zakresu moich działań |

### Refleksja:

Udało mi się zrealizować  dwie trzecie zadań w sprincie. Trzeba będzie jeszcze dokończyć tworzenie klas i endpointów.