import React from "react";

function PrivacyPolicy() {
  return (
    <div id="privacy" className="modal fade" role="dialog" aria-hidden="true">
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">מדיניות פרטיות</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-4">
            <p className="text-end">
              זכויות יוצרים

              כל זכויות הקניין הרוחני, לרבות פטנטים, זכויות היוצרים, הדגמים, המדגמים והסודות המסחריים, הנם רכושם של החברה בלבד או של צדדים שלישיים אחרים שהרשו להנהלת האתר להשתמש בהם.

              זכויות אלה חלות בין השאר על הנתונים באתר, לרבות רשימת המוצרים, תאור ועיצוב המוצרים וכל פרט אחר הקשור להפעלתו.

              זכויות אלה חלות גם על שם האתר ושם המתחם  של האתר, סימני המסחר (בין אם נרשמו ובין אם לא) הם כולם רכושה של החברה. אין לעשות בהם שימוש בלא קבלת הסכמתה בכתב ומראש.

              אין להעתיק, לשכפל, להפיץ, למכור, לשווק, להשכיר ולתרגם מידע כלשהו מהאתר, לרבות סימני מסחר, תמונות וטקסטים, עיצוב המוצרים תמונות המוצרים וכיו”ב בלא קבלת אישור מראש ובכתב של החברה.

              אין לקשר לתכנים מהאתר, שאינם דף הבית של האתר (קישור עמוק) ואין להציג או לפרסם תכנים כאמור בכל דרך שהיא, אלא אם הקישור העמוק יהיה לדף האינטרנט באתר במלוא וכפי שהוא, כך שניתן יהיה לצפות ולהשתמש בו באופן הזהה לחלוטין לשימוש ולצפייה בו באתר  וזאת תוך קבלת ההסכמה מהנהלת האתר.

              הנהלת האתר רשאית להורות על ביטול של קישור עמוק גם לאחר מתן הסכמתה וזאת לפי שיקול דעתה הבלעדי ובמקרב זה לא תהיה לך כל טענה ו/או דרישה ו/או תביעה כלפי הנהלת האתר.

            </p>
            <ul className="lh-lg">
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
