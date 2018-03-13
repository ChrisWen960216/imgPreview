/** Created By ChrisWen
 *  18/03/13
 *  PreviewImgContainer
 */
import React from 'react';
import '../../public/style/container.less';

/** props
 *  1. projectSize --- Container Size
 *  2. arealist --- [{areaId,areaStyle,playItemUrl}]
 *  3. areaStyle:{width,height,top,left}
 *  4. selectedAreaId --- selectedArea highLight
 */

function renderAreaList(areaList, selectedAreaId) {
  const renderList = areaList.map((area) => {
    const {
      id, style, src = '',
    } = area;

    const className = id === selectedAreaId ? 'active' : '';
    return (
      <div className={`areaEle ${className}`} key={id} style={style}>
        <img src={src} alt="" />
      </div>);
  });
  return renderList;
}

const PreviewContainer = (props) => {
  /* We have reached an agreement that 65535 is the number can not be touched.
   * 65535 means null;
   */
  const { projectSize, areaList, selectedAreaId = 65535 } = props;
  const areaListEle = renderAreaList(areaList, selectedAreaId);
  return (
    <div className="container-wapper">
      <div id="preview-container" style={projectSize}>{areaListEle}</div>
    </div>
  );
};


export default PreviewContainer;
