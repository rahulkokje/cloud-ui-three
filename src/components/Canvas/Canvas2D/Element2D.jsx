import { useDrag } from "react-dnd"
import { ItemTypes } from "../../../helpers/ItemTypes"
import { ec2 } from "../../icons/aws/ec2/ec2"

const Element2D = ({ id, left, top, resource, hideSourceOnDrag }) => {

    const style = {
        position: 'absolute',
        cursor: 'move',
        height: '50px', 
        width: '50px'
    }

    const [{ isDragging }, drag] = useDrag(
        () => ({
            type: ItemTypes.ELEMENT_2D,
            item: { id, left, top, type: ItemTypes.ELEMENT_2D },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }),
        [id, left, top]
    )

    if(isDragging && hideSourceOnDrag) {
        return <div ref={drag} />
    }

    return <div 
        className="card"
        ref={drag} 
        style={{ ...style, left, top }}
        dara-testid="element-2d"
        >
            { resource.type === '' ? ec2['default'] : ec2[resource.type] }
    </div>
}

export default Element2D