import 'split-pane-react/esm/themes/default.css'
import { useState } from "react";
import ProjectTopBar from '../components/layout/project/ProjectTopBar';
import ProjectSideBar from '../components/layout/project/ProjectSideBar';
import SplitPane from 'split-pane-react/esm/SplitPane';
import { Pane } from 'split-pane-react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DesignToolbar from '../components/DesignPage/DesignToolbar';
import Canvas from '../components/Canvas/Canvas';
import DeployWindow from '../components/Deploy/DeployWindow';

const ProjectEditPage = (props) => {

    const [sizes, setSizes] = useState(
        ['82%', '18%'] 
    )
    const [canvas2D, setCanvas2D] =  useState(false)
    const [currentWindow, setCurrentWindow] = useState("design")
    
    return <div>
        <ProjectTopBar />
        <DndProvider backend={HTML5Backend}>
            <div className='container-fluid'>
                <div className='row vh-100 g-0'>
                    <div className='col-md-2'>
                        <ProjectSideBar />
                    </div>
                    <div className='col-md-10 px-3'>
                        <DesignToolbar 
                            canvas2D={canvas2D} 
                            setCanvas2D={() => setCanvas2D(!canvas2D)}
                            currentWindow={currentWindow}
                            setCurrentWindow={setCurrentWindow}
                        />
                        <SplitPane
                            split='horizontal'
                            sizes={sizes}
                            onChange={setSizes}
                            className='border-end'
                        >
                            <Pane className='d-flex' minSize={50} maxSize='90%'>
                                <div className='container-fluid d-flex'>
                                    {
                                        currentWindow === "design" && <Canvas canvas2D={canvas2D} />
                                    }
                                    {
                                        currentWindow === "deploy" && <DeployWindow />
                                    }
                                </div>
                            </Pane>
                            <Pane>
                                <div className="row border-top">
                                    <div className='col-md-12'>
                                    </div>
                                </div>
                            </Pane>
                        </SplitPane>
                    </div>
                </div>
            </div>
        </DndProvider>
    </div>
}

export default ProjectEditPage