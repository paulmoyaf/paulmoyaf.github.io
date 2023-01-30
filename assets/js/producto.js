
const button        = document.querySelector('button');
const btnExportar  = document.querySelector('#btnExportar');
const btnAdicionar  = document.querySelector('#btnAdicionar');
const btnBorrar     = document.querySelector('#btnBorrar');
const btnBorrarId     = document.querySelector('#btnBorrarId');
const btnEditar     = document.querySelector('#btnEditar');
//const btnStop       = document.querySelector('#btnStop');

const listaHTML     = document.getElementById('listaProductos');
const tablaHTML     = document.getElementById('tablaHTML');
document.getElementById('file').addEventListener('change',readFile,false);
// const listadoProducto    = document.getElementById('listadoProducto');


class Producto{
    #id;
    #marca;
    #precio;
    #dcto;
    #prime;
    static constructorVacio({}){
    }

    constructor(id,marca,precio,dcto,prime){
    this.#id=id;
    this.#marca=marca;
    this.#precio=precio;
    this.#dcto=dcto;
    this.#prime=prime;
    }

    get getId(){
        return this.#id;
    }
    get getMarca(){
        return this.#marca;
    }
    get getPrecio(){
        return this.#precio;
    }
    get getDcto(){
        return this.#dcto;
    }
    get getPrime(){
        // if (this.#prime == "true"){
        if (this.#prime == "S"){
            return "PRIME";
            }else{
                return "Regular";
            }
    }

    set setId(id){
        this.#id=id;
    }
    set setMarca(marca){
        this.#marca=marca.toUpperCase();
    }
    set setPrecio(precio){
        this.#precio=precio;
    }
    set setDcto(dcto){
        this.#dcto=dcto;
    }
    set isPrime(prime){
        this.#prime=prime.toUpperCase(); 
    }

    getEnvio(){
        if(this.#prime =="S"){
            return "GRATIS";
        }else{
        return "15€"}
    }

    precioVenta(){
        if (this.#prime=="true"){
            return this.#precio - Math.round(this.#precio*this.#dcto)/100+"€";
        }else{
            return this.#precio - Math.round(this.#precio*this.#dcto)/100 + 15+"€";
        }
    }


}

class Teclado extends Producto{

    #color;
    #teclas;
    #conector;

    // static constructorVacio({}){
    //     super();
    // }

    constructor(id, marca, precio, dcto, prime, color, teclas, conector){
        super(id, marca, precio, dcto, prime);
        this.#color = color;
        this.#teclas = teclas;
        this.#conector = conector;
    }

    get getColor(){
        return this.#color;
    }
    set setColor(color){
            this.#color = color.toUpperCase();
    }

    get getTeclas(){
    return this.#teclas;
    }

    set setTeclas(teclas){
        return this.#teclas = teclas;
    }

    get getConector(){
    return this.#conector;
    }

    set setConector(conector){
        this.#conector = conector.toUpperCase();
    }

    toString(){
        return this.getId+ "," + this.getMarca+ "," + this.getPrecio+ "," + this.getDcto+ "," + 
        this.getPrime + "," + this.getColor+ ","
        + this.getTeclas+ "," + this.getConector + "," + this.getEnvio() + "," + this.precioVenta();
    }

    toStringDatos(){
        return "Id: " + this.getId + "\n" + "Marca: " + this.getMarca+ "\n" + "Precio: " + this.getPrecio+ "\n" + "Descuento: " + this.getDcto+ "\n" + 
        "Prime: " + this.getPrime + "\n" + "Color: " + this.getColor+ "\n"  + "Teclas: " + this.getTeclas+ "\n" + "Conector: " + this.getConector + "\n" +
        "Envio: " + this.getEnvio() + "\n" + "Precio Venta: " + this.precioVenta();
    }

