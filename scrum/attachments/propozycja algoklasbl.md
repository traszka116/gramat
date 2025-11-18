`klasyfikujBlad(zadanko, odpowiedzUcznia, drzewkooUmiejetnosci):

    roznice = porownajKroki(zadanko.poprawneKroki, odpowiedzUcznia.kroki)

    typyBledow = wykryjTypyBledow(roznice)

    dopasowaneWezly = mapujBledyNaWezly(typyBledow, drzewkooUmiejetnosci)

    najglebszePrzyczyny = wybierzNajglebszeWezly(dopasowaneWezly)

    return najglebszePrzyczyny`


dzialajacy na stukturze typu

Matma do kl 8
├── 1. Liczby i działania
│   ├── 1.1. Liczby naturalne
│   │   ├── Porządkowanie liczb rosnąco/malejąco
│   │   ├── Porównywanie liczb
│   │   ├── Odczytywanie liczby z osi liczbowej
│   │   ├── Następna i poprzednia cyfra
│   │   └── Liczenie w przód / w tył dowolną liczbą
│   │
│   ├── 1.2. Dodawanie
│   │   ├── Dodawanie do 10
│   │   ├── Dodawanie do 100
│   │   ├── Dodawanie wielocyfrowe
│   │   └── Dodawanie pisemne (z przenoszeniem)