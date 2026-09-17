const sequelize = require('../config/bd');
const Filme = require('./filme.model');
const Diretor = require('./diretor.model');
const Artista = require('./artista.model');
const Fichatecnica = require('./fichatecnica.model');

Diretor.hasMany( Filme, {
  foreignKey: 'diretorId',
  as: 'filmes'
});

Fichatecnica.belongsTo( Filme, {
  foreignKey: 'filmeId',
  as: 'filme'
});

Diretor.hasMany(Fichatecnica, {
  foreignkey: "diretorid",
  as: "FichaTecnica"
})

Artista.hasMany(Fichatecnica, {
  foreignkey: "nome-Artista",
  as: "FichaTecnica"
})

Filme.hasOne( Fichatecnica, {
  foreignkey: "Filmeid",
  as: "fichaTecnica"
})

Filme.belongsTo(Diretor, {
  foreignKey: 'diretorId',
  as: 'diretor'
});

Artista.belongsToMany(Filme, {
  through: 'FilmeArtista',
  foreignKey: 'artistaId',
  as: 'filmes'
});

Filme.belongsToMany(Artista, {
  through: 'FilmeArtista',
  foreignKey: 'filmeId',
  as: 'artistas'
});