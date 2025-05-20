
import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButtons.jsx";
import { EXAMPLES } from "./data";
function App() {
const[selectedTopic,setSelectedTopic]=useState('')
  function handelSelect(selectedButton){
    setSelectedTopic(selectedButton)
    console.log(selectedButton);
  }
  return (
    <div>
      <main>
        <Header />
        <h2>Time to get started!</h2>
      </main>
      <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((CORE_CONCEPTSITEM)=>  <CoreConcepts
           {...CORE_CONCEPTSITEM}
          />)}
          {/* <CoreConcepts
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          />
          <CoreConcepts
          {...CORE_CONCEPTS[1]}
          />
          <CoreConcepts
             {...CORE_CONCEPTS[2]}
          /> */}
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
         <TabButton isSelected={selectedTopic==='components'} onSelect={()=>handelSelect('components')}>Components</TabButton>
         <TabButton  isSelected={selectedTopic==='jsx'} onSelect={()=>handelSelect('jsx')}>JSX</TabButton>
         <TabButton  isSelected={selectedTopic==='props'} onSelect={()=>handelSelect('props')}>Props</TabButton>
         <TabButton  isSelected={selectedTopic==='state'} onSelect={()=>handelSelect('state')}>State</TabButton>
        </menu>
       <div  id="tab-content">
       {selectedTopic ?(
        <>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre></>
       ):("Please Select the Topic")}
        
       </div>
      </section>
      </main>
    </div>
  );
}

export default App;
