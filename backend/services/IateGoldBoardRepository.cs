using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface IateGoldBoardRepository
    {
        
     IEnumerable<ate_gold_board> Getate_gold_boardAll();
     
         ate_gold_board Getate_gold_boardBySN(string id);

         ate_gold_board Addate_gold_board(ate_gold_board model);

         ate_gold_board Updateate_gold_board(ate_gold_board model);

         void Deleteate_gold_board(ate_gold_board model);

       
    }
}
