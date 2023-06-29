import { ec2 } from '../../icons/aws/ec2/ec2'

const ResourceDetailsWindow = ({ selectedElement }) => {

    return <>
        {
            selectedElement === null && <div className="text-center alert alert-danger m-4">
                <small>Select Element to Display Details</small>
            </div>
        }
        {
            selectedElement !== null && <div className='row d-flex justify-content-center'>
                <div className='col-md-11 p-4'>
                    <div className='row'>
                        <div className='col-md-3'>
                            { ec2[selectedElement.resource.type] }
                        </div>
                        <div className="col-md-9 p-1">
                            <p className='fs-6 p-0 m-0'>{selectedElement.resource.shortName}</p>
                            <p className='text-secondary p-0 m-0' style={{ fontSize: "11px" }}>
                                {selectedElement.resource.fullName}
                            </p>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        }
    </>
}

export default ResourceDetailsWindow