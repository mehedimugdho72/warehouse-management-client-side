import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='mx-auto m-5 col-lg-8 col-md-12 col-sm-12 col-12'
        data-aos="zoom-in">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0" className='mb-3'>
                    <Accordion.Header>Difference between Node.JS and Javascript?</Accordion.Header>
                    <Accordion.Body>
                        <h3 className='text-primary'>NodeJS:-</h3>
                        <li>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </li>
                        <h3 className='text-primary'>JavaScript :-</h3>
                        <li>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </li>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='mb-3'>
                    <Accordion.Header>When should we use NodeJS and when should we use MongoDB?</Accordion.Header>
                    <Accordion.Body>
                        <h3 className='text-primary'>When should we use Nodejs?:-</h3>
                        <li>if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it.</li>
                        <h3 className='text-primary'>When should we use MongoDB?:-</h3>
                        <li>If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database.MongoDB is one such database.</li>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Difference between SQL and NoSQL.</Accordion.Header>
                    <Accordion.Body>
                        <h3 className='text-primary'>SQL:-</h3>
                        <li>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</li>
                        <li>These databases have fixed or static or predefined schema</li>
                        <li>Vertically Scalable</li>
                        <li>Follows ACID property</li>

                        <h3 className='text-primary'>NoSQL:-</h3>
                        <li>Non-relational or distributed database system.</li>
                        <li>They have dynamic schema</li>
                        <li>Horizontally scalable</li>
                        <li>Follows CAP(consistency, availability, partition tolerance)</li>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;