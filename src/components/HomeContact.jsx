import React from 'react'
import Form from 'react-bootstrap/Form';
const HomeContact = () => {
  return (
    <section className="form_section">       
        <div className="container">
            <div className="row pt-5">
                <h3>RESERVATION</h3>
                <h1 className="wow bounceInRight">BOOK YOUR SEAT AND CONTACT OUR TEAM</h1>
            </div>
            <div className="row input_fild">
                <div className="col-md-4">
                    <form action="">
                        <Form.Control type="text" className="form-control mt-5" placeholder=" Your Name" required/>
                    </form>
                </div>
                <div className="col-md-4">
                    <form action="">
                        <Form.Control type="email" className="form-control mt-5" placeholder=" Your Email" required/>
                    </form>
                </div>
                <div className="col-md-4">
                    <form action="">
                        <Form.Control type="number" className="form-control mt-5" placeholder=" Your Phone" required/>
                    </form>
                </div>
                <div className="col-md-4">
                    <form action="">
                        <Form.Control type="text" className="form-control mt-5" placeholder=" Time" required/>
                    </form>
                </div>
                <div className="col-md-4">
                    <form action="">
                        <Form.Control type="text" className="form-control mt-5" placeholder=" # of people" required />
                    </form>
                </div>
                <div className="col-md-4">
                    <form action="">
                        <Form.Control type="text" className="form-control mt-5" placeholder="Date" required/>
                    </form>
                </div>

                <div className="col-md-12">
                    <form action="">
                        <textarea name="" id="f" cols="30" rows="10" className="form-control mt-5" placeholder="Message" required></textarea>
                    </form>
                </div>
                <div className="col-md-3 button my-5 m-auto">
                    <form action="">
                        <Form.Control type="submit" value="Send"/>
                    </form>
                </div>
            </div>
        </div>
    </section>                         
  )
}

export default HomeContact