    toStringAbstract(idioma) {
    //     if (idioma.equals("EUS"))
    //     {
    //         return "Id: "+getId()+ "\n" + "Kodea: "+getMarca()+ "\n" + "Prezioa: "+getPrecio()+"€"+ "\n" + "Deskontua: "+getDcto()+"%"+ "\n" + "Prime: "+isPrime()+ "\n" + "Kolorea: "+color+ "\n" + "Teklak: "+teclas+ "\n" + "Konektorea: "+conector + "\n" + "Bidalketa: "+getEnvio() + "\n" + "Salmenta-prezioa: "+getPrecioVenta()+"€";
    //     }
    //     else if (idioma.equals("EN"))
    //     {
    //         return "Id: "+getId()+ "\n" + "Brand: "+getMarca()+ "\n" + "Price: "+getPrecio()+"€"+ "\n" + "Discount: "+getDcto()+"%"+ "\n" + "Prime: "+isPrime()+ "\n" + "Color: "+color+ "\n" + "Keys: "+teclas+ "\n" + "Conection: "+conector + "\n" + "Delivery: "+getEnvio() + "\n" + "Sale Price: "+getPrecioVenta()+"€";
    //     }
    //     else
    //     {
    //         return "Id: "+getId()+ "\n" + "Marca: "+getMarca()+ "\n" + "Precio: "+getPrecio()+"€"+ "\n" + "Descuento: "+getDcto()+"%"+ "\n" + "Prime: "+isPrime()+ "\n" + "Color: "+color+ "\n" + "Teclas: "+teclas+ "\n" + "Conector: "+conector + "\n" + "Envio: "+getEnvio() + "\n" + "PVP: "+getPrecioVenta()+"€";
    //     }
    }
}

const teclados = [];
const csvFileData = teclados;
const tableHTML = teclados;
createTable(teclados); 

const crearProducto = () => {
        const listado = document.createElement('ol');
        listado.setAttribute('id', 'listaProductos');
        for( const i of teclados.keys()){
            const item = document.createElement('li');
            item.appendChild(document.createTextNode(teclados[i]));
            item.setAttribute('id', teclados.indexOf(teclados[i]));
            listado.appendChild(item);
        }
        return listado;
    }
    // listaHTML.appendChild(crearProducto());
    ///


    // LISTA DE CANCIONES EN CONSOLA
const listaProductos = () => {
        for ( const j of teclados.keys()){
            console.log(j+1,teclados[j]);
        }
    }

const listaArray = () => {
    for ( let i=0; i < teclados.length;i++){
        console.log(teclados[i].toString());
        // return teclados[i];
    }
    return teclados;
}


