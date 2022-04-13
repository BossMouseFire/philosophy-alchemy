import React from 'react';
import styles from './modalHelper.module.scss';
import StepOne from '../../assets/stepOne.svg';
import StepTwo from '../../assets/stepTwo.svg';
import StepThree from '../../assets/stepThree.svg';

export const ModalContentHelper: React.FC = () => {
  return (
    <div className={styles.modalHelperContent}>
      <div className={styles.title}>Как играть в Алхимию философии?</div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <figure className={styles.imgBlock}>
            <img src={StepOne} />
            <figcaption>Шаг 1. Закрепить первый элемент</figcaption>
          </figure>
          <span className={styles.description}>
            Кликните на любой элемент карты, чтобы закрепить его в левую секцию слияния. Элемент,
            закрепленный в левой секции, не пропадет при неудачном слиянии. Для того, чтобы убрать
            закрепленный элемент, просто кликните по нему.
          </span>
        </div>
        <div className={styles.step}>
          <figure className={styles.imgBlock}>
            <img src={StepTwo} />
            <figcaption>Шаг 2. Закрепить второй элемент</figcaption>
          </figure>
          <span className={styles.description}>
            Кликните на любой элемент карты, чтобы закрепить его в правую секцию слияния. Элемент,
            закрепленный в правой секции, пропадет при неудачном слиянии.
          </span>
        </div>
        <div className={styles.step}>
          <figure className={styles.imgBlock}>
            <img src={StepThree} />
            <figcaption>Шаг 3. Исследовать новый элемент</figcaption>
          </figure>
          <span className={styles.description}>
            При добавлении второго элемента автоматически запустится процесс слияния. При удачном
            слиянии вы откроете новый элемент!
          </span>
        </div>
      </div>
      <span className={styles.chooseEraText}>
        Снизу от карты расположена навигационная панель по эпохам: здесь вы можете переключаться
        между эпохами и исследовать философские взгляды разных времен! ВАЖНО: Каждая эпоха содержит
        в себе уникальные элементы, не повторяющиеся в других эпохах. Однако для получения некоторых
        элементов могут потребоваться как один, так и, возможно, сразу два элемента из предыдущих
        эпох.
      </span>
      <span className={styles.lucky}>Желаем удачи в изучении таинственного мира философии!</span>
    </div>
  );
};
