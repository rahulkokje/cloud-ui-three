import { useCallback, useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { useDrop } from "react-dnd"
import { ItemTypes } from "../../../helpers/ItemTypes"
import { useDispatch, useSelector } from "react-redux"
import Element2D from "./Element2D.jsx"
import update from "immutability-helper"
import { addDesignElement } from "../../../store/designSlice"

const Canvas2D = ({ selectedElement, handleElementSelection }) => {

    const { darkMode } = useContext(ThemeContext)
    const elements = useSelector((state) => state.designSlice.elements)
    const dispatch = useDispatch()

    const moveElement = useCallback(
        (id, left, top) => {
            dispatch(addDesignElement(
                update(elements, {
                    [id]: {
                        $merge: {
                            position: {
                                left, top
                            }
                        }
                    }
                })
            ))
        },
        [elements, dispatch]
    )

    // Make canvas droppable
    const [, drop] = useDrop(() => ({
            accept: [ItemTypes.ELEMENT_CARD, ItemTypes.ELEMENT_2D],
            drop: (item, monitor) => {
                if(item.type === ItemTypes.ELEMENT_2D) {
                    const delta = monitor.getDifferenceFromInitialOffset()
                    const left = Math.round(item.left + delta.x)
                    const top = Math.round(item.top + delta.y)
                    moveElement(item.id, left, top)
                }
                return { name: "Canvas2D" }
            },
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop()
            })
        }),
        [moveElement]
    )

    // Grid Styling
    const dotColor = darkMode ? '#999' : '#000'
    const gridBg = {
        backgroundSize: '40px 40px',
        backgroundImage: `radial-gradient(circle, ${dotColor} 1px, rgba(0, 0, 0, 0) 1px)`,
        position: 'relative'
    }

    return <div style={{ width: '100%' }} ref={drop} data-testid="Canvas2D">
        <div className="row d-flex justify-content-center w-100 h-100" style={{ backgroundColor: darkMode ? '#222' : '#efefef' }}>
            <div className="col-md-12 canvas-bg d-block" style={gridBg}>
                {
                    Object.keys(elements).map((key) => {
                        const element = elements[key]
                        return <Element2D
                            key={key}
                            id={key}
                            left={element.position.left}
                            top={element.position.top}
                            resource={element.resource}
                            hideSourceOnDrag={true}
                            selectedElement={selectedElement}
                            handleElementSelection={(element) => handleElementSelection(element)}
                        />
                    })
                }
            </div>
        </div>
    </div>
}

export default Canvas2D