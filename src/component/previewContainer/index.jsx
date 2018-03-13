/** Created By ChrisWen
 *  18/03/13
 *  PreviewImgContainer
 */
import React from 'react';
import '../../public/style/container.less';
// import connect from 'react-redux';

/** props
 *  1. projectSize --- Container Size
 *  2. arealist --- [{areaId,areaWidth,areaHeight,playItemUrl}]
 *  3. selectedAreaId --- selectedArea highLight
 */

function renderAreaList(areaList, selectedAreaId) {
  const renderList = areaList.map((area) => {
    const {
      id, width, height, src = '',
    } = area;

    const className = id === selectedAreaId ? 'active' : '';
    const style = { width, height };
    return (<div className={`areaEle ${className}`} key={id} style={style} src={src || ''} alt="" />);
  });
  return renderList;
}

const PreviewContainer = (props) => {
  const { projectSize, areaList, selectedAreaId = 65535 } = props;
  const style = { width: projectSize.width, height: projectSize.height };
  const areaListEle = renderAreaList(areaList, selectedAreaId);
  return (<div id="preview-container" style={style}>{areaListEle}</div>);
};


export default PreviewContainer;
// function mapStateToProps(state) { }
// function mapDisptachToProps(dispatch, ownProps) { }

// export default connect(mapStateToProps, mapDisptachToProps)(PreviewContainer);
