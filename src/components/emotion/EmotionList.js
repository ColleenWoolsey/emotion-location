import React, { Component } from "react";
import EmotionCard from "./EmotionCard";
import TaskCard from "../task/TaskCard";
import TaskManager from "../../modules/TaskManager";
import LoginManager from "../../modules/LoginManager";
import ArticleManager from "../../modules/ArticleManager";
import JournalCard from "../article/JournalCard";
import ArticleList from "../article/ArticleList";
import "./List.css";
export default class EmotionList extends Component {

  state = {
    tasks: [],
    user: [],
    articles: []   
  };

  deleteTask = task =>
    TaskManager.del(task)
      .then(() => TaskManager.getTasksByUser(sessionStorage.getItem("user")))
      .then(tasks =>
        this.setState({
          tasks: tasks
      })
  );

  addCheckChange = (changedObj, id) => {
    console.log("id (task) from addCheckChange", id);
    return TaskManager.patch(changedObj, id)
    .then(() => TaskManager.getTasksByUser(sessionStorage.getItem("user"))
    .then(response =>
     this.setState({
       tasks: response
      })
    ))
  }

  componentDidMount() {
    
    TaskManager.getTasksByUser(sessionStorage.getItem("user"))
    .then(allTasks => {
        this.setState({
            tasks: allTasks
        })        
        console.log("allTasks(getTasksByUser) from componentDidMount", allTasks)
        console.log ("After tasksCDM - this.props", this.props)
        console.log ("After tasksCDM - this.state", this.state)
    })
  };

  render() {

    this.props.tasks.sort(function(a, b) 
                {a = new Date(a.dueDate);
                 b = new Date(b.dueDate);
                 return a>b ? -1 : a<b ? 1 : 0;}).reverse();
    return (      
      <React.Fragment>
        
        <div className="container">

          <div className="left">

            <div className="emotions-list">
                {this.props.emotions.map(emotion => (
                  <EmotionCard key={emotion.id} emotion={emotion} {...this.props} />
                ))}
            </div>
            {/* End of div emotions-list */} 

            <div className="bottom-left">

              <div className="search">
              
                <div>                
                  <button
                    type="button"
                    className="listArticlesBtn"
                    onClick={() => {              
                      this.props.history.push("/articles")                         
                  }}>                  
                    Read Journal Entries
                  </button>                  
                </div>

                <div>
                  <h4 className="reflect">... reflect... repent... rejoice... reconcile</h4>
                </div>

              </div>
              {/* End of div search */}

              <div className="journal-article">
              < JournalCard
                {...this.props}
                articles={this.state.articles}
                addArticle= {this.state.addArticle}
                addArticle= {this.props.addArticle}
                
                />        
              </div>
              {/* End of div journal-article */}

            </div>
             {/* End of div bottom-left */}                
            
          </div>
          {/* End of div left */}
          
          <div className="right">
            <div className="top-right">

              <div>
                <h2 className="header">How are you feeling {sessionStorage.getItem("userName")}?</h2>
              </div>

              <div className="header-add-task">
                <h4 className="to-be-header">MY-TO-BE-LIST</h4>
                <button
                  type="button"
                  className="addTaskBtn"
                  onClick={() => {
                    this.props.history.push("/tasks/new");   
                  }}>
                  Add A Task
                </button>
              </div>
              {/* End of div header-add-task */}

              <div className="tasks-list">                                
                {this.state.tasks.map(task => (
                  <TaskCard key={task.id} task={task} {...this.props} 
                  tasks={this.state.tasks}
                  addTask={this.addTask}
                  deleteTask={this.deleteTask}
                  updateTask={this.updateTask}
                  addCheckChange={this.addCheckChange}/>                  
                  ))                
                }
              </div>
              {/* End of div tasks-list */}

            </div>
            {/* End of div top-right */}

           </div>
          {/* End of div right */}

          </div>
          {/* End of div Contaiiner */}
      </React.Fragment>
    );
  }
}