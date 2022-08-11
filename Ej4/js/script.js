const DATA = [
  { name: "Juan", lastname: "Perez" },
  { name: "Roberto", lastname: "Carlos" },
  { name: "Fulano", lastname: "Detal" },
  { name: "Gian", lastname: "Laic" },
  { name: "Fernando", lastname: "Saavedra" },
];

// Escribe el código necesario aquí
for (let index = 0; index < DATA.length; index++) {
  const name = DATA[index].name;
  const lastname = DATA[index].lastname;
document.getElementById("container").innerHTML +=
"<p>"+ name + " " + lastname +"</p>";  
}
