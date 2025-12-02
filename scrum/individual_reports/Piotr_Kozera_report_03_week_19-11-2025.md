# Raport indywidualny – Sprint 3

Imię i nazwisko: Piotr Kozera

Zespół: Granat

Numer sprintu: 3

Okres: 19.11.2025 - 26.11.2025
<br/><br/>

### Zakres moich działań:

1. Stworzenie w backendzie REST API do bazy danych, pobieranie zadań z bazy danych
2. Dodanie dokumentacji tekstowej do bazy danych
3. Poprawa struktury bazy danych
4. Ustrukturyzowanie katalogu załączników ze względu na rodzaj załącznika
<br/><br/>

### Wkład w projekt:
Na poprzednich zajęć labolatoryjnych wspólnie z zespołem ustalilśmy, aby stworzyć proof of concept naszej aplikacji. Moją częśćią była implementacja backendu z REST API do pobierania zadań z bazy danych. Stworzyłem projekt w Node.JS zawierający endpointy do pobierania lekcji oraz zadań po konkretnym ID lub losowych za pomocą zapytania GET.

Stworzyłem również dokumentację tekstową do bazy danych, dzięki czemu pozostałe osoby będą mogły lepiej i łatwiej zrozumieć jej strukturę.

Podczas implementacji backendu uświadomiłem sobie, że potrzeba jescze jednej kolumnie w bazie danych na ewentualne załączniki do zadań (obrazki, animacje, itp.) wobec tego takową kolumne do bazy danych dodałem.

W katalogu /scrum/attachments/ ilość załączników była już na tyle duża, że postanowiłem skatalogowac je ze względu na ich rodzaj. Dzięki temu można teraz szybicej znaleźć konkretny załcznik, którego się szuka.
<br/><br/>

### Załączniki:
- Backend - REST API do bazy danych, pobieranie zadań z bazy danych
  - Issue: gra-mat/gramat#32
  - Commit: [917fedf](https://github.com/gra-mat/gramat/commit/917fedf726f434a691050e07abf06e9093b29ca2)
- Dokumentacja tekstowa do bazy danych
  - Issue: gra-mat/gramat#37
  - Commit: [71c8b0b](https://github.com/gra-mat/gramat/commit/71c8b0b95fffe914ff248a6728b30936f62a4316)
- Poprawa struktury bazy danych
  - Issue: gra-mat/gramat#37
  - Commit: [48500cb](https://github.com/gra-mat/gramat/commit/48500cb2df6681fb443babbe2e84974851d72d5c)
- Ustrukturyzowanie katalogu załączników ze względu na rodzaj załącznika
  - Issue: gra-mat/gramat#35
  - Commit: [ce4e342](https://github.com/gra-mat/gramat/commit/ce4e3425571bd0fffeee058cb3a2ad7bc97d5b15)
<br/><br/>

### Samoocena:

| Obszar             | Ocena (1–5) | Komentarz |
| ------------------ | ----------- | --------- |
| Zaangażowanie      | 5           | Zrealizowałem powierzone mi pierwotnie zadania, a także podczas pracy utworzyłem kolejne zadania dla siebie, aby rozwiązać napotkane nieścisłosci |
| Wkład merytoryczny | 4           | Utworzyłem backend z działającymi endpointami, ale struktura plików jest jeszcze do poprawy |
| Komunikacja        | 4           | Podczas pracy uczestniczyłem w spotkaniach zespołu, na których omawialiśmy szczegóły integracji frontendu i backendu, dzięki czemu udało nam się stworzyć działający prototyp |
| Terminowość        | 5           | Zrealizowałem swoje zadania w terminie z pewnym zapasem czasu |

<br/><br/>
### Refleksja:
Udało mi się zrealizować wszystkie cele sprintu. Stworzyłem REST API, dzięki czemu aplikacja może pobierać i przetwarzać dane przechowywane w bazie. Wprowadziłem również kilka poprawek w kolumnach bazy danych oraz ustrukturyzowałem załączniki w scrum/attachments.
