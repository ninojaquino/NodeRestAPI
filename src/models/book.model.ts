export class Book {
    _model: any;
    constructor(norm: any) {
      this.model = [{
        id: { type: Number, key: 'primary' },
        name: { type: String, maxlength: 24 },
        author: { type: String, maxlength: 24 },
        isbn: { type: String, maxlength: 24 },
        user_id: {
          type: Number,
          key: 'foreign',
          references: { table: 'User', foreignKey: 'id' },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        },
      }, 'A table to store user book', []];
    }
  
    set model(model: any) {
      this._model = model;
    }
  
    get model() {
      return this._model;
    }
  
  }