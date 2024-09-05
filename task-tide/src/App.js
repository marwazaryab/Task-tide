
import './App.css';
import TaskComponent from './TaskComponent';


function App() {
  return (
    <div className="app"> TASK TIDE

        <TaskComponent />
        <main className='app_main'>
        
          <section className='task_column'>
            To Do 🚀
          </section>

          <section className='dev_column'>
            In Development 🛠️
          </section>

          <section className='complete_column'>
            Complete ✅
          </section>



        </main>



    </div>
  );
}

export default App;
