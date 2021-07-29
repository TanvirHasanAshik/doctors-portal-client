import React from 'react';
import './Exceptional.css';
import dentalImg from '../../../images/dental.png';
const Exceptional = () => {
    return (
        <section className="container exceptional-container ">
            <div className="row mt-5 pt-5">
                <div className="col-md-6 d-flex justify-content-end">
                    <img className="img-fluid exceptional-img" src={dentalImg} alt="" />
                </div>
                <div className="col-md-6 mt-5">
                    <h1 style={{color: '#40485C'}} >Exceptional Dental <br /> Care, on your Terms</h1>
                    <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, vitae pariatur? Quaerat natus ratione impedit facilis ducimus. Architecto hic dignissimos facilis quos voluptate totam cupiditate nam nisi veritatis consequuntur dolorem, ipsa voluptatibus odio quis unde tempore neque obcaecati possimus doloremque optio rem saepe? Voluptate debitis eligendi cupiditate alias commodi enim eos quo qui ad ducimus nemo, ipsam delectus ipsa natus tempora. Et nostrum ratione optio fugit iste assumenda sed impedit repellat perspiciatis. Dicta quaerat neque at sapiente velit necessitatibus cupiditate!</p>
                    <button className="btn text-white mt-5">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default Exceptional;