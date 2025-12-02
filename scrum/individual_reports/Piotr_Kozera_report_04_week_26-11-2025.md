# Raport indywidualny – Sprint 4

Imię i nazwisko: Piotr Kozera

Zespół: Granat

Numer sprintu: 4

Okres: 26.11.2025 - 3.12.2025
<br/><br/>

### Zakres moich działań:

1. Rozbudowa backendu z podziałem na różne klasy i pliki
2. Obsługa warunków losowych wartości w zadaniach (random values conditions) przez backend
<br/><br/>

### Wkład w projekt:
W tym sprincie skupiłem się na rozbudowie backendu, tak aby w przyszłosći był dobrze skalowalny i gotowy na implementacje nowych rozwiązań. Stworzyłem kontrolery oraz modele dla poszczególnych klas (lekcji, zadań, itp.). Utworzyłem też klasy repozytoriów do tworzenia obiektów oraz wykorzystałem wstrzykiwanie zależności (dependency injection). Poszczególne endpointy są teraz definiowane w odpowiednim pliku w katalogu routes. Oprócz tego postanowiłem i zaimplementowałem całość backendu w TypeScript zamiast JavaScript jak dotychczas, aby wykorzystać typowanie i zmniejszyć ilość błędów w przyszłości.

Jedną z funkcjonalności jako postanowiliśmy wprowadzić do naszej aplikacji to możliwość rozwiązywania zadań do których wartości poszczególnych parametrów w pytaniu są losowe. To oznacza, że za każdym razem jeśli użytkownik podchodzi do rozwiązania tego samego zadania z generowaniem wartości losowych w pytaniu to może otrzymać inne wartości w pytaniu co skutkuje również inną poprawną odpowiedzią na to pytanie. Pomoże to również w tworzeniu kursu, ponieważ nie trzeba będzie wprowadzać na sztywno pytań do wszystkich zadań, bo część będzie generowana na podstawie podanych warunków.

Zaimplementowane przeze mnie rozwiązanie obsługi zadań z losowymi wartościami wykonałem poprzez pobranie przez backend zadnia z bazy danych, sprawdzenie czy posiada ono random values conditions, jeśli tak to wylosowanie wartości do pytania i zaktualizowanie go oraz obliczenie poprawnej odpowiedzi i wpisanie jej do zadnia, następnie tak przygotowane zadanie jest zwracane przez API tak jakby było to zadania z wartościami wpisanymi na sztywno.
<br/><br/>

### Załączniki:
- Rozbudowa backendu z podziałem na różne klasy i pliki
  - Issue: gra-mat/gramat#43
  - Commit: [28f8531](https://github.com/gra-mat/gramat/commit/28f85319ad65637c28a6d856e77a7681d331386c)
- Obsługa warunków losowych wartości w zadaniach (random values conditions) przez backend
  - Issue: gra-mat/gramat#44
  - Commit: [28f8531](https://github.com/gra-mat/gramat/commit/28f85319ad65637c28a6d856e77a7681d331386c)
<br/><br/>

### Samoocena:

| Obszar             | Ocena (1–5) | Komentarz |
| ------------------ | ----------- | --------- |
| Zaangażowanie      | 5           | Zrealizowałem powierzone zadania oraz obmyśliłem przytym wykorzystanie wzorców projektowych (MVC, Repository pattern, Dependency injection) oraz wykorzystanie typowania (TypeScript) |
| Wkład merytoryczny | 4           | Struktura backendu oraz nowa funkcjonalność dała spory wkład w projekt, ale sposób zapisu warunków do generowania wartości losowych w zadaniach będzie wymagać jeszcze rozwoju |
| Komunikacja        | 4.5           | Zadania realziowane przeze mnie w tym sprnicie nie wymagały dużo komunikacji z zespołem |
| Terminowość        | 5           | Zrealizowałem swoje zadania w terminie z dużym zapasem czasu |

<br/><br/>
### Refleksja:
Udało mi się zrealizować wszystkie cele sprintu. Nowa struktura backendu przysłuży się w dalszej pracy nad projektem. Widzę również, które aspekty aplikacji wymagają jeszcze poprawy.
