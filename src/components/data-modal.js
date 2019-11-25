import React from "react";
import { Col } from "reactstrap";
import Modal from "react-responsive-modal";

export default class DataModal extends React.Component {
  render() {
    return (
      <Modal
        open={this.props.showModal}
        closeOnEsc
        onClose={this.props.toggleDataModal}
      >
        <Col className="water-comes-app-data">
          <p>
            Videncentret Bolius er uvildige, og vores viden er baseret på
            offentligt tilgængelige data, som vi blandt andet indhenter gennem
            Bygnings- og Boligregistret (BBR), Kortforsyningen og
            Geodatastyrelsen. Du skal være opmærksom på, at de offentligt
            tilgængelige data kan være behæftet med usikkerheder.
          </p>

          <p>
            Beregneren inddrager følgende kilder for at give dig et indtryk af
            risikoen for oversvømmelse ved stormflod og skybrud:
          </p>
          <ul>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://bbr.dk/forside"
              >
                Bygnings- og Boligregistret (BBR): Oplysninger om kælder
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://miljoegis.mim.dk/spatialmap?mapheight=741&mapwidth=1020&label=&ignorefavorite=true&profile=miljoegis-klimatilpasningsplaner&selectorgroups=nedboer&layers=theme-gst-dtkskaerm_daempet+theme-klimatilp-raster-arealanvendelse+userpoint+userline+userpolygon+bufferzone+smalluserpointsearch+smalluserlinesearch+smalluserpolygonsearch+smalluserpointfound+smalluserlinefound+smalluserpolygonfound+selectorpoint+selectorline+selectorpolygon+selectorbufferzone+redline-line+redline-point+redline-polygon+redline-circle+spatialanalyze-line+spatialanalyze-point+spatialanalyze-polygon+fr-dl-line+fr-dl-point+fn-dl-line+fn-dl-point&opacities=1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1&mapext=283028.79303291155+6064345.176992808+756198.9955342936+6407451.845998736&maprotation="
              >
                MiljøGIS: Befæstelsesgrad
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://miljoegis.mim.dk/spatialmap?mapheight=741&mapwidth=1020&label=&ignorefavorite=true&profile=miljoegis-klimatilpasningsplaner&selectorgroups=nedboer&layers=theme-gst-dtkskaerm_daempet+theme-klimatilp-raster-hydrauliskledningsevne25+userpoint+userline+userpolygon+bufferzone+smalluserpointsearch+smalluserlinesearch+smalluserpolygonsearch+smalluserpointfound+smalluserlinefound+smalluserpolygonfound+selectorpoint+selectorline+selectorpolygon+selectorbufferzone+redline-line+redline-point+redline-polygon+redline-circle+spatialanalyze-line+spatialanalyze-point+spatialanalyze-polygon+fr-dl-line+fr-dl-point+fn-dl-line+fn-dl-point&opacities=1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1&mapext=283028.79303291155+6064345.176992808+756198.9955342936+6407451.845998736&maprotation="
              >
                MiljøGIS: Hydraulisk ledeevne
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://miljoegis.mim.dk/spatialmap?mapheight=741&mapwidth=1020&label=&ignorefavorite=true&profile=miljoegis-klimatilpasningsplaner&selectorgroups=nedboer+gst_dhym_bluespot&layers=theme-gst-dtkskaerm_daempet+theme-gst-bluespot_ekstremregn_0_015+theme-gst-bluespot_ekstremregn_0_030+userpoint+userline+userpolygon+bufferzone+smalluserpointsearch+smalluserlinesearch+smalluserpolygonsearch+smalluserpointfound+smalluserlinefound+smalluserpolygonfound+selectorpoint+selectorline+selectorpolygon+selectorbufferzone+redline-line+redline-point+redline-polygon+redline-circle+spatialanalyze-line+spatialanalyze-point+spatialanalyze-polygon+fr-dl-line+fr-dl-point+fn-dl-line+fn-dl-point&opacities=1+1+0+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1&mapext=190649.22484513494+6001811.908164438+886619.5968245736+6506476.138486475&maprotation="
              >
                MiljøGIS: Lavning
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://miljoegis.mim.dk/spatialmap?mapheight=741&mapwidth=1032&label=&ignorefavorite=true&profile=miljoegis-klimatilpasningsplaner&selectorgroups=nedboer+gst_dhym_havvandpaaland&layers=theme-gst-dtkskaerm_daempet+theme-gst-havvandpaaland_2+theme-gst-havvandpaaland_2_1+theme-gst-bluespot_ekstremregn_0_015+theme-gst-bluespot_ekstremregn_0_030+userpoint+userline+userpolygon+bufferzone+smalluserpointsearch+smalluserlinesearch+smalluserpolygonsearch+smalluserpointfound+smalluserlinefound+smalluserpolygonfound+selectorpoint+selectorline+selectorpolygon+selectorbufferzone+redline-line+redline-point+redline-polygon+redline-circle+spatialanalyze-line+spatialanalyze-point+spatialanalyze-polygon+fr-dl-line+fr-dl-point+fn-dl-line+fn-dl-point&opacities=1+1+0+0+0+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1&mapext=186535.11427185748+6001811.908164438+890733.7073978509+6506476.138486475&maprotation="
              >
                MiljøGIS: Stormflod
              </a>
            </li>
          </ul>
        </Col>
      </Modal>
    );
  }
}
