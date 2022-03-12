import React from 'react';
import { AboutComponent, LayoutPage, GameComponent } from '../../components';
import styles from './mainPage.module.scss';

export const MainPage: React.FC = () => {
  console.log('ff');
  return (
    <LayoutPage className={styles.mainPage}>
      <div className={styles.info}>
        <div className={styles.titleComponent}>
          <span>АЛХИМИЯ ФИЛОСОФИИ</span>
        </div>
        <AboutComponent
          title={'Античная философия'}
          years={'Конец VII в до н.э. - 6 в. н.э.'}
          description={
            'Родина философии как самостоятельной и особой сферы духовной активности – Греция. В ней\n' +
            '            сложились уникальные социокультурные условия ее зарождения, позволившие мыслителям\n' +
            '            древности преодолеть традиционную мифопоэтическую картину мира и постичь тайны бытия с\n' +
            '            помощью разума. Более тысячи лет просуществовала античная традиция философствования (до\n' +
            '            закрытия всех греческих философских школ как языческих по указу императора Византии\n' +
            '            Юстиниана). Античное миросозерцание своим центром полагает космос, сменивший хаос\n' +
            '            благодаря богам, принесшим в мир логос. Описывая космос, мы опираемся на понятия\n' +
            '            гармонии, меры порядка; греческий космос одушевленный, разумный, чувственно-телесный,\n' +
            '            живой. Он, подобно куполу, замкнут; здесь живут боги и люди. Вечные циклы определяют\n' +
            '            жизнь космоса: рождение – расцвет – распад – гибель и снова рождение. В эту эпоху нет\n' +
            '            акцента на неповторимой индивидуальности человека, он – «человек-в-космосе»; индивид не\n' +
            '            уникален, это микрокосм (целый малый космос), такой же прекрасный, разумный и живой. В\n' +
            '            этом смысле столь же космичны леса, пашни, животные, здания, города, корабли, семьи и\n' +
            '            все прочее.Главная проблема ранней философии - попытка выявить универсальные основания\n' +
            '            космической целостности и гармонии, первые начала жизни и ума. Краеугольным вопросом для\n' +
            '            разрешения этой проблемы становится формулировка: из чего все (возникло)?'
          }
        />
        <div className={styles.actions}>fdfd</div>
      </div>
      <GameComponent />
    </LayoutPage>
  );
};
