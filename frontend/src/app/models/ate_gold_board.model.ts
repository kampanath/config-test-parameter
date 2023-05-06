export class ate_gold_board {
    serial_no: string;
    model_no: string;
   
}

export interface ate_gold_boardAll {
    result: ate_gold_board[],
    message: string
}

export interface ate_gold_boardBy{
    result: ate_gold_board,
    message: string
}