import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      //Returns the emotions as an HTML table
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Emotion</th>
                <th>Confidence levels </th>
               </tr>
              {
                Object.entries(this.props.emotions).map(([emotion, value]) => {
                  return (
                    <tr>
                    <th>{emotion}</th>
                    <th>{value}</th>
                   </tr>
                  )
                })
              }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;