const AdicionarProducto = () => {
    
    const teclado = new Teclado();
    
    const id = prompt('Id: (tXXX)',"t");
    teclado.setId = id;

    const marca = prompt('Marca:');
    teclado.setMarca = marca;
    
    const precio = prompt('Precio:');
    teclado.setPrecio = precio;
    
    const dcto = prompt('Descuento:');
    teclado.setDcto = dcto;

    const prime = prompt('Prime? ==> (S/N):');
    teclado.isPrime = prime;

    const color = prompt('Color:');
    teclado.setColor = color;
    
    const conector = prompt('Tipo de Conector:');
    teclado.setConector = conector;

    const teclas = prompt('Numero de Teclas:');
    teclado.setTeclas = teclas;

  
    
    const a = parseCSV(teclado.toString());
    //console.log(a[0]);
    teclados.push(a[0]);
    console.log({teclados});
 
    listaArray();
 
}    

    btnAdicionar.addEventListener('click', () => {

        AdicionarProducto();
        mostrarHTMLCSV();
        createTable(teclados);
    });

    const mostrarHTMLCSV = () =>{
        listaHTML.innerHTML = '';
        listaHTML.appendChild(crearProducto());
    }

    btnBorrar.addEventListener('click', () => {
        consultaNew = window.confirm('Quieres Borrar un Producto?');

        if (consultaNew == true){
            let itemDelete = parseInt(prompt('Producto que desea borrar: ')) - 1;
            console.log(itemDelete);
            //delete(canciones[itemDelete-1]);
            teclados.splice(itemDelete,1)
            listaHTML.innerHTML = '';
            listaHTML.appendChild(crearProducto());
            //console.clear();
            crearProducto(teclados);
            createTable(teclados);       
        }
    });

    btnBorrarId.addEventListener('click', () => {
              
        consultaNew = window.confirm('Quieres Borrar un Producto por el ID?');

        if (consultaNew == true){
            let itemDelete = prompt('Ingresa el ID que deseas borrar: ');
            console.log(itemDelete);
            
            const tecladoFind = teclados.find( id => id[0] === itemDelete );
            console.log(tecladoFind);

            consultaNew = window.confirm(`Item a borrar: ${tecladoFind}`);
            if (consultaNew == true){
                const findIndex = teclados.indexOf(tecladoFind);
                console.log(findIndex);
                teclados.splice(findIndex,1);
                console.log(teclados);
                mostrarHTMLCSV();
                createTable(teclados);
            }            
        }
    });

    btnEditar.addEventListener("click", () => {
      tecladosTemp = [];
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

      async function funcionEditar() {

      const teclado = new Teclado();
      let itemEdit = prompt("Ingresa el ID que deseas editar: ");
      console.log(itemEdit);

      const tecladoFind = teclados.find((id) => id[0] === itemEdit);
      console.log(tecladoFind);
      teclado.setId = tecladoFind[0];
      //   console.log(teclado.getId);
      teclado.setMarca = tecladoFind[1];
      teclado.setPrecio = tecladoFind[2];
      teclado.setDcto = tecladoFind[3];
      teclado.isPrime = tecladoFind[4];
      teclado.setColor = tecladoFind[5];
      teclado.setTeclas = tecladoFind[6];
      teclado.setConector = tecladoFind[7];

    //   setTimeout(() => {
        console.log(teclado);
        const a = parseCSV(teclado.toString());
        tecladosTemp.push(a[0]);

        createTable(tecladosTemp);

        await sleep(1000);

        let key = parseInt(prompt("Escoge opcion:\n1. Codigo\n2. Marca\n3. Precio\n4. Descuento\n5. Tipo de Prime\n6. Color\n7. Numero Teclas\n8. Conector"));

        switch (key) {
          case 1:
            const id = prompt(`Id Producto: ${teclado.getId}\nValor anterior: ${teclado.getId}\nNuevo valor de Id: t`,"t");
            teclado.setId = id;
            break;
          case 2:
            const marca = prompt(`Id Producto: ${teclado.getId}\nValor anterior: ${teclado.getMarca}\nNuevo valor de Marca:`);
            teclado.setMarca = marca;
            break;
          case 3:
            const precio = prompt(`Id Producto: ${teclado.getId}\nValor anterior: ${teclado.getPrecio}\nNuevo valor de Precio:`);
            teclado.setPrecio = precio;
            break;
          case 4:
            const dcto = prompt(`Id Producto: ${teclado.getId}\nValor anterior: ${teclado.getDcto}\nNuevo valor de Descuento:`);
            teclado.setDcto = dcto;
            break;
          case 5:
            const prime = prompt(`Id Producto: ${teclado.getId}\nValor anterior: ${teclado.getPrime}\nNuevo valor de Prime (true/false):`);
            teclado.isPrime = prime;
            break;
          case 6:
            const color = prompt(`Id Producto: ${teclado.getId}\nValor anterior: ${teclado.getColor}\nNuevo valor de Color:`);
            teclado.setColor = color;
            break;
          case 7:
            const teclas = prompt(`Id Producto: ${teclado.getId}\nValor anterior: ${teclado.getTeclas}\nNuevo valor de Numero de Teclas :`);
            teclado.setTeclas = teclas;
            break;
          case 8:
            const conector = prompt(`Id Producto: ${teclado.getId}\nValor anterior: ${teclado.getConector}\nNuevo valor de Conector:`);
            teclado.setConector = conector;
            break;
          default:
            alert("No es ninguna opcion");
            console.log("No es ninguna opcion");
        }
      
      const b = parseCSV(teclado.toString());
      tecladosTemp.push(b[0]);
      createTable(tecladosTemp);

      await sleep(3000);
      
        consultaNew = window.confirm(`Confirmar los cambios?`);
        if (consultaNew == true) {
          const findIndex = teclados.indexOf(tecladoFind);
          console.log(findIndex);
          teclados.splice(findIndex, 1);
          console.log(teclados);
          mostrarHTMLCSV();
          teclados.push(b[0]);
          createTable(teclados);
        } else {
          createTable(teclados);
        }
    }
      
    funcionEditar();

    });


    function parseCSV(text) {
        // Obtenemos las lineas del texto
        let lines = text.replace(/\r/g, '').split('\n');
        return lines.map(line => {
        // Por cada linea obtenemos los valores
        let values = line.split(',');
        return values;
        });
    }
  
    function reverseMatrix(matrix) {
      let output = [];
      // Por cada fila
      matrix.forEach((values, row) => {
        // Vemos los valores y su posicion
        values.forEach((value, col) => {
          // Si la posición aún no fue creada
          if (output[col] === undefined) output[col] = [];
          output[col][row] = value;
        });
      });
      return output;
    }
  

    function readFile(evt) {
        teclados.splice(0,teclados.length);
        let file = evt.target.files[0];
        let reader = new FileReader();
        reader.onload = (e) => {
            // Cuando el archivo se terminó de cargar
            let lines = parseCSV(e.target.result);
            let output = reverseMatrix(lines);
            for(let i=0;i<lines.length;i++){
                const teclado = new Teclado();
                teclado.toString = lines[i];
                console.log(lines[i].toString()); 
                teclados.push(lines[i]);
                // separar items por columna
                // teclado.toString = output[i];
                // console.log(output[i].toString());
                // teclados.push(output[i]);
                listaHTML.innerHTML='';
                listaHTML.appendChild(crearProducto(teclados));
                //console.clear();
                crearProducto(teclados);
            }  
            console.log({teclados});
            createTable(teclados);
        };
        // Leemos el contenido del archivo seleccionado
        reader.readAsBinaryString(file);
    }


    btnExportar.addEventListener("click", () => {
        download_csv_file();
    });


    const mensajeAdvertencia = () => {
        consultaNew = window.confirm('Si tienes elementos agregados, se borraran al momento de importar el archivo');

        if (consultaNew == true){
        }
    }

    // funcion para descargar v1
    function download_csv_file(){
        //define the heading for each row of the data  
        // var csv = 'Col 1,Col 2\n';
        var csv ="";
        //merge the data with CSV  
        csvFileData.forEach(function(row){
        csv += row.join(',');
        csv += "\n";
        });
                //display the created CSV data on the web browser   
        //document.write(csv);
            
        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
        hiddenElement.target = '_blank';
        
        //provide the name for the CSV file to be downloaded  
        hiddenElement.download = 'Lista de Productos.csv';
        hiddenElement.click();
    }

  // funcion para descargar v2
    function exportToCsv(filename, rows) {
        var processRow = function (row) {
            var finalVal = '';
            for (var j = 0; j < row.length; j++) {
                var innerValue = row[j] === null ? '' : row[j].toString();
                if (row[j] instanceof Date) {
                    innerValue = row[j].toLocaleString();
                };
                var result = innerValue.replace(/"/g, '""');
                if (result.search(/("|,|\n)/g) >= 0)
                    result = '"' + result + '"';
                if (j > 0)
                    finalVal += ',';
                finalVal += result;
            }
            return finalVal + '\n';
        };

        var csvFile = '';
        for (var i = 0; i < rows.length; i++) {
            csvFile += processRow(rows[i]);
        }

        var blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
        if (navigator.msSaveBlob) { // IE 10+
            navigator.msSaveBlob(blob, filename);
        } else {
            var link = document.createElement("a");
            if (link.download !== undefined) { // feature detection
                // Browsers that support HTML5 download attribute
                var url = URL.createObjectURL(blob);
                link.setAttribute("href", url);
                link.setAttribute("download", filename);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    }



    // function createTable(tableData) {
    //     var table = document.createElement('table');
    //     var tableBody = document.createElement('tbody');
      
    //     tableData.forEach(function(rowData) {
    //       var row = document.createElement('tr');
      
    //       rowData.forEach(function(cellData) {
    //         var cell = document.createElement('td');
    //         cell.appendChild(document.createTextNode(cellData));
    //         row.appendChild(cell);
    //       });
      
    //       tableBody.appendChild(row);
    //     });
      
    //     table.appendChild(tableBody);
    //     document.body.appendChild(table);
    //   }

      
      function createTable(tableData) {
        var table = document.createElement("table");
        var row = {};
        var cell = {};
        tableData.unshift(['Codigo','Marca','Precio','Descuento','Tipo','Color','Teclas','Conector','Envio','PVP']);
       
        // const ultimoItem = tableData[tableData.length-1];
        // console.log("ULTIMO ITMEM");
        // console.log(ultimoItem);
    
        // itemVector = (ultimoItem[0]);
        // console.log(itemVector);
        // teclados.pop();
        // teclados.push(itemVector);



        tableData.forEach(function (rowData) {
          row = table.insertRow(-1); // [-1] for last position in Safari
          rowData.forEach(function (cellData) {
            cell = row.insertCell();
            cell.textContent = cellData;
          });
        });
        document.body.appendChild(table);
        tablaHTML.innerHTML='';
        tablaHTML.appendChild(table);
        tableData.shift();
        // tableData.splice(0,1);
      }

// Bang it altogether



// const objectToCsv = function (data) {
	
//     const csvRows = [];

//     /* Get headers as every csv data format
//     has header (head means column name)
//     so objects key is nothing but column name
//     for csv data using Object.key() function.
//     We fetch key of object as column name for
//     csv */
//     const headers = Object.keys(data[0]);

//     /* Using push() method we push fetched
//     data into csvRows[] array */
//     csvRows.push(headers.join(','));

//     // Loop to get value of each objects key
//     for (const row of data) {
//         const values = headers.map(header => {
//             const val = row[header]
//             return `${val}`;
//         });

//         // To add, separator between each value
//         csvRows.push(values.join(','));
//     }

//     /* To add new line for each objects values
//     and this return statement array csvRows
//     to this function.*/
//     return csvRows.join('\n');
// };
// ************************************************************************************





  
  




