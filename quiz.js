function startQuiz(){
  let score=0;
  if(confirm('Czy używasz tego samego hasła wszędzie?')) score--;
  if(confirm('Czy masz włączone 2FA?')) score++;
  if(confirm('Czy używasz antywirusa?')) score++;
  if(confirm('Czy logujesz się do banku z podejrzanego linku?')) score--;
  if(confirm('Czy aktualizujesz swojego antywirusa?')) score++;
  document.getElementById('result').innerText='Twój wynik: '+score;
}
