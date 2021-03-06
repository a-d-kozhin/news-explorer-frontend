import aboutPhoto from '../../images/about-photo.png';

function About() {
  return (
    <section className='about'>
      <img src={aboutPhoto} className='about__photo' alt='Здесь должно быть фото автора'></img>
      <div className='about__wrapper'>
        <h3 className='about__header'>Об авторе</h3>
        <p className='about__text'>
          Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.</p>
        <p className='about__text'>
          Также можно рассказать о процессе обучения в Практикуме, чему вы тут  научились, и чем можете помочь потенциальным заказчикам.
      </p>
      </div>
    </section>
  );
}

export default About;