import React from 'react';
import './About.css';
import tanjum1 from '../../../image/Tanjum/tanjum1.jpg';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const About = () => {
    return (
        <div>
            <PageTitle title='About'></PageTitle>
            <div className='about'>
            <img width={300} height={300} src={tanjum1} alt="" />
            <h4>Tanjum Nahar</h4>
            <p>B.Sc in Botany</p>
            <p>Lalmatia Girls College</p>
            <p>MohammedPur, Dhaka</p>
            <button className='btn btn-primary mx-5'>Contact me</button>
            <button className='btn btn-success'>Send Email</button>
            <br />
            <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam optio amet fuga dolorum maiores, porro velit vel aut officiis. Quisquam ipsa cumque illum consectetur corporis reiciendis earum et vitae! Veniam delectus corporis, consectetur eaque autem enim dolorem earum nulla est illo nobis aut reprehenderit corrupti molestiae. Exercitationem nostrum minus impedit recusandae asperiores doloribus nemo ipsam in beatae reprehenderit, dicta fugiat rerum, fugit consequatur eveniet praesentium. Voluptates impedit hic ab natus at saepe. Voluptatum cum fuga excepturi saepe temporibus incidunt. Unde est sit odit. Dolore voluptatem qui harum, iure error illum sunt excepturi distinctio ipsum consectetur dolores quia maxime ullam esse, exercitationem voluptates consequatur, odit eligendi? Animi, voluptate dolorem minima amet adipisci incidunt atque. Modi, laboriosam. Culpa voluptas at voluptatem ducimus! Ut sapiente iusto omnis aut laborum cupiditate praesentium asperiores tempore accusantium? Nisi non amet ea nihil recusandae labore aperiam deleniti nobis, odit libero praesentium incidunt ipsa assumenda saepe fugit nulla iusto nesciunt delectus dignissimos officiis ipsum, quia magnam veritatis vitae. Deleniti, vel fugit ipsa ex vero quaerat nesciunt fugiat sapiente porro ea aspernatur nostrum eaque nisi recusandae aperiam laboriosam harum veniam fuga. Atque, quo ipsam nobis recusandae sunt quisquam ratione nesciunt aspernatur totam, hic aliquid aliquam amet architecto fugiat nemo.</small>
            </div>
        </div>
    );
};

export default About;