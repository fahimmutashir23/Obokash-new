import React, { useState } from 'react'
import ReactFlagsSelect from 'react-flags-select'

const VisaPackage = () => {
    const [selected2, setSelected2] = useState("");
  return (
    <div>
        <h1 className='text-center my-5'>Visa Service</h1>
        <p className='text-center fw-5'>OUR ALL TOUR AND TRAVELS ARE INTERNATIONAL SUPPORTED TRUSTED AGENCY IN BANGLADESH</p>

        <div className='visaPackageCuntry shadow p-5 my-5'>

            <div>
                <h6 className="mt-2">YOUR NATIONALITY</h6>
                <ReactFlagsSelect
                selected={selected2}
                onSelect={(code) => setSelected2(code)}
                searchable
                />
            </div>
            <div>
                <h6 className="mt-2">TOUR CUNTRY</h6>
                <ReactFlagsSelect
                selected={selected2}
                onSelect={(code) => setSelected2(code)}
                searchable
                />
            </div>
        </div>
    </div>
  )
}

export default VisaPackage
