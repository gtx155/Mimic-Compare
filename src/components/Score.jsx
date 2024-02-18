function Score(props) {
    switch(props.scoreNum) {
        case 10:
            console.log("case10");
        break;
        case 15:
            console.log("case15");
        break;
        case 20:
            console.log("case20");
        default:
        break;
      }

return (
    <>
    <p>Score:{props.scoreNum}</p>
    </>
)
}

export default Score