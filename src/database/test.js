const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  //inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-22.934788",
    lng: "-43.3295564",
    name: "Sucesso e Prosperidade",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "9798594213810",
    images: [
      "https://images.unsplash.com/photo-1600712243189-aaa2152723b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1594007184512-2a607d1df588?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions: "Venha nos visitar e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visita das 8h até 18h",
    open_on_weekends: "1",
  });

  //consultar dados na tabela
  const selectedOrphanage = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanage);
/*
  //consultar somente 1 orfanato, pelo id
  const orphanage = await db.all("SELECT * FROM orphanages WHERE id = '1'");
  console.log(orphanage);

  //deletar dados na tabela
  console.log(await db.run("DELETE FROM orphanages WHERE id='4'"));
  */
});
