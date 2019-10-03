export class Layout {
    public column1Size : number;
    public column2Size : number;
    public column3Size : number;
    public skinColor : string;

    public firstColAsFirstCol : boolean;
    public secondColAsSecondCol : boolean;
    public thirdColAsThirdCol : boolean;
    public firstColAsSecondCol : boolean;
    public firstColAsThirdCol : boolean;
    public secondColAsFirstCol : boolean;
    public secondColAsThirdCol : boolean;
    public thirdColAsFirstCol : boolean;
    public thirdColAsSecondCol : boolean;

    constructor(col1Size: number,
        col2Size : number, 
        col3Size : number, 
        skinColor : string,
        firstColAsFirstCol? : boolean,
        secondColAsSecondCol? : boolean,
        firstColAsSecondCol? : boolean,
        firstColAsThirdCol? : boolean,
        secondColAsFirstCol? : boolean,
        secondColAsThirdCol? : boolean
        ) {
        this.column1Size = col1Size;
        this.column2Size = col2Size;
        this.column3Size = col3Size;
        this.skinColor = skinColor;
        this.firstColAsFirstCol = firstColAsFirstCol;
        this.secondColAsSecondCol = secondColAsSecondCol;
        // this.thirdColAsThirdCol = thirdColAsThirdCol;
        this.firstColAsSecondCol = firstColAsSecondCol;
        this.firstColAsThirdCol = firstColAsThirdCol;
        this.secondColAsFirstCol = secondColAsFirstCol;
        this.secondColAsThirdCol = secondColAsThirdCol;
        // this.thirdColAsFirstCol = thirdColAsFirstCol;
        // this.thirdColAsSecondCol = thirdColAsSecondCol;
    }
}