export default class Tea {
  constructor() {
    this.favoritename = "Favortie";
    this.roster = [];

  }

  describe(){
    let names = []
    this.roster.forEach(data => names.push(data.name));

    return `Tea ${favoriteName}:`;
  }

  addTea(data){
    let message = { 
      value: '',
      type: 'Error' // Error
    }
    if (this.roster.length == 8){
      message.value = 'You already add to favorite';
      return message;
    }

    this.rostser.push(data);
  }

}