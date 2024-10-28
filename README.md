## Consegna

    Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
    Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.
    L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Ricordatevi un metodo che abbiamo visto durante le lezioni precedenti.
    :avviso: Prima di scrivere il codice impostate il ragionamento nel file README.md!
**Bonus** : Applicare dei controlli sull'input dell'utente

## Ragionamento

### Dati

+ Prezzo biglietto = 0.21/km
+ Sconto < 18 = 20%
+ Sconto > 65 = 40%
+ Km da percorrere = user input
+ Età Passeggero = user input
+ Prezzo Finale


### Esecuzione Logica

1. Chiedere all'user i Km che andrà a percorrere
1. Chiedere all'user la sua età
1. Calcolo il prezzo base senza sconti moltiplicando i km ottenuti dall'user con il prezzo base 0.21
1. Iterazione: SE
    + Utente minorenne: calcolo il prezzo appena ottenuto / 100 e * 20 e lo sottraggo al prezzo senza sconto per ottenere il prezzo finale
    + Utente over 65 : calcolo il prezzo appena ottenuto / 100 e * 40 e lo sottraggo al prezzo senza sconto per ottenere il prezzo finale


### Stampa

Restituisco il prezzo finale calcolato