export const Practice4 = () => {
  const calcTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice4 = () => calcTotalFee(1000);
  return (
    <div>
      <p>練習問題4</p>
      <button onClick={onClickPractice4}>練習問題4を実行</button>
    </div>
  );
};
