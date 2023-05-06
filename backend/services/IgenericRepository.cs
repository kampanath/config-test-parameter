using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface IgenericRepository
    {
        IEnumerable<getTableNames> GetAllTableNames();
        IEnumerable<genericIMEI> GetIMEILatestRow(string tableName);

        IEnumerable<genericIMEI> GetIMEIAllTable(string tableName);

        genericIMEI AddGenericIMEI(genericIMEI model, string id);

        IEnumerable<genericCheckDuplicate> checkIMEIDuplicate(string tableName, string[] IMEI);

        IEnumerable<ateCalibration> ateCalAllToday(string stationNameParam, string fixtureNameParam, string startDateParm, string stopDateParam);
        IEnumerable<ateCalibrationATEName> GetTbAteCalByATENameColumn();

        IEnumerable<ateCalibrationFixtureName> GetateCalFixtureNameByATEName(string ATEName);

    }
}