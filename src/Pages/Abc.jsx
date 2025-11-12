import CreateProductCard from "./CreateProductCard";

function Abc({data}){

     var person={
          name:"abhsiehk",
          age:25,
          college:"lnct"
     }

     var {name,age,collge}=person;



     return (

          <>
          <h1>hello {name} {data}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere non, mollitia corporis repellat qui libero eaque harum aspernatur sapiente, et illo aperiam. Aspernatur voluptate unde hic culpa sint natus illum.</p>
          <CreateProductCard/>
          </>
     )
}

export default Abc;