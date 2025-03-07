const manager = new Manager();
Gomszab.addFileUploader(fileResult => {
  const fileLines = fileResult.split("\n")
  for(const line of fileLines){
    const filds = line.split(";")
    const correct = filds[1].trim() === "1" ? true : false;
    const card = new Card(filds[0],correct)
    manager.add(card);
  }
  manager.start();
})
const deckArea = new DeckArea('deck', manager);
const solutionArea = new SolutionArea('solution', manager);