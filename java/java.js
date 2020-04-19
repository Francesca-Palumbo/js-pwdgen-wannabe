// chiedere all'utente il suo nome //
var nome_utente = prompt ('qual è il tuo nome?');
console.log(nome_utente);
document.getElementById('nome').innerHTML=nome_utente;

// chiedere all'utente il suo cognome //
var cognome_utente = prompt ('qual è il tuo cognome?');
console.log(cognome_utente);
document.getElementById('cognome').innerHTML=cognome_utente;

// chiedere all'utente il suo colore preferito //
var colore_utente = prompt ('qual è il tuo colore preferito?');
console.log(colore_utente);
document.getElementById('colore').innerHTML=colore_utente;

// stampa la password //
console.log( nome_utente + cognome_utente + colore_utente + 20 )
document.getElementById('password').innerHTML=colore_utente;
