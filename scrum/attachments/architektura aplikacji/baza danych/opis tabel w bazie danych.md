
## math_branches

Każdy dział matematyki (na przykład: algebra, arytmetyka, geometria) składa się z jednego lub kilku rozdziałów.

## chapters

Każdy rozdział (na przykład: dodawanie ułamków dziesiętnych) składa się z jednej lub kilku lekcji.

## lessons

Każda lekcja zawiera kilkanaście lub kilkadziesiąt zadań do rozwiązania.

## exercises

Zadania mają przypisane:
 - poziom trudności [tabela difficulties]
 - rodzaj pytania [pole question_types], na przykład: pytanie tylko tekstowe, pytanie z animacją i tekstem, itp.
 - rodzaj odpowiedzi [pole answer_types], na przykład: wprowadzenie liczby z klawiatury numerycznej, 1 z 3 odpowiedzi do wyboru, itp.
 - pytanie [pole exercise_question] zawierające treść oraz pytanie do zadania
 - {opcjonalne} warunki do wylosowania wartości zmiennych w pytaniu [pole random_values_conditions], opcjonalne pole, które umożliwia losowanie wartości zmiennych w pytaniu na podstawie zdefiniowanych warunków, na przykład: "a, b ∈ [0,100] ∩ Z", "NWD(c, d) = 1", itp.
 - odpowiedź [pole exercise_answer], zawiera odpowiedź na pytanie lub odpowiedzi na poszczególne etapy zadania, w przypadku użycia random_values_conditions może zawierać warunki do walidacji odpowiedzi
 - {opcjonalne} załączniki [pole exercise_attachments], zawiera odnośniki do ewentualnych obrazów, animacji do zadania

## users

Każdy użytkownik posiada:
 - unikalny identyfikator
 - edytowalną nazwę użytkownika
 - adres email wykorzystywany również jako login
 - hasło w postaci zahashowanej
 - permisje
 - ilość zgromadzonych punków


## feedback

Po ukończeniu zadania przez użytkownika tworzony jest automatycznie ocenę jego rozwiązania, która posiada:
- ID użytkownika, który rozwiązał zadanie
- ID zadania, które zostało rozwiązane
- rating wykonania zadania
- ilość punków, która została przyznana użytkownikowi za rozwiązanie tego zadania

## user_reports

Cyklicznie generowany raport  o użytkowniku zawiera:
- ID użytkownika, o którym jest raport
- datę wygenerowania
- opis mocnych stron użytkownika
- opis słabych stron użytkownika
- sugerowane zadania, które może przećwiczyć

## achievements

Osiągnięcia, które użytkownicy mogą odblokować w trakcie korzystania z kursu zawierają:
- nazwę osiągnięcia
- opis osiągnięcia

## achievements_unlocks

Odblokowania poszczególnych osiągnięć zawierają:
- ID odblokowanego osiągnięcia
- ID użytkownika, który je odblokował
- datę odblokowania osiągnięcia