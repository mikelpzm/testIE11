/*!
 * Copyright 2011 E.J.I.E., S.A.
 *
 * Licencia con arreglo a la EUPL, Versión 1.1 exclusivamente (la «Licencia»);
 * Solo podrá usarse esta obra si se respeta la Licencia.
 * Puede obtenerse una copia de la Licencia en
 *
 *      http://ec.europa.eu/idabc/eupl.html
 *
 * Salvo cuando lo exija la legislación aplicable o se acuerde por escrito, 
 * el programa distribuido con arreglo a la Licencia se distribuye «TAL CUAL»,
 * SIN GARANTAS NI CONDICIONES DE NINGÚN TIPO, ni expresas ni implícitas.
 * Véase la Licencia en el idioma concreto que rige los permisos y limitaciones
 * que establece la Licencia.
 */

var y41bVarOrigenDescriptores = ""; //establecimientos ...
var y41bVarModoDescriptores = ""; //busqueda o alta, modificacion
var y41bVarIdOrigen = ""; //idEstablecimiento o id de la entidad que sea para cuando sea modificacion
var y41bVarDescriptoresKeyList = ""; //ids de descriptores seleccionadas
var y41bVarDescriptoresKeyListNames = ""; //descs de descriptores seleccionadas
var y41bVarOrigenAdjuntarDocsTramite = ""; 

var y41bBusquedaCombinadaPrimeraVez = true;
var y41bVarConsultasModalProdServ = "";
var y41bVarPadreModalDescriptor = "";
var y41bVarPadreModalConsumidor = "";
var y41bVarPadreModalEstablecimiento = "";
var y41bVarOrganismosTraslado ="" ;
var y41bSolicitudModoConsulta = false;
var y41bSolicitudModoConsultaDesdeExternos = false;
var y41bSolicitudDetalleEstado = "";
var y41bVarSolicitudDetalleNuevoHecho = false;
var y41bVarPadreModalSector = "";
var modalEstMantenimientoAbierta = false;
var y41bVarConsultasModalMotivos ="";
//variables para escritorio
var y41bVarConsultasCodigoConsulta = "";
var y41bVarSolicitudesCodigoHecho = "";
var y41bVarSancionesCodigoExpediente = "";
var blnAbiertoModal = false; //variable para comprobar si hemos abierto la pantalla de forma modal
//variables para saber desde donde habro acta/actuacion
var y41bVarActaActuacion = ""; //modificar acta/actuacion
var y41bVarNuevaActuacion = ""; //nueva actuacion
var y41bVarTipoActuacionSeleccionMotivo = ""; //tipo actuacion
var y41bVarEstablecimietoVisitaAlta = "";
var y41bVarCensoPersonaConsumidoraId ="";
var y41bVarCensoEstablecimientoId ="";
var y41bVarFichaConsultaPersonaConsumidora = false;
var y41bVarFichaConsultaPersonaSancionada = false;
var y41bVarFichaConsultaEstablecimiento =false;
var y41bVarConsultaOEstadisticas = ""; // C consulta E estadistica
var y41bVarCensoConsumidorLoadTabla = true;
var y41bVarCensoEstablecimientoTabla = true;
var y41bVar_BotonCancelar=false;
var y41bVarBusquedaCalleModal ="";
var y41bVarModalBusquedaSolicitudes ="";
var y41bVarModalBusquedaInspecciones ="";
var y41bVarModalBusquedaSanciones ="";
var y41bVarModalBusquedaArbitrajes ="";
var y41bVarModalOrganismos ="";
var y41bVarDesdeTramitacion = false;
var y41bVarDesdeDocumentacion = false;
var y41bVarDesdeActa = false;
var y41bVarDesdeProtocolo = false;
var y41bVarInicioTramitacion = false;
var y41bVarModoDescriptores = ""; //busqueda o alta, modificacion
var y41bVar_FormChanged = false; //variable para comprobar si se ha producido algun cambio en la pagina actual
var y41bVar_FormChangedAux = false; //variable para comprobar si se ha producido algun cambio en la pagina 2 niveles - copia el del anterior para pasarselo a posteriori
var y41bVar_FormChangedPopup = false; //variable para comprobar si se ha producido algun cambio en maestros //tramites y mtos que se abran desde otro mto
var y41bVar_FormChangedMaestros = false; //variable para comprobar si se ha producido algun cambio en popups // para mtos basicos que no tengan lupas
var y41bVar_FormChangedDescriptores = false;
var y41bVar_FormmEdicionTextAreaChanged = false;
var y41bVar_Maestros = false; //Variable que indica que se ha abierto un maestro
var y41bVar_Popup = false; //Variable que indica que se ha abierto un popup
var y41bVar_Descriptores = false;
var y41bVar_EdicionTextarea = false;
var y41bVar_EntraFunNumCheck = false; //variable para comprobar si se ha producido algun cambio en la pagina actual
var y41bVar_EntraFunNumCheckPopup = false;
var y41bVar_EntraFunNumCheckMaestros = false;
var y41bSettingsCalendar = {"yearRange":"1997:"+ ((new Date()).getFullYear()+2)}; /* TODO: RANGO DE AÑOS DE LOS CALENDARIOS*/
var y41bVarBusquedaProtocolosModal = "";
var y41bVarDetalleProtocolosModal = "";
//control tabs Sedes
var y41bSedeTabs_VarTabSolicitud = false;
var y41bSedeTabs_VarTabSancion = false;
var y41bCampanhasDetalle_Programacion_VarModoEdicion = "";
var y41bVarModalCampanhas ="";
var y41bVarModalComunicacionesSoivre ="";
var y41VarOrigenModalConsulta = "";
//variables para controlar al abrir respuesta e email de consultas si viene del escritorio o de consultas 
var y41bVarModalRespuestaConsultaDesde = "";
var y41bVarModalEmailConsultaDesde = "";
var y41bVarMailMultiple =""; //variable para controlar de que pantalla se llama a la modal de mail multiple
var y41bVarMailMultipleSoloConsulta = false; //variable para controlar que el mail multiple se tiene que mostrar como solo consulta

var y41bVarModalTramitesPendientesAbierta = false; //variable para controlar que se ha pasado por la modal de tramites pendientes (para el control del refresco de la tabla principal)
var y41bVarModalTramitesPendientesSancionesAbierta = false; //variable para controlar que se ha pasado por la modal de tramites pendientes de sanciones (para el control del refresco de la tabla principal)
var y41bVarModalTramitesPendientesArbitrajesAbierta = false; 
var y41bVarModalTramitesAdhesionesAbierta = false; 
var y41bVarModalTramitesInspeccionesAbierta = false; 

var y41bVarPadreModalDocumentos = "";

var y41bVarFichaConsultaArbitro =false;
var y41bVarFichaConsultaSecretario =false;
var y41bVarFichaConsultaPerito =false;
var y41bVarFichaConsultaLugarCitacion =false;

var y41bVarDestinatarioTramite =false;
var y41bVarTipodocumentoTramite =false;
var y41bVarPerfilFirmaOcultoTramite = false;

var y41bVarIsConfirm = false;
var y41bVarFirmaConfig = "";
var y41bVarguardarFirma = false;
var listBandejaFirma = new Array();

var remision=false;

jQuery(document).ready(function(){
	$("#rup_dept_logo").attr("src", $.rup.APP_STATICS + "/images/dept_logo_" + $.rup.lang + ".gif");
	var vertical = false, mixto = false;
	if ($.rup.LAYOUT === "vertical") {
		vertical = true;
	} else if ($.rup.LAYOUT === "mixto") {
		mixto = true;
	}
	
	//rastro de migas
	$("#y41bVistaWar_migas").rup_breadCrumb({ 
		breadCrumb: {
			"inicio":{
				"i18nCaption" : "inicio",
				"url"   : "escritorio/maint"
			},
			"inspeccion":{
				"y41bTabsModificacionInspeccion" 	:	{
					"i18nCaption" : "inspeccionDetalle", 
					"url"   : "inspeccion/y41bTabsModificacionInspeccion"},
				"y41bTabsBusquedaResultadoInspecciones":{
					"i18nCaption" : "busquedaInspeccion",
					"url"   : "inspeccion/y41bTabsBusquedaResultadoInspecciones?R01HNoPortal=true",
					"y41bTabsInspeccionesDetalleAntiguas":	{
						"i18nCaption" : "detalleInspeccionAntigua", 
						"url"   : "inspeccion/y41bTabsBusquedaResultadoInspecciones/y41bTabsInspeccionesDetalleAntiguas/"
					},
					"y41bAltaInspeccion":	{
						"i18nCaption" : "altaInspeccion", 
						"url"   : "inspeccion/y41bTabsBusquedaResultadoInspecciones/y41bAltaInspeccion"
					},
					"y41bModificacionInspeccion":	{
						"i18nCaption" : "modificacionInspeccion", 
						"url"   : "inspeccion/y41bTabsBusquedaResultadoInspecciones/y41bModificacionInspeccion"
					} 
						
				},
				"y41bTabsBusquedaResultadoInspeccionesCon" 	:	{
					"i18nCaption" : "busquedaInspeccion",	"url"   : "denuncia/y41bTabsBusquedaResultadoSolicitudesCon"
				}
			},
			"denuncia":	{
				"y41bTabsDetalleSolicitudNormal" 	:	{"i18nCaption" : "denunciaDetalleSolicitudAlta", "url"   : "denuncia/y41bDetalleSolicitud"},
				"y41bDetalleSolicitud" 	:	{
					"i18nCaption" : "denunciaDetalleSolicitudEdicion", 
					"url"   : "denuncia/y41bDetalleSolicitud"},
				"y41bTabsBusquedaResultadoSolicitudes" 	:	{
					"i18nCaption" : "denunciaBusquedaResultadoSolicitudes",	
					"url"   : "denuncia/y41bTabsBusquedaResultadoSolicitudes",
					"y41bDetalleSolicitud" 	:	{
						"i18nCaption" : "detalleSolicitud", 
						"url"   : "denuncia/y41bTabsBusquedaResultadoSolicitudesCon/y41bDetalleSolicitud"}
					},
				"y41bTabsBusquedaResultadoSolicitudesCon" 	:	{
					"i18nCaption" : "denunciaBusquedaResultadoSolicitudes",	"url"   : "denuncia/y41bTabsBusquedaResultadoSolicitudesCon",
					"y41bDetalleSolicitud" 	:	{"i18nCaption" : "detalleSolicitud", "url"   : "denuncia/y41bTabsBusquedaResultadoSolicitudesCon/y41bDetalleSolicitud"}
				},
				"y41bTabsDetalleDenunciaAACC" 	:	{
					"i18nCaption" : "denunciaDetalleDenunciaAACCEdicion",
					"url"   : "denuncia/y41bTabsDetalleDenunciaAACC",
					"alta"	:	{
						"i18nCaption" : "denunciaDetalleDenunciaAACCAlta",
						"url"   : "denuncia/y41bTabsDetalleDenunciaAACCAlta"
					}
				},
				"y41bTabsDetalleDenunciaAACCAlta" 	:	{
					"i18nCaption" : "denunciaDetalleDenunciaAACCAlta",
					"url"   : "denuncia/y41bTabsDetalleDenunciaAACCAlta"
				},
				"y41bTabsBusquedaResultadoDenunciasAACC" 	:	{
					"i18nCaption" : "denunciaBusquedaResultadoDenunciasAACC",
					"url"   : "denuncia/denunciaBusquedaResultadoDenunciasAACC"
				},
				"y41bTabsBusquedaResultadoDenunciasAACCCon" 	:	{
					"i18nCaption" : "denunciaBusquedaResultadoDenunciasAACC",
					"url"   : "denuncia/y41bTabsBusquedaResultadoDenunciasAACCCon",
					"alta"	:	{
						"i18nCaption" : "denunciaDetalleDenunciaAACCResulAlta",
						"url"   : "denuncia/y41bTabsBusquedaResultadoDenunciasAACCCon/alta"
					},
					"detalle"	:	{
						"i18nCaption" : "denunciaDetalleDenunciaAACCResulEdicion",
						"url"   : "denuncia/y41bTabsBusquedaResultadoDenunciasAACCCon/detalle"
					}
				}
			},
			"censomonitor":{
				"i18nCaption" : "censomonitor",
				"url"   : "/y41bVistaWar/censomonitor/maint?R01HNoPortal=true"
			},
			"maintBusquedaResultado":{
				"i18nCaption" : "consultaBusquedaResultado",
				"url"   : "/y41bVistaWar/consulta/maintBusquedaResultado?R01HNoPortal=true"
			},
			"maintAltaConsulta":{
				"i18nCaption" : "consultaAltaConsulta",
				"url"   : "/y41bVistaWar/consulta/maintAltaConsulta?R01HNoPortal=true"
			},
			"maintAltaTabsDetalleDocs":{
				"i18nCaption" : "consultaAltaConsulta",
				"url"   : "/y41bVistaWar/consulta/maintAltaConsulta?R01HNoPortal=true"
			},
			"establecimiento":{
				"i18nCaption" : "establecimientos",
				"url"   : "/y41bVistaWar/establecimiento/maint?R01HNoPortal=true"
			},
			"consumidor":{
				"i18nCaption" : "consumidor",
				"url"   : "/y41bVistaWar/consumidor/maint?R01HNoPortal=true"
			},
			"plantillatramite":{
				"i18nCaption" : "plantillatramite",
				"url"   : "/y41bVistaWar/plantillatramite/maint?R01HNoPortal=true"
			},
			"plantilladecision":{
				"i18nCaption" : "plantilladecision",
				"url"   : "/y41bVistaWar/plantilladecision/maint?R01HNoPortal=true"
			},
			"sectoragrupado":{
				"i18nCaption" : "sectoragrupado",
				"url"   : "/y41bVistaWar/sectoragrupado/sectoresagrupados"
			},
			"sector":{
				"i18nCaption" : "sector",
				"url"   : "/y41bVistaWar/sector/sectores"
			},
			"prodagrupado":{
				"i18nCaption" : "prodagrupado",
				"url"   : "/y41bVistaWar/prodagrupado/prodagrupados"
			},
			"producto":{
				"i18nCaption" : "producto",
				"url"   : "/y41bVistaWar/producto/productos"
			},
			"motivo":{
				"i18nCaption" : "motivo",
				"url"   : "/y41bVistaWar/motivo/motivos"
			},
			"decision":{
				"i18nCaption" : "decision",
				"url"   : "/y41bVistaWar/decision/decisiones"
			},
			"reclamacion":{
				"i18nCaption" : "reclamacion",
				"url"   : "/y41bVistaWar/reclamacion/reclamaciones"
			},
			"tipoinfraccionagrupado":{
				"i18nCaption" : "tipoinfraccionagrupado",
				"url"   : "/y41bVistaWar/tipoinfraccionagrupado/tiposinfraccionesagrupados"
			},
			"tipreqnormativo":{
				"i18nCaption" : "tipreqnormativo",
				"url"   : "/y41bVistaWar/tipreqnormativo/tiposinfracciones"
			},
			"santipinffrec":{
				"i18nCaption" : "infraccionesFrecuentes",
				"url"   : "/y41bVistaWar/santipinffrec/infraccionesfrecuentes"
			},
			"tribunal":{
				"i18nCaption" : "tribunal",
				"url"   : "/y41bVistaWar/tribunal/tribunales"
			},
			"descriptor":{
				"i18nCaption" : "descriptor",
				"url"   : "/y41bVistaWar/descriptor/descriptores"
			},
			"busquedacombinada":{
				"y41bTabsBusquedaCombinada" : {
					"i18nCaption" : "busquedacombinada", "url"   : "/y41bVistaWar/busquedacombinada/y41bTabsBusquedaCombinada",
					"y41bDetalleSolicitud" 	:	{"i18nCaption" : "detalleSolicitudBusquedaCombinada", "url"   : "busquedacombinada/y41bTabsBusquedaCombinadaCon/y41bDetalleSolicitud"}},
				"y41bTabsBusquedaCombinadaCon" 	:	{
						"i18nCaption" : "busquedacombinada",	"url"   : "busquedacombinada/y41bTabsBusquedaCombinadaCon",
						"y41bDetalleSolicitud" 	:	{"i18nCaption" : "detalleSolicitudBusquedaCombinada", "url"   : "busquedacombinada/y41bTabsBusquedaCombinadaCon/y41bDetalleSolicitud"}
					},
				"y41bTabsBusquedaCombinadaSan" : {
						"i18nCaption" : "busquedacombinada", 
						"url"   : 		"busquedacombinada/y41bTabsBusquedaCombinadaCon",
						"y41bDetalleSancion" 	:	{
							"i18nCaption" : "detalleSancionBusquedaCombinada", 
							 "url"   : "busquedacombinada/y41bTabsBusquedaCombinadaCon/y41bDetalleSancion"
						}
				},
				"y41bTabsBusquedaCombinadaArb" : {
					"i18nCaption" : "busquedacombinada", 
					"url"   : 		"busquedacombinada/y41bTabsBusquedaCombinadaCon",
					"y41bDetalleArbitraje" 	:	{
						"i18nCaption" : "detalleArbitrajeBusquedaCombinada", 
						 "url"   : "busquedacombinada/y41bTabsBusquedaCombinadaArb/y41bDetalleArbitraje"
					}
				},
				"y41bTabsBusquedaCombinadaIns" : {
					"i18nCaption" : "busquedacombinada", 
					"url"   : 		"busquedacombinada/y41bTabsBusquedaCombinadaCon",
					"y41bDetalleInspeccion" 	:	{
						"i18nCaption" : "detalleInspeccionBusquedaCombinada", 
						 "url"   : "busquedacombinada/y41bTabsBusquedaCombinadaIns/y41bDetalleInspeccion"
					},
					"y41bDetalleInspeccionAntiguas" 	:	{
						"i18nCaption" : "detalleInspeccionBusquedaCombinada", 
						 "url"   : "busquedacombinada/y41bTabsBusquedaCombinadaIns/y41bDetalleInspeccionAntiguas"
					}
				}
			},
			"maintPagos":{
				"i18nCaption" : "pagos",
				"url"   : "/y41bVistaWar/pagos/maintPagos"				
			},
			"maintViaApremio" : {
				"i18nCaption" : "viaApremio", 
				"url"   : 		"/y41bVistaWar/pagos/maintViaApremio"
			},
			"maintOtrosIngresos" : {
				"i18nCaption" : "otrosIngresos", 
				"url"   : 		"/y41bVistaWar/pagos/maintOtrosIngresos"
			},
			"maintErrores" : {
				"i18nCaption" : "errores", 
				"url"   : 		"/y41bVistaWar/errores/maintErrores"
			},
			"maintAplicPresupuestaria" : {
				"i18nCaption" : "aplicPresupuestaria", 
				"url"   : 		"/y41bVistaWar/conceptopago/maintAplicPresupuestaria"
			},
			"maintConceptoIngreso" : {
				"i18nCaption" : "conceptoIngreso", 
				"url"   : 		"/y41bVistaWar/tipoconceptopago/maintConceptoIngreso"
			},
			"maintClaseIngreso" : {
				"i18nCaption" : "claseIngreso", 
				"url"   : 		"/y41bVistaWar/claseingreso/maintClaseIngreso"
			},
			"maintAltaAdjuntarDocs":{
				"i18nCaption" : "adjuntarDocs",
				"url"   : "/y41bVistaWar/tramiteAdjuntarDocs/maintAltaAdjuntarDocs?R01HNoPortal=true"
			},
			"maintSentencia":{
				"i18nCaption" : "sentencia",
				"url"   : "/y41bVistaWar/sanresulsen/maintSentencia?R01HNoPortal=true"
			},
			"maintProcedimental":{
				"i18nCaption" : "procedimental",
				"url"   : "/y41bVistaWar/sancuesproced/maintProcedimental?R01HNoPortal=true"
			},
			"maintPosiblesTramites":{
				"i18nCaption" : "posiblesTramites",
				"url"   : "/y41bVistaWar/posibletramite/maintPosiblesTramites?R01HNoPortal=true"
			},
			"expedien":{
				"fichaExpedienteSancion" : {
					"i18nCaption" : "fichaExpedienteSancion",
					"url"   : "/y41bVistaWar/expedien/fichaExpedienteSancion?R01HNoPortal=true"
				
				},
				"maintBusquedaSanciones":{
					"i18nCaption" : "busquedaSanciones",
					"url"   : "expedien/maintBusquedaSanciones?R01HNoPortal=true",
					"fichaExpedienteSancion" : {
						"i18nCaption" : "fichaExpedienteSancion",
						"url"   : "/y41bVistaWar/expedien/maintBusquedaSanciones/fichaExpedienteSancion?R01HNoPortal=true"
						}		
				},
				"maintBusquedaSancionesInicial":{
					"i18nCaption" : "busquedaSanciones",
					"url"   : "expedien/maintBusquedaSanciones?R01HNoPortal=true",
					"fichaExpedienteSancion" : {
						"i18nCaption" : "fichaExpedienteSancion",
						"url"   : "/y41bVistaWar/expedien/maintBusquedaSanciones/fichaExpedienteSancion?R01HNoPortal=true"
						}		
				}
			},
			"tiposProtocolos":{
				"i18nCaption" : "tiposProtocolos",
				"url"   : "/y41bVistaWar/tipprotocolo/tiposProtocolos"
			},
			"campanha":{
				"campanhas" : { "i18nCaption" : "campanhasBusqueda", "url" : "campanha/campanhas" },
				"altaCampanha" : { "i18nCaption" : "campanhasNueva", "url" : "campanha/campanhas" },
				"detalleCampanha" : { "i18nCaption" : "campanhasDetalleBandeja", "url" : "campanha/campanhas" },
				"campanhasBusquedaConPrecarga" : {
					"i18nCaption" : "campanhasBusqueda", "url" : "campanha/campanhasBusquedaConPrecarga",
					"modCampanha" : { "i18nCaption" : "campanhasDetalle", "url" : "campanha/campanhasBusquedaConPrecarga/modCampanha" },
					"altaCampanha" : { "i18nCaption" : "campanhasNuevaBusqueda", "url" : "campanha/campanhasBusquedaConPrecarga/altaCampanha" }
				}
			},
			"alerta":{
				"alertas" : { "i18nCaption" : "alertasBusqueda", "url" : "alerta/alertas" },
				"altaAlerta" : { "i18nCaption" : "alertasNueva", "url" : "alerta/alertas" },
				"detalleAlerta" : { "i18nCaption" : "alertasDetalleBandeja", "url" : "alerta/alertas" },
				"alertasBusquedaConPrecarga" : {
					"i18nCaption" : "alertasBusqueda", "url" : "alerta/alertasBusquedaConPrecarga",
					"modAlerta" : { "i18nCaption" : "alertasDetalle", "url" : "alerta/alertasBusquedaConPrecarga/modAlerta" },
					"altaAlerta" : { "i18nCaption" : "alertasNuevaBusqueda", "url" : "alerta/alertasBusquedaConPrecarga/altaAlerta" }
				}
			},
			"comunicacionsoivre":{
				"comunicacionesSoivre" : { "i18nCaption" : "comunicacionSoivreBusqueda", "url" : "comunicacionsoivre/comunicacionesSoivre" },
				"altaComunicacionSoivre" : { "i18nCaption" : "comunicacionSoivreNueva", "url" : "comunicacionsoivre/comunicacionesSoivre" },
				"detalleComunicacionSoivre" : { "i18nCaption" : "comunicacionSoivreDetalleBandeja", "url" : "comunicacionsoivre/comunicacionesSoivre" },
				"comunicacionesSoivreBusquedaConPrecarga" : {
					"i18nCaption" : "comunicacionSoivreBusqueda", "url" : "comunicacionsoivre/comunicacionesSoivreBusquedaConPrecarga",
					"modComunicacionSoivre" : { "i18nCaption" : "comunicacionSoivreDetalle", "url" : "comunicacionsoivre/comunicacionesSoivreBusquedaConPrecarga/modComunicacionSoivre" },
					"altaComunicacionSoivre" : { "i18nCaption" : "comunicacionSoivreNuevaBusqueda", "url" : "comunicacionsoivre/comunicacionesSoivreBusquedaConPrecarga/altaComunicacionSoivre" }
				}
			},
			"laboratorio":{
				"i18nCaption" : "laboratorios",
				"url"   : "/y41bVistaWar/laboratorio/laboratorios?R01HNoPortal=true"
			},
			"parametros":{
				"i18nCaption" : "parametros",
				"url"   : "/y41bVistaWar/parametros/maintParametros"
			},
			"maintRecursos":{
				"i18nCaption" : "recursos",
				"url"   : "/y41bVistaWar/tctiacre/maint"
			},
			"maintInfraccion":{
				"i18nCaption" : "infraccionAgrupada",
				"url"   : "/y41bVistaWar/santipinffrec/maint"
			},
			"maintTipoInfraccion":{
				"i18nCaption" : "tipoInfraccion",
				"url"   : "/y41bVistaWar/tctipinf/maint"
			},
			"tctiacre":{
				"i18nCaption" : "tctiacre",
				"url"   : "/y41bVistaWar/tctipinf/maint"
			},
			"santipestim":{
				"i18nCaption" : "santipestim",
				"url"   : "/y41bVistaWar/santipestim/maint"
			},
			"formapresentacion":{
				"i18nCaption" : "formaPresentacion",
				"url"   : "/y41bVistaWar/formapresentacion/maint"
			},
			"santipestim":{
				"i18nCaption" : "santipestim",
				"url"   : "/y41bVistaWar/santipestim/maint"
			},
			"remesa":{
				"i18nCaption" : "remesa",
				"url"   : "/y41bVistaWar/remesas/maint"
			},
			"ooee":{
				"i18nCaption" : "ooee",
				"url"   : "/y41bVistaWar/ooee/maint"
			},
			"jjaa":{
				"i18nCaption" : "jjaa",
				"url"   : "/y41bVistaWar/jjaa/maint"
			},
			"secretar":{
				"i18nCaption" : "secretario",
				"url"   : "/y41bVistaWar/secretar/maint"
			},
			"aacc":{
				"i18nCaption" : "aacc",
				"url"   : "/y41bVistaWar/aacc/maint"
			},
			"arbitro":{
				"i18nCaption" : "arbitro",
				"url"   : "/y41bVistaWar/arbitro/maint"
			},
			"empper":{
				"i18nCaption" : "empper",
				"url"   : "/y41bVistaWar/empper/maint"
			},
			"arbCalendarAudiencias":{
				"i18nCaption" : "calendarioAudiencias",
				"url"   : "/y41bVistaWar/arbCalendarAudiencias/maint"
			},
			"arbCalendarPruebas":{
				"i18nCaption" : "calendarioPruebas",
				"url"   : "/y41bVistaWar/arbCalendarPruebas/maint"
			},
			"solarb":{
				"fichaExpedienteArbitraje" : {
					"i18nCaption" : "fichaExpedienteArbitraje",
					"url"   : "/y41bVistaWar/solarb/fichaExpedienteArbitraje?R01HNoPortal=true"
				
				},
				"maintBusquedaArbitraje":{
					"i18nCaption" : "busquedaArbitraje",
					"url"   : "solarb/maintBusquedaArbitraje?R01HNoPortal=true",
					"fichaExpedienteArbitraje" : {
						"i18nCaption" : "fichaExpedienteArbitraje",
						"url"   : "/y41bVistaWar/solarb/maintBusquedaArbitraje/fichaExpedienteArbitraje?R01HNoPortal=true"
						}		
				},
				"maintBusquedaArbitrajeInicial":{
					"i18nCaption" : "busquedaArbitraje",
					"url"   : "solarb/maintBusquedaArbitraje?R01HNoPortal=true",
					"fichaExpedienteArbitraje" : {
						"i18nCaption" : "fichaExpedienteArbitraje",
						"url"   : "/y41bVistaWar/solarb/maintBusquedaArbitraje/fichaExpedienteArbitraje?R01HNoPortal=true"
						}		
				}
			},
			"tclugaud":{
				"i18nCaption" : "lugarAudiencia",
				"url"   : "/y41bVistaWar/tclugaud/maint"
			}			
		}	
	});
	
	
	
	//idioma
	$("#y41bVistaWar_language").rup_language({languages: ["es", "eu"]});
	
	$("#y41bVistaWar_menuHorizontal").rup_menu({
		display: (vertical ? 'vertical' : 'horizontal'),
		verticalWidth: "16.5em"
	});
	
	$("#y41bVistaWar_menu").rup_menu({
		display: (vertical ? 'vertical' : 'horizontal'),
		menu: [
				{"i18nCaption":"inicio", "url": "" },
				{"i18nCaption":"menu1", "submenu":[
				{"i18nCaption":"inicio", "url": "" },
				{"i18nCaption":"menu11", "url" : "" },
				{"i18nCaption":"menu12", "url" : "" },
				{"i18nCaption":"menu13", "url" : "" }
				]}
		]
	});
	
	if (mixto) {
		$("#y41bVistaWar_menu_mixto").rup_menu({
			display: 'vertical',
			menu: [
				{"i18nCaption":"inicio", "url": "" },
				{"i18nCaption":"menu1", "submenu":[
				{"i18nCaption":"inicio", "url": "" },
				{"i18nCaption":"menu11", "url" : "" },
				{"i18nCaption":"menu12", "url" : "" },
				{"i18nCaption":"menu13", "url" : "" }
				]}
			]
		});
	}
	//Funciones para abril las modales del pie
	$("#btn_aviso_legal").click(function () {
		
		showModalaviso();
	});
	
	//Feedback
	$("#y41bEscritorioFeedback").rup_feedback({
		gotoTop : true,
		block : false,
		closeLink : true
	});
	
	function showModalaviso(params){
		$("#modal_aviso").rup_dialog("destroy");
		$("#modal_aviso").rup_dialog({
			modal: true,
			autoOpen: true,
			width: "700",
			height: "400",
			title: $.rup.i18n.app.comun.Kontsumobide,
			url: "/y41bVistaWar/escritorio/aviso_legal",  
			type:$.rup.dialog.AJAX
		});		
	}
	
	$("#btn_privacidad").click(function () {
		
		showModalprivacidad();
	});
		
	function showModalprivacidad(params){
		$("#modal_privacidad").rup_dialog("destroy");
		$("#modal_privacidad").rup_dialog({
			modal: true,
			autoOpen: true,
			width: "700",
			height: "300",
			title: $.rup.i18n.app.comun.Kontsumobide,
			url: "/y41bVistaWar/escritorio/privacidad",    
			type:$.rup.dialog.AJAX
		});		
	}
		
		//link escritorio
		
		$("#escritorio").click(function () {		
			if(!y41bVar_FormChanged){
				location.href = "/y41bVistaWar/escritorio/maint";
			}
		  });
		
		//link desconexion
		
		$("#desconexion").click(function () {
			if(!y41bVar_FormChanged){
				location.href = "/y41bVistaWar/logout/maint";
			}
		 });

		
		$( "#accordionJ00" ).accordion({
			autoHeight: false,
			navigation: false
		});
		$( "#accordionJ01" ).accordion({
			autoHeight: false,
			navigation: false
		});
		$( "#accordionJ02" ).accordion({
			autoHeight: false,
			navigation: false
		});
		$( "#accordionJ03" ).accordion({
			autoHeight: false,
			navigation: false
		});
		$( "#accordionJ04" ).accordion({
			autoHeight: false,
			navigation: false
		});
		$( "#accordionJ05" ).accordion({
			autoHeight: false,
			navigation: false
		});
		
		$( "#accordionJ1" ).accordion({
			autoHeight: false,
			navigation: false
		});
		$( "#accordionJ2" ).accordion({
			autoHeight: false,
			navigation: false
		});
		$( "#accordionJ3" ).accordion({
			autoHeight: false,
			navigation: false
		});
		$( "#accordionJ4" ).accordion({
			autoHeight: false,
			navigation: false
		});
		$( "#accordionJ5" ).accordion({
			autoHeight: false,
			navigation: false
		});
		$( "#accordionJ6" ).accordion({
			autoHeight: false,
			navigation: false
		});
		$( "#accordionJ7" ).accordion({
			autoHeight: false,
			navigation: false
		});
		$( "#accordionJ8" ).accordion({
			autoHeight: false,
			navigation: false
		});
		
		
				
		
	// Accordion para que se ajuste la altura de cada elemento
	$("#accordion").accordion({ header: "h3" });

	
		$( "#accordion" ).accordion({
			autoHeight: false,
			navigation: true
		});
	//menu izquierda
		
		$("#accordion0").accordion({ header: "h3" });
		$("#accordion1").accordion({ header: "h3" });
		$("#accordion2").accordion({ header: "h3" });
		$("#accordion3").accordion({ header: "h3" });
		
			$( "#accordion0" ).accordion({
				autoHeight: false,
				navigation: true
			});
			
			$( "#accordion1" ).accordion({
				autoHeight: false,
				navigation: true
			});
			$( "#accordion2" ).accordion({
				autoHeight: false,
				navigation: true
			});
			$( "#accordion3" ).accordion({
				autoHeight: false,
				navigation: true
			});
			$("#accordion9").accordion({ header: "h3" });
			$( "#accordion9" ).accordion({
				autoHeight: false,
				navigation: true
			});				
				
	//menu derecha
				$("#accordion4").accordion({ header: "h3" });
				$("#accordion5").accordion({ header: "h3" });
				$("#accordion6").accordion({ header: "h3" });
				$("#accordion7").accordion({ header: "h3" });
					$( "#accordion4" ).accordion({
						autoHeight: false,
						navigation: true
					});
					
					$( "#accordion5" ).accordion({
						autoHeight: false,
						navigation: true
					});
					$( "#accordion6" ).accordion({
						autoHeight: false,
						navigation: true
					});
					$( "#accordion7" ).accordion({
						autoHeight: false,
						navigation: true
					});
					
					$("#accordion8").accordion({ header: "h3" });
					$( "#accordion8" ).accordion({
						autoHeight: false,
						navigation: true
					});
		//LINKS MENU
					
					
					//solicitudes
					
					$("#menu_solicitudes_busqueda").click(function () {	
						location.href = "/y41bVistaWar/denuncia/y41bTabsBusquedaResultadoSolicitudes?R01HNoPortal=true";
					});
					$("#menu_solicitudes_nueva").click(function () {
						location.href = "/y41bVistaWar/denuncia/y41bTabsDetalleSolicitudNormal?R01HNoPortal=true";
					});
					
					//consultas
					
					$("#menu_consultas_busqueda").click(function () {	
						location.href = "/y41bVistaWar/consulta/maintBusquedaResultado?R01HNoPortal=true";
					});
					$("#menu_consultas_nueva").click(function () {	
						location.href = "/y41bVistaWar/consulta/maintAltaConsulta?R01HNoPortal=true";
					});

					//censos
					
					$("#menu_censos_consumidores").click(function () {	
						location.href = "/y41bVistaWar/consumidor/maint";
					});
					
					$("#menu_censos_establecimientos").click(function () {	
						location.href = "/y41bVistaWar/establecimiento/maint";
						//location.href = "javascript:alert(\"EN CONSTRUCCION...\")";
					});
					$("#menu_censos_monitores").click(function () {	
						location.href = "/y41bVistaWar/censomonitor/maint";
					});
					
					$("#menu_censos_tramites").click(function () {	
						location.href = "/y41bVistaWar/plantillatramite/maint";
					});

					$("#menu_posibles_tramites").click(function () {	
						location.href = "/y41bVistaWar/posibletramite/maintPosiblesTramites";
					});
					
					$("#menu_censos_decisiones").click(function () {	
						location.href = "/y41bVistaWar/plantilladecision/maint";
					});
					
					$("#menu_aportacion_docs").click(function () {	
						location.href = "/y41bVistaWar/tramiteAdjuntarDocs/maintAltaAdjuntarDocs";
					});
					$("#menu_sectoresagrupados").click(function () {	
						location.href = "/y41bVistaWar/sectoragrupado/sectoresAgrupados";
					});
					$("#menu_sectores").click(function () {	
						location.href = "/y41bVistaWar/sector/sectores";
					});
					
					$("#menu_productosagrupados").click(function () {	
						location.href = "/y41bVistaWar/prodagrupado/prodagrupados";
					});
					
					$("#menu_productos").click(function () {	
						location.href = "/y41bVistaWar/producto/productos";
					});
					$("#menu_motivos").click(function () {	
						location.href = "/y41bVistaWar/motivo/motivos";
					});
					$("#menu_tiposdecision").click(function () {	
						location.href = "/y41bVistaWar/decision/decisiones";
					});
					$("#menu_tiposreclamacion").click(function () {	
						location.href = "/y41bVistaWar/reclamacion/reclamaciones";
					});
					$("#menu_tiposinfraccionagrupados").click(function () {	
						location.href = "/y41bVistaWar/tipoinfraccionagrupado/tiposinfraccionesagrupados";
					});
					$("#menu_tiposinfraccion").click(function () {	
						location.href = "/y41bVistaWar/tipreqnormativo/tiposinfracciones";
					});
					$("#menu_infraccionesfrecuentes").click(function () {	
						location.href = "/y41bVistaWar/santipinffrec/infraccionesfrecuentes";
					});
					$("#menu_tribunales").click(function () {	
						location.href = "/y41bVistaWar/tribunal/tribunales";
					});
					$("#menu_descriptores").click(function () {	
						location.href = "/y41bVistaWar/descriptor/descriptores";
					});
					$("#menu_busquedacombinada").click(function () {	
						location.href = "/y41bVistaWar/busquedacombinada/y41bTabsBusquedaCombinada";
					});
					$("#menu_formaPresentacion").click(function () {	
						location.href = "/y41bVistaWar/formapresentacion/maint";
					});		
					$("#menu_lugarAudiencia").click(function () {	
						location.href = "/y41bVistaWar/tclugaud/maint";
					});	
					//modulo economico					
					$("#menu_moduloeconomico_sancionIngresos").click(function () {	
						location.href = "/y41bVistaWar/pagos/maintPagos";
					});
					$("#menu_moduloeconomico_sancionViaApremio").click(function () {	
						location.href = "/y41bVistaWar/pagos/maintViaApremio";
					});
					$("#menu_moduloeconomico_otrosIngresos").click(function () {	
						location.href = "/y41bVistaWar/pagos/maintOtrosIngresos";
					});
					$("#menu_moduloeconomico_errores").click(function () {	
						location.href = "/y41bVistaWar/errores/maintErrores";
					});
					
					$("#menu_moduloeconomico_claseIngreso").click(function () {	
						location.href = "/y41bVistaWar/claseingreso/maintClaseIngreso";
					});
					$("#menu_moduloeconomico_conceptoIngreso").click(function () {	
						location.href = "/y41bVistaWar/tipoconceptopago/maintConceptoIngreso";
					});
					$("#menu_moduloeconomico_aplicPresupuestaria").click(function () {	
						location.href = "/y41bVistaWar/conceptopago/maintAplicPresupuestaria";
					});
					
					//control de mercado
					$("#menu_controlmercado_protocolos").click(function () {	
						location.href = "/y41bVistaWar/tipprotocolo/tiposProtocolos";
					});

					$("#menu_controlmercado_campanhas").click(function () {	
						location.href = "/y41bVistaWar/campanha/campanhas";
					});

					$("#menu_controlmercado_alertas").click(function () {	
						location.href = "/y41bVistaWar/alerta/alertas";
					});

					$("#menu_controlmercado_comunicacionesSoivre").click(function () {	
						location.href = "/y41bVistaWar/comunicacionsoivre/comunicacionesSoivre";
					});
					
					// sanciones
					$("#menu_sanciones_busqueda").click(function () {	
						location.href = "/y41bVistaWar/expedien/maintBusquedaSancionesInicial";
						//location.href = "javascript:alert(\"EN CONSTRUCCION...\")";
					});
					
					$("#menu_sanciones_nueva").click(function () {	
						creaModalNuevaSancion(false);
					});
					
					// sentencia
					$("#menu_sentencia").click(function () {	
						location.href = "/y41bVistaWar/sanresulsen/maintSentencia";
					});

					// procedimental
					$("#menu_procedimental").click(function () {	
						location.href = "/y41bVistaWar/sancuesproced/maintProcedimental";
					});
					// recursos
					$("#menu_tiporesolrec").click(function () {	
						location.href = "/y41bVistaWar/santipestim/maint";
					});
					// resolucion recurso sancion
					$("#menu_resolucionSancion").click(function () {	
						location.href = "/y41bVistaWar/santipestim/maint";
					});
					//infraccionesAgrupadas
					$("#menu_infraccionesAgrupadas").click(function () {	
						location.href = "/y41bVistaWar/santipinffrec/maint";
					});	
					//tipoInfraccion
					$("#menu_tipInf").click(function () {	
						location.href = "/y41bVistaWar/tctipinf/maint";
					});	
					// parametros
					$("#menu_parametros").click(function () {	
						location.href = "/y41bVistaWar/parametros/maintParametros";
					});
					
					// REMESAS INICIO
					// remision remesas
					$("#menu_remisionremesas").click(function () {	
						location.href = "/y41bVistaWar/remesa/maint";
					});
					//REMESAS FIN

					// AGENDA CONTACTOS INICIO
					$("#menu_agendacontactos").click(function () {	
						window.open(urlAgendaContactos,'_blank');
					});
					// AGENDA CONTACTOS FIN
					
					$(document).ajaxStop(function() {
						waitDialogStop();
					});
					establecerValorBlankCombo();
					
					/* ************** reescribir funciones de UDA ************* */
					/* rup_message-2.1.2 */
					$.rup_messages("extend", {
						msgConfirm : function (properties) {    
				        	//Se recogen y cruzan las paremetrizaciones del objeto
				        	var settings = $.extend({}, $.rup_messages.defaults, properties), docHeight, docWidth,
								focused = $(document.activeElement);
							this._rupProperties(settings, $.rup.i18nParse($.rup.i18n.base,"rup_message.confirmacion"));
							
							settings._close = settings.close;
							settings.close = function(event, ui) {
								focused.focus();
								if (settings._close!==undefined){settings._close(event,ui);}
							};
							
				            var self = this._createDiv().appendTo("body"), aceptButton;
				            self.dialog(settings);           
				            
				            //parámetros específicos de tipo de mensaje
				            aceptButton = [{
				                    text: $.rup.i18nParse($.rup.i18n.base,"rup_message.aceptar"),
				                    click: function () { 
				                    	self.dialog("close");
				                    	settings.OKFunction.call(this, self);
				                    	//self.dialog("close");
				                    }
				                }];
				            self.dialog("option", "buttons", aceptButton);
				            
							this._createCloseLink(self);
							this._addStyles(self, "confirm", settings.message);
							this._createLinkButton(self, settings.CANCELFunction);
							docHeight = $(document).height();
							docWidth = $(document).width();
				            self.dialog("open");
				            this._dialogInPortal(docWidth, docHeight);
				            
				            //Le ponemos el foco al botón aceptar en vez de al enlace
				            $('div[aria-labelledby=ui-dialog-title-' + self[0].id + '] .ui-dialog-buttonpane button:first').focus();
				        }
					});

					$.ajaxSetup({ cache: false });
					
});

function validateBean(beanName, object, group, feedBack) {
		
	VALIDATE_MESSAGE = "";
	var t=0;
		$.ajax({
			type : "GET",
			async : false,
			url : "/y41bVistaWar/validate?bean=" + beanName + "&group="+ group + "&R01HNoPortal=true",
			dataType : "json",
			data : {data:$.toJSON(object)},
			contentType : 'application/json',
			statusCode : {
				200 : function() {
				},
				406 : function(data) {
				
					var message = "";
					var response = $.parseJSON(data.responseText);
					var errors = $.parseJSON(response[1]);
					var error = null;
					var size = 0;
					
					for(name in errors) {
						size++;
					}
					
					for(var i=0; i<size; i++) {
						error = errors[i];
						
						for(var e=0; e<error.length; e++) {
							
							for(assertion in error[e]) {
								
								VALIDATE_MESSAGE += "<li>" + error[e][assertion] + "</li>\n";
							}
						}
					}
					
					
					t++;
				},
				500 : function(data) {
					
					var message = "";
					var response = $.parseJSON(data.responseText);
					var errors = $.parseJSON(response[1]);
					
					VALIDATE_MESSAGE += "<li>" + "Error 500" + "</li>\n";
					t++;
				}	
			}
		});
	
	if(t>0) {
		$("#" + feedBack).rup_feedback("option", "delay", null);
		$("#" + feedBack).rup_feedback("set", "<ul>" + VALIDATE_MESSAGE + "</ul>", "error");
		return false;
		
	} else {	
		return true;
	}
}

function validateBean(beanName, object, group, feedBack, arrayErrores) {
	
	VALIDATE_MESSAGE = "";
	var t=0;
		$.ajax({
			type : "GET",
			async : false,
			url : "/y41bVistaWar/validate?bean=" + beanName + "&group="+ group + "&R01HNoPortal=true",
			dataType : "json",
			data : {data:$.toJSON(object)},
			contentType : 'application/json',
			statusCode : {
				200 : function() {
				},
				406 : function(data) {
					var message = "";
					var response = $.parseJSON(data.responseText);
					var errors = $.parseJSON(response[1]);
					
					var error = null;
					
					
					var size = 0;
					for(name in errors) {
						size++;
					}
					
					for(var i=0; i<size; i++) {
						error = errors[i];
						
						for(var e=0; e<error.length; e++) {
							for(assertion in error[e]) {
								VALIDATE_MESSAGE += "<li>" + error[e][assertion] + "</li>\n";
							}
						}
					}
					
					
					t++;
				}
			}
		});
	
	if(arrayErrores != null) {
		for (i=0; i<arrayErrores.length;i++)
		{
			VALIDATE_MESSAGE += "<li>" + arrayErrores[i] + "</li>\n";
			t++;
		}
	}
	
	if(t>0) {
		$("#" + feedBack).rup_feedback("option", "delay", null);
		$("#" + feedBack).rup_feedback("set", "<ul>" + VALIDATE_MESSAGE + "</ul>", "error");
		return false;
		
	} else {
		return true;
	}
}



function controlY41bUDAException(data, feedBack) {
	var VALIDATE_MESSAGE = "";
	var errors = $.parseJSON(data.responseText);
	var error = null;
	for(name in errors) {
		error = errors[name];
		if (typeof error != 'function'){
			VALIDATE_MESSAGE += "<li>" + char_convert(error) + "</li>\n";
		}
	}
	$("#" + feedBack).rup_feedback("option", "delay",null);
	$("#" + feedBack).rup_feedback("set","<ul>" + VALIDATE_MESSAGE + "</ul>", "error");
}

function char_convert(cadena){
	  
	// Sustituyo caracteres en la cadena final
	cadena = cadena.replace(/Ã¡/g, "&aacute;");
	cadena = cadena.replace(/Ã©/g, "&eacute;");
	cadena = cadena.replace(/Â®/g, "&reg;");
	cadena = cadena.replace(/Ã­/g, "&iacute;");
	cadena = cadena.replace(/ï¿½/g, "&iacute;");
	cadena = cadena.replace(/Ã³/g, "&oacute;");
	cadena = cadena.replace(/Ãº/g, "&uacute;");
	cadena = cadena.replace(/n~/g, "&ntilde;");
	cadena = cadena.replace(/Âº/g, "&ordm;");
	cadena = cadena.replace(/Âª/g, "&ordf;");
	cadena = cadena.replace(/ÃƒÂ¡/g, "&aacute;");
	cadena = cadena.replace(/Ã±/g, "&ntilde;");
	cadena = cadena.replace(/Ã‘/g, "&Ntilde;");
	cadena = cadena.replace(/ÃƒÂ±/g, "&ntilde;");
	cadena = cadena.replace(/n~/g, "&ntilde;");
	cadena = cadena.replace(/Ãš/g, "&Uacute;");
	return cadena;
}

/* **************************************
 * Funcion que devuelve la fecha actual * 
 * **************************************
 */
function fechaActual(){
	var fechaActual = new Date();
	return fechaActual;
}

/* **********************************************
 * Funcion que devuelve el anyo actual(4 cifras)* 
 * **********************************************
 */
function anyoActual(){
	var fechaActual = new Date();
	var anyo = fechaActual.getFullYear();
	return anyo;
}

/* *************************************************
 * Funcion que devuelve la fecha actual sin horas  * 
 * *************************************************
 */
function fechaActualSinHoras(){
	var hoy = new Date();
	dia = hoy.getDate(); 
	mes = hoy.getMonth();
	anio= hoy.getFullYear();
	if (dia<10) dia='0'+dia; 
	mes = mes + 1;
	if (mes<10) mes='0'+mes; 
	if ("eu"==$.rup_utils.get("language")){
		fecha_actual = String(anio+"/"+mes+"/"+dia);
	}else{
		fecha_actual = String(dia+"/"+mes+"/"+anio);
	}
	return fecha_actual;
}

function sumarDiasfechaActualSinHoras(dias){
	var hoy = new Date();
	dia = hoy.getDate(); 
	mes = hoy.getMonth();
	anio= hoy.getFullYear();
	if (dia<10) dia='0'+dia; 
	mes = mes + 1;
	if (mes<10) mes='0'+mes; 

	fecha_actual = sumaDias(dia, mes, anio, dias, "d/m/Y");

	return fecha_actual;
}

/* ********************************************************************************************
 * Funcion que devuelve unicamente la hora
 * ********************************************************************************************
 */
function obtenerHora(horaminutos){
	
	var horaminutosSplit=horaminutos.split(":");

	var hora=horaminutosSplit[0];  

	return hora;
}   

/* ********************************************************************************************
 * Funcion que devuelve unicamente los minutos
 * ********************************************************************************************
 */
function obtenerMinutos(horaminutos){
	
	var horaminutosSplit=horaminutos.split(":");

	var minutos=horaminutosSplit[1];  

	return minutos;
}   


/* ********************************************************************************************
 * Funcion que devuelve la letra a agregar al nombre del campo idiomatico en funcion del idioma 
 * ********************************************************************************************
 */
function recuperarLetraIdioma(){
	var letra ="";
	if ("eu"==$.rup_utils.get("language")){
		letra="e";
	}	
	return letra;
}


/* ********************************************************************************************
 * Funcion que devuelve la letra a agregar al nombre del campo idiomatico en funcion del idioma 
 * ********************************************************************************************
 */
function recuperarLetraIdiomaSanciones(){
	var letra ="es";
	if ("eu"==$.rup_utils.get("language")){
		letra="eu";
	}	
	return letra;
}

/* ********************************************************************************************
 * Funcion que devuelve la letra a agregar al nombre del campo idiomatico en funcion del idioma 
 * ********************************************************************************************
 */
function recuperarLetraIdiomaArbitrajes(){
	var letra ="es";
	if ("eu"==$.rup_utils.get("language")){
		letra="eu";
	}	
	return letra;
}

/* ********************************************************************************************
 * Organismos Agenda de Contacto Y42B  Sufijo - Idioma Es (Castellano) o Eu (Euskera)
 * Funcion que devuelve la letra a agregar al nombre del campo idiomatico en funcion del idioma 
 * ********************************************************************************************
 */
function recuperarLetraIdiomaOrganismos(){
	var letra ="Es";
	if ("eu"==$.rup_utils.get("language")){
		letra="Eu";
	}	
	return letra;
}

/* ********************************************************************************************
 * Organismos Agenda de Contacto Y42B  Sufijo - Idioma "" (Castellano) o EU (Euskera)
 * Funcion que devuelve la letra a agregar al nombre del campo idiomatico en funcion del idioma 
 * ********************************************************************************************
 */
function recuperarLetraAntiguasTablas(){
	var letra ="";
	if ("eu"==$.rup_utils.get("language")){
		letra="EU";
	}	
	return letra;
}

/* ********************************************************************************************
 * Funcion que valida fecha es=dd/mm/aaaa eu=aaaa/mm/dd
 * - Devuelve false si no es una fecha valida
 * ********************************************************************************************
 */
function isDate(txtDate)
{
  var currDateIdioma = $.rup_utils.get("language");
  var currVal = txtDate;
  if(currVal == '')
    return false;
  //ES,EN -> dd/mm/yyyy
  var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/; 
  if(currDateIdioma == 'eu'){
	  //EU -> yyyy/mm/dd
	  var rxDatePattern = /^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/; 
  }
  var dtArray = currVal.match(rxDatePattern); // is format OK?
  if (dtArray == null)
     return false;
  //ES,EN -> dd/mm/yyyy
  dtDay = dtArray[1];
  dtMonth= dtArray[3];
  dtYear = dtArray[5];
  if(currDateIdioma == 'eu'){
	  //EU -> yyyy/mm/dd
	  dtDay = dtArray[5];
	  dtMonth= dtArray[3];
	  dtYear = dtArray[1];
  }
  if (dtMonth < 1 || dtMonth > 12)
      return false;
  else if (dtDay < 1 || dtDay> 31)
      return false;
  else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31)
      return false;
  else if (dtMonth == 2)
  {
     var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
     if (dtDay> 29 || (dtDay ==29 && !isleap))
          return false;
  }
  return true;
}

/* ********************************************************************************************
 * Funcion que valida la hora es= hh:mm
 * - Devuelve false si no es una fecha valida
 * ********************************************************************************************
 */
function isTime(txtTime)
{
  var currVal = txtTime;
  if(currVal == '')
    return false;
  // hh:mm
  var rxTimePattern = /^(\d{1,2})(\:)(\d{1,2})$/; 
  var dtArray = currVal.match(rxTimePattern); // is format OK?
  if (dtArray == null){
     return false;
  }
  return true;
}

/* ********************************************************************************************
 * Funcion que mira en un texto si tiene o no especio en blanco
 * ********************************************************************************************
 */
function isBlackSpace(text){
	if(text.match(/\ /)) {
		return true;
	}
	return false;
}

/* ********************************************************************************************
 * Funcion que compara 2 fechas es=dd/mm/aaaa eu=aaaa/mm/dd
 * - Devuelve true si fechaFin >= fechaInicio
 * ********************************************************************************************
 */
function comparaFechas(fechaInicio, fechaFin){
	
	var fec1=fechaInicio.split("/");
	var fec2=fechaFin.split("/");

	var xDay="";  
	var xMonth="";  
    var xYear="";  

    var yDay="";
    var yMonth="";  
    var yYear="";  
    
    
    //fecha en español - cuando la longitud del primer split sea 2 __/__/____
    if ("es"==$.rup_utils.get("language")){
    	//alert("estamos en fecha español");
    	xDay = fec1[0];
    	xMonth = fec1[1];
    	xYear = fec1[2];
    	yDay = fec2[0];
    	yMonth = fec2[1];
    	yYear = fec2[2];
    }else{//fecha en euskera - cuando la longitud del primer split sea 4 ____/__/__
    	if(fec1[0].length = 4){
    		//alert("estamos en fecha en euskera");
        	xDay = fec1[2];
        	xMonth = fec1[1];
        	xYear = fec1[0];
        	yDay = fec2[2];
        	yMonth = fec2[1];
        	yYear = fec2[0];
    	}
    }

//	alert("<ul><li>xDay: "+ xDay + " xMonth: " + xMonth+ " xYear: "+xYear +
//		  "</li><li>yDay: "+ yDay + " yMonth: " + yMonth+ " yYear: "+yYear+"</li></ul>");
    
	//meses en javascript de 0-11
	
    var Fecha_X = new Date(xYear,xMonth-1,xDay);
    var Fecha_Y = new Date(yYear,yMonth-1,yDay);
 
//    alert("-->"+Fecha_Y +">="+ Fecha_X);
    
    
    if(Fecha_Y >= Fecha_X){
    	//alert('consulta------>'+fecha1+ 'respuesta------>'+fecha2);
    	//alert("TRUE, fecha respuesta (2) "+Fecha_Y+" > fecha consulta (1) "+Fecha_X);
    	return true;
    }else{
    	//alert('consulta------>'+fecha1+ 'respuesta------>'+fecha2);
    	//alert("TRUE, fecha respuesta (2) "+Fecha_Y+" <= fecha consulta (1) "+Fecha_X);
    	return false;
    }
}

/* ********************************************************************************************
 * Funcion que compara 2 fechas es=dd/mm/aaaa eu=aaaa/mm/dd
 * - Devuelve true si fechaFin > fechaInicio
 * ********************************************************************************************
 */
function esMayorFecha(fechaInicio, fechaFin){
	
	var fec1=fechaInicio.split("/");
	var fec2=fechaFin.split("/");

	var xDay="";  
	var xMonth="";  
    var xYear="";  

    var yDay="";
    var yMonth="";  
    var yYear="";  
    
    
    //fecha en español - cuando la longitud del primer split sea 2 __/__/____
    if ("es"==$.rup_utils.get("language")){
    	//alert("estamos en fecha español");
    	xDay = fec1[0];
    	xMonth = fec1[1];
    	xYear = fec1[2];
    	yDay = fec2[0];
    	yMonth = fec2[1];
    	yYear = fec2[2];
    }else{//fecha en euskera - cuando la longitud del primer split sea 4 ____/__/__
    	if(fec1[0].length = 4){
    		//alert("estamos en fecha en euskera");
        	xDay = fec1[2];
        	xMonth = fec1[1];
        	xYear = fec1[0];
        	yDay = fec2[2];
        	yMonth = fec2[1];
        	yYear = fec2[0];
    	}
    }

//	alert("<ul><li>xDay: "+ xDay + " xMonth: " + xMonth+ " xYear: "+xYear +
//		  "</li><li>yDay: "+ yDay + " yMonth: " + yMonth+ " yYear: "+yYear+"</li></ul>");
    
	//meses en javascript de 0-11
	
    var Fecha_X = new Date(xYear,xMonth-1,xDay);
    var Fecha_Y = new Date(yYear,yMonth-1,yDay);
 
//    alert("-->"+Fecha_Y +">"+ Fecha_X);
    
    
    if(Fecha_Y > Fecha_X){
    	//alert('consulta------>'+fecha1+ 'respuesta------>'+fecha2);
    	//alert("TRUE, fecha respuesta (2) "+Fecha_Y+" > fecha consulta (1) "+Fecha_X);
    	return true;
    }else{
    	//alert('consulta------>'+fecha1+ 'respuesta------>'+fecha2);
    	//alert("TRUE, fecha respuesta (2) "+Fecha_Y+" <= fecha consulta (1) "+Fecha_X);
    	return false;
    }
}

/* ********************************************************************************************
 * Funcion que compara 2 fechas es=dd/mm/aaaa eu=aaaa/mm/dd
 * - Devuelve true si fechaFin >= fechaInicio
 * ********************************************************************************************
 */
function esFechaFutura(fecha){
	
	var fec1=fechaActualSinHoras().split("/");
	var fec2=fecha.split("/");

	var xDay="";  
	var xMonth="";  
    var xYear="";  

    var yDay="";
    var yMonth="";  
    var yYear="";  
    
    
    //fecha en español - cuando la longitud del primer split sea 2 __/__/____
    if ("es"==$.rup_utils.get("language")){
    	//alert("estamos en fecha español");
    	xDay = fec1[0];
    	xMonth = fec1[1];
    	xYear = fec1[2];
    	yDay = fec2[0];
    	yMonth = fec2[1];
    	yYear = fec2[2];
    }else{//fecha en euskera - cuando la longitud del primer split sea 4 ____/__/__
    	if(fec1[0].length = 4){
    		//alert("estamos en fecha en euskera");
        	xDay = fec1[2];
        	xMonth = fec1[1];
        	xYear = fec1[0];
        	yDay = fec2[2];
        	yMonth = fec2[1];
        	yYear = fec2[0];
    	}
    }

//	alert("<ul><li>xDay: "+ xDay + " xMonth: " + xMonth+ " xYear: "+xYear +
//		  "</li><li>yDay: "+ yDay + " yMonth: " + yMonth+ " yYear: "+yYear+"</li></ul>");
    
	//meses en javascript de 0-11
	
    var Fecha_X = new Date(xYear,xMonth-1,xDay);
    var Fecha_Y = new Date(yYear,yMonth-1,yDay);
 
//    alert("-->"+Fecha_Y +">="+ Fecha_X);
    
    
    if(Fecha_Y > Fecha_X){
    	//alert('consulta------>'+fecha1+ 'respuesta------>'+fecha2);
    	//alert("TRUE, fecha respuesta (2) "+Fecha_Y+" > fecha consulta (1) "+Fecha_X);
    	return true;
    }else{
    	//alert('consulta------>'+fecha1+ 'respuesta------>'+fecha2);
    	//alert("TRUE, fecha respuesta (2) "+Fecha_Y+" <= fecha consulta (1) "+Fecha_X);
    	return false;
    }
}

/* ********************************************************************************************
 * Funcion que sobreescribe el literal generico de la opcion blank_ del rup combo
 * ********************************************************************************************
 */
function establecerValorBlankCombo(){
	if ("eu"==$.rup_utils.get("language")){
		$.rup.i18n.base.rup_combo.blankNotDefined = " [Hautatu elementu bat]";
	}else{
		$.rup.i18n.base.rup_combo.blankNotDefined = " [Seleccione un elemento]";
	}	
	
}

/* ********************************************************************************************
 * Funcion que elimina las etiquetas del tiny
 * ********************************************************************************************
 */
function stripHTML(cadena)
{
   return cadena.replace(/<[^>]+>/g,'');
}

/* ********************************************************************************************
 * Funcion que valida que en un campo input solo se introduzcan valores numericos
 * ********************************************************************************************
 */
function validarInput(e) { 
    //Para que función en IE y firefox 
    tecla = (document.all) ? e.keyCode : e.which;  //Asi solo funcionaba en IE porque en firefox e.which devuelve 0
    if (tecla ==0 && !document.all){
    	tecla=e.keyCode;
    }
	if (tecla==8||tecla==9||tecla==46||tecla==2||tecla==3||tecla==37||tecla==39) return true; //Para que funcione retroceso,tabulador,suprimir,inicio,fin y las flechas izq/dcha
    patron = /\d/;
    te = String.fromCharCode(tecla);     
    return patron.test(te); 
} 

/* ********************************************************************************************
* Funcion que valida que en un campo input solo se introduzcan valores alfanumericos
* ********************************************************************************************
*/
function validarInputAlfa(e) { 
   //Para que función en IE y firefox 
   tecla = (document.all) ? e.keyCode : e.which;  //Asi solo funcionaba en IE porque en firefox e.which devuelve 0
   if (tecla ==0 && !document.all){
   	tecla=e.keyCode;
   }
	if (tecla==8||tecla==9||tecla==46||tecla==2||tecla==3||tecla==37||tecla==39) return true; //Para que funcione retroceso,tabulador,suprimir,inicio,fin y las flechas izq/dcha
   patron = /^[a-zA-Z0-9]*$/;
   te = String.fromCharCode(tecla);     
   return patron.test(te); 
}

/* ********************************************************************************************
 * Funcion que valida float
 * ********************************************************************************************
 */
//function validarInputFloat(e) { 
//    tecla = (document.all) ? e.keyCode : e.which; 
//    if (tecla==8) return true; 
//    patron = /^[0-9]*\,?[0-9]*$/; 
//    te = String.fromCharCode(tecla); 
//    return patron.test(te); 
//} 

//function validarInputFloat(e){
//	obj=e.srcElement || e.target;
//	tecla_codigo = (document.all) ? e.keyCode : e.which;
//	//alert(tecla_codigo)
//	if(tecla_codigo==8)return true;
//	patron =/[\d,]/;
//	tecla_valor = String.fromCharCode(tecla_codigo);
//	control=(tecla_codigo==44 && (/[,]/).test(obj.value))?false:true
//	return patron.test(tecla_valor) &&  control;
//}



function replaceAll( text, busca, reemplaza ){
  while (text.toString().indexOf(busca) != -1)
      text = text.toString().replace(busca,reemplaza);
  return text;
}


function cambiarPuntoAComa(expresion){
	if (expresion!=null){
		var str= replaceAll(expresion,".",",");
		return str;
	}else{
		return expresion;
	}
}

function cambiarComaAPunto(expresion){
	if (expresion!=null){
		var str= replaceAll(expresion,",",".");
		return str;
	}else{
		return expresion;
	}
}

function quitarPuntoMiles(expresion){
	if (expresion!=null){
		var str= replaceAll(expresion,".","");
		return str;
	}else{
		return expresion;
	}
}

function NumCheck2(e, field, regexp)
{ 
    var patt = new RegExp(regexp);
	key = e.keyCode ? e.keyCode : e.which;
	var miBoolean = false;
	// backspace 
	if (key == 8) {
		miBoolean = true;
	}
	// tab 
	if (key == 9) {
		miBoolean = true;
	}
	// left arrow 
	if (key == 37 && e.key != "%") {
		miBoolean = true;
	}
	// up arrow 
	if (key == 38 && e.key != "&") {
		miBoolean = true;
	}
	// right arrow 
	if (key == 39) {
		miBoolean = true;
	}
	// down arrow 
	if (key == 40 && e.key != "(") {
		miBoolean = true;
	}
	// 0-9 
	if (key > 47 && key < 58){ 
		if (field.value == ""){
			miBoolean = true;
		}else{
			miBoolean = (patt.test(field.value+String.fromCharCode(key))); 
		}
	} 
	//,
	if (key == 44){ 
		if (field.value == "") {
			miBoolean = false ;
		}else{
			miBoolean = patt.test(field.value+String.fromCharCode(key)); 
		}
	}
	
	if (miBoolean){
 		y41bVar_FormChanged = true;
 	}
	y41bVar_EntraFunNumCheck = true;
	
	return miBoolean;
}

function NumCheck(e, field) 
{ 
	key = e.keyCode ? e.keyCode : e.which;
	var miBoolean = false;
	// backspace 
	if (key == 8) {
		miBoolean = true;
	}
	// tab 
	if (key == 9) {
		miBoolean = true;
	}
	// left arrow 
	if (key == 37 && e.key != "%") {
		miBoolean = true;
	}
	// up arrow 
	if (key == 38 && e.key != "&") {
		miBoolean = true;
	}
	// right arrow 
	if (key == 39) {
		miBoolean = true;
	}
	// down arrow 
	if (key == 40 && e.key != "(") {
		miBoolean = true;
	}
	// 0-9 
	if (key > 47 && key < 58){ 
		if (field.value == ""){
			miBoolean = true;
		}else{
			miBoolean = true;//!(regexp.test(field.value)); 
		}
	} 
	//,
	if (key == 44){ 
		if (field.value == "") {
			miBoolean = false ;
		}else{
			miBoolean = true;//regexp.test(field.value); 
		}
	}
	
	if (miBoolean){
 		y41bVar_FormChanged = true;
 	}
	y41bVar_EntraFunNumCheck = true;
	
	return miBoolean;
}

function NumCheckMaestros(e, field){
	key = e.keyCode ? e.keyCode : e.which;
	var miBoolean = false;
	// backspace 
	if (key == 8) {
		miBoolean = true;
	}
	// tab
	if (key == 9) {
		miBoolean = true;
	}
	// left arrow 
	if (key == 37 && e.key != "%") {
		miBoolean = true;
	}
	// up arrow 
	if (key == 38 && e.key != "&") {
		miBoolean = true;
	}
	// right arrow 
	if (key == 39) {
		miBoolean = true;
	}
	// down arrow 
	if (key == 40 && e.key != "(") {
		miBoolean = true;
	}
	// 0-9 
	if (key > 47 && key < 58){ 
		if (field.value == ""){
			miBoolean = true;
		}else{
			miBoolean = true;//!(regexp.test(field.value)); 
		}
	} 
	//,
	if (key == 44){ 
		if (field.value == "") {
			miBoolean = false ;
		}else{
			miBoolean = true;//regexp.test(field.value); 
		}
	}
	
	if (miBoolean){
 		y41bVar_FormChangedMaestros = true;
 	}
	y41bVar_EntraFunNumCheckMaestros = true;
	
	
	return miBoolean;
}

function NumCheckPopup(e, field){
	key = e.keyCode ? e.keyCode : e.which;
	var miBoolean = false;
	// backspace 
	if (key == 8) {
		miBoolean = true;
	}
	// left arrow 
	if (key == 37 && e.key != "%") {
		miBoolean = true;
	}
	// up arrow 
	if (key == 38 && e.key != "&") {
		miBoolean = true;
	}
	// right arrow 
	if (key == 39) {
		miBoolean = true;
	}
	// down arrow 
	if (key == 40 && e.key != "(") {
		miBoolean = true;
	}
	// 0-9 
	if (key > 47 && key < 58){ 
		if (field.value == ""){
			miBoolean = true;
		}else{
			miBoolean = true;//!(regexp.test(field.value)); 
		}
	} 
	//,
	if (key == 44){ 
		if (field.value == "") {
			miBoolean = false ;
		}else{
			miBoolean = true;//regexp.test(field.value); 
		}
	}
	
	if (miBoolean){
 		y41bVar_FormChangedPopup = true;
 	}
	y41bVar_EntraFunNumCheckPopup = true;
	
	
	return miBoolean;
}


function NumCheckSinDecimalesMaestros(e, field) 
{ 
	key = e.keyCode ? e.keyCode : e.which;
	var miBoolean = false;
	// backspace 
	if (key == 8) {
		miBoolean = true;
	}
	// left arrow 
	if (key == 37 && e.key != "%") {
		miBoolean = true;
	}
	// up arrow 
	if (key == 38 && e.key != "&") {
		miBoolean = true;
	}
	// right arrow 
	if (key == 39) {
		miBoolean = true;
	}
	// down arrow 
	if (key == 40 && e.key != "(") {
		miBoolean = true;
	}
	// coma superior
	if (key == 39) {
		miBoolean = false;
	}
	
	// 0-9 
	if (key > 47 && key < 58){ 
		if (field.value == ""){
			miBoolean = true;
		}else{
			miBoolean = true;//!(regexp.test(field.value)); 
		}
	}
	
	if (miBoolean){
 		y41bVar_FormChangedMaestros = true;
 	}
	y41bVar_EntraFunNumCheckMaestros = true;
	
	return miBoolean;
}

function NumCheckSinDecimalesPopup(e, field) 
{ 
	key = e.keyCode ? e.keyCode : e.which;
	var miBoolean = false;
	// backspace 
	if (key == 8) {
		miBoolean = true;
	}
	// left arrow 
	if (key == 37 && e.key != "%") {
		miBoolean = true;
	}
	// up arrow 
	if (key == 38 && e.key != "&") {
		miBoolean = true;
	}
	// right arrow 
	if (key == 39) {
		miBoolean = true;
	}
	// down arrow 
	if (key == 40 && e.key != "(") {
		miBoolean = true;
	}
	// coma superior
	if (key == 39) {
		miBoolean = false;
	}
	
	// 0-9 
	if (key > 47 && key < 58){ 
		if (field.value == ""){
			miBoolean = true;
		}else{
			miBoolean = true;//!(regexp.test(field.value)); 
		}
	}
	
	if (miBoolean){
		y41bVar_FormChangedPopup = true;
 	}
	y41bVar_EntraFunNumCheckPopup = true;
	
	return miBoolean;
}

function NumCheckSinDecimales(e, field) 
{ 
	key = e.keyCode ? e.keyCode : e.which;
	var miBoolean = false;
	// backspace 
	if (key == 8) {
		miBoolean = true;
	}
	// left arrow 
	if (key == 37 && e.key != "%") {
		miBoolean = true;
	}
	// up arrow 
	if (key == 38 && e.key != "&") {
		miBoolean = true;
	}
	// right arrow 
	if (key == 39) {
		miBoolean = true;
	}
	// down arrow 
	if (key == 40 && e.key != "(") {
		miBoolean = true;
	}
	// coma superior
	if (key == 39) {
		miBoolean = false;
	}
	
	// 0-9 
	if (key > 47 && key < 58){ 
		if (field.value == ""){
			miBoolean = true;
		}else{
			miBoolean = true;//!(regexp.test(field.value)); 
		}
	}
	
	if (miBoolean){
 		y41bVar_FormChanged = true;
 	}
	y41bVar_EntraFunNumCheck = true;
	
	return miBoolean;
}

//Funcion para calcular los puntos en función del %
function funcPercentage(porcentajeColumna, widthTabla){
	    var x = (porcentajeColumna*widthTabla)/100;
	    return x;
}

//unión de ambas funciones ltrim y rtrim
function trim(str, chars) {
    return ltrim(rtrim(str, chars), chars);
}

//ltrim quita los espacios o caracteres indicados al inicio de la cadena
function ltrim(str, chars) {
    chars = chars || "\\s";
    return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}

//rtrim quita los espacios o caracteres indicados al final de la cadena 
function rtrim(str, chars) {
    chars = chars || "\\s";
    return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}

//htmlEscape escapa caracteres especiales (uso recomendado en textArea)
function htmlEscape(str) {
	if(str==null){
    	return "";
    }
    return String(str)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
    		.replace(/à/g, '&agrave;')
    		.replace(/À/g, '&Agrave;')
    		.replace(/â/g, '&acirc;')
    		.replace(/Â/g, '&Acirc;')
    		.replace(/ä/g, '&auml;')
    		.replace(/Ä/g, '&Auml;')
    		.replace(/å/g, '&aring;')
    		.replace(/Å/g, '&Aring;')
    		.replace(/æ/g, '&aelig;')
    		.replace(/Æ/g, '&AElig;')
    		.replace(/ç/g, '&ccedil;')
    		.replace(/Ç/g, '&Ccedil;')
    		.replace(/è/g, '&egrave;')
    		.replace(/È/g, '&Egrave;')
    		.replace(/ê/g, '&ecirc;')
    		.replace(/Ê/g, '&Ecirc;')
    		.replace(/ë/g, '&euml;')
    		.replace(/Ë/g, '&Euml;')
    		.replace(/ï/g, '&iuml;')
    		.replace(/�/g, '&Iuml;')
    		.replace(/ô/g, '&ocirc;')
    		.replace(/Ô/g, '&Ocirc;')
    		.replace(/ö/g, '&ouml;')
    		.replace(/Ö/g, '&Ouml;')
    		.replace(/ø/g, '&oslash;')
    		.replace(/Ø/g, '&Oslash;')
    		.replace(/ß/g, '&szlig;')
    		.replace(/ù/g, '&ugrave;')
    		.replace(/Ù/g, '&Ugrave;')
    		.replace(/û/g, '&ucirc;')
    		.replace(/Û/g, '&Ucirc;')
    		.replace(/®/g, '&reg;')
    		.replace(/©/g, '&copy;')
    		.replace(/€/g, '&euro;')
    		//acentuadas minusculas
    		.replace(/á/g, '&aacute;')
			.replace(/é/g, '&eacute;')
			.replace(/í/g, '&iacute;')
			.replace(/ó/g, '&oacute;')
			.replace(/ú/g, '&uacute;')
			.replace(/ñ/g, '&ntilde;')
			.replace(/ü/g, '&uuml;')
    		//acentuadas mayusculas
			.replace(/�/g, '&Aacute;')
			.replace(/É/g, '&Eacute;')
			.replace(/�/g, '&Iacute;')
			.replace(/Ó/g, '&Oacute;')
			.replace(/Ú/g, '&Uacute;')
			.replace(/Ñ/g, '&Ntilde;')
			.replace(/Ü/g, '&Uuml;')
    		
    		// be carefull with this one (non-breaking whitee space)
    		.replace(/ /g, '&nbsp;');
}

//htmlEscape des-escapa caracteres especiales (uso recomendado en textArea)
function htmlUnescape(value){
    if(value==null){
    	return "";
    }
	return String(value)
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
	.replace(/&agrave;/g, 'à')
	.replace(/&Agrave;/g, 'À')
	.replace(/&acirc;/g, 'â')
	.replace(/&Acirc;/g, 'Â')
	.replace(/&auml;/g, 'ä')
	.replace(/&Auml;/g, 'Ä')
	.replace(/&aring;/g, 'å')
	.replace(/&Aring;/g, 'Å')
	.replace(/&aelig;/g, 'æ')
	.replace(/&AElig;/g, 'Æ')
	.replace(/&ccedil;/g, 'ç')
	.replace(/&Ccedil;/g, 'Ç')
	.replace(/&egrave;/g, 'è')
	.replace(/&Egrave;/g, 'È')
	.replace(/&ecirc;/g, 'ê')
	.replace(/&Ecirc;/g, 'Ê')
	.replace(/&euml;/g, 'ë')
	.replace(/&Euml;/g, 'Ë')
	.replace(/&iuml;/g, 'ï')
	.replace(/&Iuml;/g, '�')
	.replace(/&ocirc;/g, 'ô')
	.replace(/&Ocirc;/g, 'Ô')
	.replace(/&ouml;/g, 'ö')
	.replace(/&Ouml;/g, 'Ö')
	.replace(/&oslash;/g, 'ø')
	.replace(/&Oslash;/g, 'Ø')
	.replace(/&szlig;/g, 'ß')
	.replace(/&ugrave;/g, 'ù')
	.replace(/&Ugrave;/g, 'Ù')
	.replace(/&ucirc;/g, 'û')
	.replace(/&Ucirc;/g, 'Û')
	.replace(/&reg;/g, '®')
	.replace(/&copy;/g, '©')
	.replace(/&euro;/g, '€')
	
	//acentuadas minusculas
	.replace(/&aacute;/g, 'á')
	.replace(/&eacute;/g, 'é')
	.replace(/&iacute;/g, 'í')
	.replace(/&oacute;/g, 'ó')
	.replace(/&uacute;/g, 'ú')
	.replace(/&ntilde;/g, 'ñ')
	.replace(/&uuml;/g, 'ü')
	//acentuadas mayusculas
	.replace(/&Aacute;/g, '�')
	.replace(/&Eacute;/g, 'É')
	.replace(/&Iacute;/g, '�')
	.replace(/&Oacute;/g, 'Ó')
	.replace(/&Uacute;/g, 'Ú')
	.replace(/&Ñtilde;/g, 'Ñ')
	.replace(/&Üuml;/g, 'Ü')

	// be carefull with this one (non-breaking whitee space)
	.replace(/&nbsp;/g, ' ');
	
	
}

function getIdSelectedRows(selector_grid,id) {	//Función que devuelve un array con las PK de las filas seleccionadas	
	var grid = $(selector_grid);	
	var isMultiselect = $(grid).jqGrid("getGridParam", "multiselect");
	var hasMaint = $(grid).jqGrid("getGridParam", "hasMaint");
	var rowIds="";
	var data;
	var aNumRow;	
	
	if (isMultiselect) { //si el grid es multiseleccion
		var rowIds;
			var rows = $(grid).rup_grid("getSelectedRows");
			var res = new Array();
			for (i=0; i < rows.length;i++){
				res[i] = $(selector_grid).getRowData()[rows[i]-1][id]; 
			}
			rowIds=res;
	} else {
		var numRow=[$(grid).jqGrid("getGridParam", "selrow")] + '';		
		var data=$(grid).getRowData(numRow);		
		rowIds=data[id];		
	}
	if (rowIds!=null){	
		rowIds =(rowIds+ '').replace(/\x2F/g, "");
	}
	return rowIds;	
}

function y41bScrollTo(objeto){
	var divLoc = objeto.offset();
    $('html, body').animate({scrollTop: divLoc.top}, 1000);
}

function creaTitulosDesplegables(){
	$(".y41b-labelTitulo").unbind("click");
	$(".y41b-labelTitulo").click(function () {
	    $(this).parent().next().toggle('slow');
	    $(this).toggleClass('y41b-labelTituloPlegado');
	});
}

function waitDialogInitIdazki(capaCargando){
	$("#"+capaCargando).addClass("y4b_modalWaitIdazki");
	$("#"+capaCargando).html("");
	$("#"+capaCargando).html("<div class='blockUI' style='display:none'></div><div class='blockUI blockOverlay' style='z-index: 9000; border: none; margin: 0px; padding: 0px; width: 100%; height: 100%; top: 0px; left: 0px; background-color: rgb(0, 0, 0); opacity: 1; cursor: wait; position: fixed;'></div><div class='blockUI blockMsg blockPage' style='z-index: 9001; position: fixed; padding: 0px; margin: 0px; width: 30%; top: 40%; left: 35%; text-align: center; color: rgb(0, 0, 0); border: 3px solid rgb(170, 170, 170); background-color: rgb(255, 255, 255); cursor: wait;'><div class='y4b_modalWait'><img src='" + $.rup.APP_STATICS + "/images/busy.gif'>"+$.rup.i18n.app.comun.msjeLoading+"</div></div>");
}

function waitDialogIdazki(capaCargando){
	$("#"+capaCargando).css('display','block');
}

function waitDialogStopIdazki(capaCargando){
	$("#"+capaCargando).css('display','none');
}


// Por defecto, en toda la aplicacion son 30 segundos de espera.
function waitDialog(){
	//30 segundos.
	waitDialog(30000);
}
// Por si es necesario en algunos casos en que hay que usar otros tiempos mas peque�os o mas grandes (de los 30 segundos de por defecto).
function waitDialog(tiempoMaximoMilisegundos){
	$.blockUI({ message: "<div class='y4b_modalWait'><img src='" + $.rup.APP_STATICS + "/images/busy.gif' /> "+$.rup.i18n.app.comun.msjeLoading+" </div>" });
	$(".blockUI.blockOverlay").css("z-index",9000);
	$(".blockUI.blockOverlay").css("opacity",1);
	$(".blockUI.blockMsg.blockPage").css("z-index",9001);
	$(".blockUI.blockMsg.blockPage").css("opacity",1);
	setTimeout(function() {$.unblockUI();}, tiempoMaximoMilisegundos);	
}

function waitDialogElement(selector){	
	$("#"+selector).block({ message: "<div class='y4b_modalWait'><img src='" + $.rup.APP_STATICS + "/images/busy.gif' /> "+$.rup.i18n.app.comun.msjeLoading+" </div>" });
}

function waitDialogElementStop(selector){	
	$("#"+selector).unblock(); 
}

function waitDialogStop(){
	$.unblockUI();	
}

function esperaWhileAjax(){
	$(document).ajaxStart(waitDialog()).ajaxStop(waitDialogStop());	
}

// Funcion para controlar que haya cambiado un elemento de una pagina HTML
function y41b_FunFormChanged(){
	//Elementos HTML de la pagina
	
	
	//*input	
	$("input").keypress(function(e){

		
		if (!y41bVar_EntraFunNumCheck){
			if (!y41bVar_Popup && !y41bVar_Maestros && !y41bVar_Descriptores){
				y41bVar_FormChanged = true;
				if($(this).attr("readonly") == "readonly"){
					y41bVar_FormChanged = false;
				}

			}
		}
	});
	//*select
	$("select:not(.ui-pg-selbox)").change(function(){
		if (!y41bVar_Popup && !y41bVar_Maestros && !y41bVar_Descriptores){
			y41bVar_FormChanged = true;
		}
	});
	
	//*textarea
	$("textarea").keypress(function(){
		if (!y41bVar_Popup && !y41bVar_Maestros && !y41bVar_Descriptores && !y41bVar_EdicionTextarea){
			y41bVar_FormChanged = true;
			if($(this).attr("readonly") == "readonly"){
				y41bVar_FormChanged = false;
			}
		}
	});
	//*check  - no esta funcionando con los generados dinamicamente
	$(":checkbox").change(function() { // o $( "input[type=checkbox]" ) para tratar todos los check
    	if (!y41bVar_Popup && !y41bVar_Maestros && !y41bVar_Descriptores){
    		y41bVar_FormChanged = true;
	    }
	});
	//*radio
	$(":radio").change(function(){	//o $( "input[type=radio]" ) para tratar todos los radios
	    if(this.checked) {
	    	if (!y41bVar_Popup && !y41bVar_Maestros && !y41bVar_Descriptores){
	    		y41bVar_FormChanged = true;
	    	}
	    }
	});
	//*file
	$(":file").change(function(){
		if (!y41bVar_Popup && !y41bVar_Maestros && !y41bVar_Descriptores){
			y41bVar_FormChanged = true;
		}
	});
}

function y41b_FunFormChangedMaestros(){
	//Elementos HTML de la pagina
	//*input	
	$("input").keypress(function(e){
		if (!y41bVar_EntraFunNumCheckMaestros){
			if (!y41bVar_Descriptores){
				y41bVar_FormChangedMaestros = true;
				
				if($(this).attr("readonly") == "readonly"){
					y41bVar_FormChangedMaestros = false;
				}
			}
		}
	});
	//*select
	$("select:not(.ui-pg-selbox)").change(function(){
	
		if (!y41bVar_Descriptores){
			y41bVar_FormChangedMaestros = true;
		}
	});
	
	//*textarea
	$("textarea").keypress(function(){
		if (!y41bVar_Descriptores){
			y41bVar_FormChangedMaestros = true;
			
			if($(this).attr("readonly") == "readonly"){
				y41bVar_FormChangedMaestros = false;
			}
		}
	});
	//*check  - no esta funcionando con los generados dinamicamente
	$(":checkbox").change(function() { // o $( "input[type=checkbox]" ) para tratar todos los check
    	if (!y41bVar_Descriptores){
    		y41bVar_FormChangedMaestros = true;
    	}
	});
	//*radio
	$(":radio").change(function(){	//o $( "input[type=radio]" ) para tratar todos los radios
	    if(this.checked) {
	    	if (!y41bVar_Descriptores){
	    		y41bVar_FormChangedMaestros = true;
	    	}
	    }
	});
	//*file
	$(":file").change(function(){
		if (!y41bVar_Descriptores){
			y41bVar_FormChangedMaestros = true;
		}
	});
}

function y41b_FunFormChangedPopup(){
	//Elementos HTML de la pagina
	//*input
	$("input").keypress(function(e){
		if (!y41bVar_EntraFunNumCheckPopup){
			if (!y41bVar_Descriptores){
				y41bVar_FormChangedPopup = true;
				if($(this).attr("readonly") == "readonly"){
					y41bVar_FormChangedPopup = false;
				}
			}
		}
	});
	//*select
	
	$("select:not(.ui-pg-selbox)").change(function(){
		if (!y41bVar_Descriptores){
			y41bVar_FormChangedPopup = true;
		}
	});	
	
	
	//*textarea
	$("textarea").keypress(function(){
		if (!y41bVar_Descriptores && !y41bVar_EdicionTextarea){
			y41bVar_FormChangedPopup = true;
			if($(this).attr("readonly") == "readonly"){
				y41bVar_FormChangedPopup = false;
			}
		}
	});
	
	//*textarea
	$("textarea").keyup(function(){
		if (!y41bVar_Descriptores && !y41bVar_EdicionTextarea){
			y41bVar_FormChangedPopup = true;
			if($(this).attr("readonly") == "readonly"){
				y41bVar_FormChangedPopup = false;
			}
		}
	});

	//*check  - no esta funcionando con los generados dinamicamente
	$(":checkbox").change(function() { // o $( "input[type=checkbox]" ) para tratar todos los check
    	if (!y41bVar_Descriptores){
    		y41bVar_FormChangedPopup = true;
	    }
	});
	
	//*radio
	$(":radio").change(function(){	//o $( "input[type=radio]" ) para tratar todos los radios
	    if(this.checked) {
	    	if (!y41bVar_Descriptores){
	    		y41bVar_FormChangedPopup = true;
	    	}
	    }
	});
	
	
	//*file
	$(":file").change(function(){
		if (!y41bVar_Descriptores){
			y41bVar_FormChangedPopup = true;
		}
	});

}


//Funcion para controlar que haya cambiado un elemento de una pagina HTML
function y41b_FunFormChangedDescriptores(){
	//Elementos HTML de la pagina
	//*input	
	$("input").keypress(function(e){
		if (!y41bVar_EntraFunNumCheck){
			y41bVar_FormChangedDescriptores = true;
		}
	});
	
	//*select
	$("select:not(.ui-pg-selbox)").change(function(){
		y41bVar_FormChangedDescriptores = true;
	});

	//*textarea
	$("textarea").keypress(function(){
		y41bVar_FormChangedDescriptores = true;
	});
	//*check  - no esta funcionando con los generados dinamicamente
	$(":checkbox").change(function() { // o $( "input[type=checkbox]" ) para tratar todos los check
    	y41bVar_FormChangedDescriptores = true;
	});
	//*radio
	$(":radio").change(function(){	//o $( "input[type=radio]" ) para tratar todos los radios
	    if(this.checked) {
	    	y41bVar_FormChangedDescriptores = true;
	    }
	});
	//*file
	$(":file").change(function(){
		y41bVar_FormChangedDescriptores = true;
	});
}







//Funcion que devuelve el tamaño ed un string
function y41bFunTamanyoString(cadena){
	return cadena.length;	
}

//Funcion que devuelve el string de descripciones de etiquetas sin corchetes
function y41bFunEliminarCorchetes(cadena){
	var tamanyo = y41bFunTamanyoString(cadena);
	return cadena.substring(1,tamanyo-1);
}

//Funcion para visualizar mayor cantidad de texto
function y41bFunctionIrAZoom(zoomElementId){
	var params = "?zoomElementId="+zoomElementId;
	var urlZoomConciliacionEntrePartes = "/y41bVistaWar/utilidades/maintZoom" + params;
	$("#y41bTramiteConciliacionEntrePartesZoomDiv").rup_dialog("destroy");
	$("#y41bTramiteConciliacionEntrePartesZoomDiv").rup_dialog({
		modal: true,
		autoOpen: true,
		width: "750",
		height: "auto",
		title: $.rup.i18n.app.y41bUtilidadesZoom.zoom,
		url: urlZoomConciliacionEntrePartes,
		type:$.rup.dialog.AJAX
	});	
}

function validarEntero(valor){ 
 	//intento convertir a entero. 
	//si era un entero no le afecta, si no lo era lo intenta convertir 
	valor = parseInt(valor);

 	//Compruebo si es un valor numérico 
 	if (isNaN(valor)) { 
       	 //entonces (no es numero) devuelvo el valor cadena vacia 
       	 return '';
 	}else{ 
       	 //En caso contrario (Si era un número) devuelvo el valor 
       	 return valor; 
 	} 
}

/* false si la validacion es positiva*/
function validarEnteroFormato(valor){ 
 	//intento convertir a entero. 
	//si era un entero no le afecta, si no lo era lo intenta convertir 
	if (valor == ''){
		return false;
	}else{
		valor = parseInt(valor);
	
	 	//Compruebo si es un valor numérico 
	 	if (isNaN(valor)) { 
	       	 //entonces (no es numero) devuelvo el valor cadena vacia 
	       	 return true;
	 	}else{ 
	       	 //En caso contrario (Si era un número) devuelvo el valor 
	       	 return false; 
	 	} 
	}
}

/* validamos que el formato sea el correcto y que sea != '' */
function validaFecha(valor,idioma){
	
	if (valor == ''){
		return true;
	}else{
		var resultado = isValidDate(valor,idioma);
		if (resultado == ''){
			return false;
		}else{
			return true;	
		}		
	}
	
}

/* validamos que el formato sea el correcto para el boton guardar */
function validaFechaFormato(valor,idioma){
	if (valor == ''){
		return false;
	}else{
		var resultado = isValidDate(valor,idioma);
		if (resultado == ''){
			return false;
		}else{
			return true;	
		}
		
	}
}



function desarmaFecha(fecha, formato){
	var sRes = new Array(3);
    if(formato=='d/m/Y'){
        sRes[0] = parseInt(quitarCerosIzq(fecha.substr(0, 2)));
        sRes[1] = parseInt(quitarCerosIzq(fecha.substr(3, 2)));
        sRes[2] = parseInt(quitarCerosIzq(fecha.substr(6, 4)));
    } else {
        sRes[2] = parseInt(quitarCerosIzq(fecha.substr(0, 4)));
        sRes[1] = parseInt(quitarCerosIzq(fecha.substr(5, 2)));
        sRes[0] = parseInt(quitarCerosIzq(fecha.substr(8, 2)));
    }
    return sRes;
}
/**
 * Convierte una fecha con formato AAAAMMDD --> DD/MM/AAAA o  AAAA/MM/DD (según el idioma)
 */
function armaFecha(nDia, nMes, nAno, formato){
	var sRes = "";
    if(formato=='d/m/Y'){
        sRes = cerosIzq(String(nDia), 2);
        sRes = sRes + "/" + cerosIzq(String(nMes), 2);
        sRes = sRes + "/" + cerosIzq(String(nAno), 4);
    } else {
        sRes = cerosIzq(String(nAno), 4);
        sRes = sRes + "/" + cerosIzq(String(nMes), 2);
        sRes = sRes + "/" + cerosIzq(String(nDia), 2);
    }
    return sRes;
}

/**
 * Comprueba el formato de una hora [HH:mm].
 */
function validaHoraFormato(hora) {
	if (hora == '') {
		return false;
	} else {
		var isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(hora);
	    return isValid;
	}
}

/**
 * Compara dos horas validas.
 */
function comparaHoras(hora1, hora2) {
    var horas1 = hora1.split(':')[0];
    var minutos1 = hora1.split(':')[1];
    var horas2 = hora2.split(':')[0];
    var minutos2 = hora2.split(':')[1];
    
	if (horas1 < horas2) {
		return -1;
	} else if (horas1 > horas2) {
		return 1;
	} else {
		if (minutos1 < minutos2) {
			return -1;
		} else if (minutos1 > minutos2) {
			return 1;
		} else {
			return 0;
		}
	}
}

/**
* Rellena un string con longitud nPos con 0 a la izquierda
*/
function cerosIzq(sVal, nPos){
    var sRes = sVal;
    for (var i = sVal.length; i < nPos; i++)
        sRes = "0" + sRes;
    return sRes;
}
/**
* Elimina de un string los 0 a la izquierda
*/
function quitarCerosIzq(sVal){
    var sRes = '0';
    for (var i = 0; i < sVal.length; i++){
        if(sVal.charAt(i)!='0'){
            sRes=sVal.substr(i,sVal.length-i);
            break;
        }
    }
    return sRes;
}

function sumaDias(nDia, nMes, nAno, nSum, formato) {
	var fechaInicial = new Date(parseInt(nAno), parseInt(nMes)-1, parseInt(nDia),0,0,0);
    var fecha = new Date(fechaInicial.getTime() + nSum*24*60*60*1000);
    return armaFecha(fecha.getDate(), fecha.getMonth()+1, fecha.getFullYear(), formato);
}


function isValidDate(dateStr,idio)
{
    
	// MM/DD/YY   MM/DD/YYYY   MM-DD-YY   MM-DD-YYYY
    var texto="";
    if (dateStr!=""){
        //si idioma es euskera entonces cambiar el orden de la fecha de aaaa/mm/dd a dd/mm/aaaa
        if (idio=="eu"){
            var dia,mes,ano,dateStr2,pos,pos2;
            dateStr2=trim(dateStr," ");
            //anio= desde la posicion 0 hasta la primera "/"
            ano=trim(dateStr," ").substr(0,trim(dateStr," ").indexOf("/"));
            //cojo desde la primera "/" hasta el final" guardo la primera posicion de "/" en pos
            pos=trim(dateStr," ").indexOf("/");
            dateStr=trim(dateStr," ").substr(trim(dateStr," ").indexOf("/")+1,5);
            //pos= la posicion del segundo "/", dentro de mm/dd
            pos2=trim(dateStr," ").indexOf("/");
            //mes= desde la primera "/" hasta la segunnda "/"
            mes=trim(dateStr," ").substr(0,pos2);
            //dia= desde la segunda "/" hasta el final
            dia=trim(dateStr," ").substr(pos2+1,2);
            /*if (dia.length==1){
                dia="0" + dia;
            }
            if (mes.length==1){
                mes="0" + mes;
            }*/
            dateStr=dia + "/" + mes + "/" + ano;
        }
        //var datePat = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{4})$/; // requires 4 digit year
        var datePat = /^(\d{2})(\/|-)(\d{2})\2(\d{4})$/; // requires 4 digit year
        if (idio=="eu"){
            textmes=new Array(12);
            textmes[1]="Urtarrila";
            textmes[2]="Otsaila";
            textmes[3]="Martzoa";
            textmes[4]="Apirila";
            textmes[5]="Maiatza";
            textmes[6]="Ekaina";
            textmes[7]="Uztaila";
            textmes[8]="Abuztua";
            textmes[9]="Iraila";
            textmes[10]="Urria";
            textmes[11]="Azaroa";
            textmes[12]="Abendua";
        }else{
            textmes=new Array(12);
            textmes[1]="Enero";
            textmes[2]="Febrero";
            textmes[3]="Marzo";
            textmes[4]="Abril";
            textmes[5]="Mayo";
            textmes[6]="Junio";
            textmes[7]="Julio";
            textmes[8]="Agosto";
            textmes[9]="Septiembre";
            textmes[10]="Octubre";
            textmes[11]="Noviembre";
            textmes[12]="Diciembre";
        }
      
        var matchArray = dateStr.match(datePat); // is the format ok?
        if (matchArray == null)
        {
            if (idio=="eu"){
                texto=dateStr2 + " Dataren formatua oker dago.";
                return texto;
            }else{
                texto=dateStr + " Fecha con formato no valido.";
                return texto;
            }
        }
        day = matchArray[1]; // parse date into variables
        month = matchArray[3];
        year = matchArray[4];
        if (month < 1 || month > 12)
        { // check month range
            if (idio=="eu"){
                texto="Hila 1 - 12 bitartekoa izan behar da.";
                return texto;
            }else{
                texto="Mes debe ser entre 1 y 12.";
                return texto;
            }
        }
        if (day < 1 || day > 31)
        {
            if (idio=="eu"){
                texto="Eguna 1 - 31 bitartekoa izan behar da.";
                return texto;
            }else{
                texto="Dia debe ser entre 1 y 31.";
                return texto;
            }
        }
        if ((month==4 || month==6 || month==9 || month==11) && day==31)
        {
            if (idio=="eu"){
                texto=textmes[parseInt(month,10)] + "k ez ditu 31 egun";
                return texto;
            }else{
                texto="El mes de "+textmes[parseInt(month,10)]+" no tiene 31 dias";
                return texto;
            }
        }
        if (month == 2)
        { // check for february 29th
            var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
            if (day>29 || (day==29 && !isleap))
            {
                if (idio=="eu"){
                    texto=year + "ko Otsailak ez ditu " +day+ " egun";
                    return texto;
                }else{
                    texto="Febrero del año " + year + " no tiene " + day + " dias";
                    return texto;
                }
            }
        }
    }
    return texto;
}


function validaImporteDosDecimales(numero){
  if (!/^\d+(\,\d{1,2})?$/.test(numero)){
	  /* no es numero*/
	  return true;
  }else{
	  return false;
  }
}

function validaImporteDosDecimalesFormato(numero, longitud){
	/*VALIDO SOLO PARA NUMEROS CON DOS DECIMALES MAXIMO*/	
	if (numero == ''){
		return false;
	}else if (/^\d+(\,\d{1,2})?$/.test(numero)){
		  /* es un numero*/
			if (numero.length <= longitud){
				return true;
			}else{
				return false;
			}
	}else{
		  return false;
	}
}

function validarEmail(email){
	var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   	if ( !expr.test(email) ){
		return false;
	} else {
		return true;
	}
}


function aMayusculas(campo){
    $(campo).keyup(function(e) {
    	var teclaPulsada = e.keyCode;
    	if (teclaPulsada>=48 && teclaPulsada<=90){
    		$(this).val($(this).val().toUpperCase());
    	}
    });
}
function aMinusculas(campo){
    $(campo).keyup(function() {
    	var teclaPulsada = e.keyCode;
    	if (teclaPulsada>=48 && teclaPulsada<=90){
    		$(this).val($(this).val().toLowerCase());
    	}
    });
}

function sustituirEuro(){
	
	$("textarea").blur(function(){
		if ($(this).val().indexOf('€')>=0){
			$(this).val(replaceAll($(this).val(),"€", "Euro"));
		}
	});
}

function validarCampoSinEspacios(campo){
	if (campo.value.indexOf(" ")!=-1){
		campo.value=trim(campo.value," ");
	}
}


function validarSoloUnaComaNumeroConDecimales(campo){
	var num = 0;
	for (var i = 0; i < campo.length; i++)
	{
		if (campo.charAt(i) == ',')
		{
			num++;
		}
	}
	return num;
}

function irA(elemID) {
	var offsetTrail = document.getElementById(elemID);
	var offsetLeft = 0;
	var offsetTop = 0;
	while (offsetTrail) {
		offsetLeft += offsetTrail.offsetLeft;
		offsetTop += offsetTrail.offsetTop;
		offsetTrail = offsetTrail.offsetParent;
	}
	if (navigator.userAgent.indexOf("Mac") != -1 && typeof document.body.leftMargin != "undefined" && navigator.appName=="Microsoft Internet Explorer" ) {
		offsetLeft += parseInt(document.body.leftMargin);
		offsetTop += parseInt(document.body.topMargin);
	}
	window.scrollTo(offsetLeft,offsetTop);
}

function FormateDate(dateStr,idio)
{
	if (dateStr!=""){
        //si idioma es euskera entonces cambiar el orden de la fecha de aaaa/mm/dd a dd/mm/aaaa
        if (idio=="eu"){
        	var newDate=dateStr.split("-").join("/");
        	return newDate;        	
        }else{
        	var newDate=dateStr.split("-").reverse().join("/");
        	return newDate;
        }
	}
}


function errorFileUploadExplorer(responseText, messageOK, feedBack, callback) {
	var navegador = navigator.userAgent;
	var estaElFicheroEnviado = false;
	if (navigator.userAgent.indexOf('MSIE') !=-1) {
		var respDocSolicitudes = responseText;
		respDocSolicitudes = respDocSolicitudes.toUpperCase();
		if (respDocSolicitudes.indexOf("<PRE>")==-1 && responseText.indexOf("[",0)==-1){
			$("#" + feedBack).rup_feedback("option", "delay",null);
			$("#" + feedBack).rup_feedback("set",char_convert(responseText),"error");
		}else if (respDocSolicitudes.indexOf("<PRE>")==-1 && responseText.indexOf("[",0)!=-1){
			var errors = $.parseJSON(responseText);
			// Se envuelve para recoger un error que salta a veces en sancionadores
			// y hacer el bucle de una forma alternativa que no da error
			try{
				for(name in errors) {
					error = errors[name];
					$("#" + feedBack).rup_feedback("option", "delay",null);
					$("#" + feedBack).rup_feedback("set",char_convert(error),"error");
				}
			}catch(err){
				var error="";
				for(var i=0;i<errors.length;i++) {
					error = errors[i];
					$("#" + feedBack).rup_feedback("option", "delay",null);
					$("#" + feedBack).rup_feedback("set",char_convert(error),"error");
				}
			}
		}else{
			estaElFicheroEnviado = true;
			$("#" + feedBack).rup_feedback("option", "delay", 1000);
			$("#" + feedBack).rup_feedback("set",messageOK,"ok");
		}
	}else{
		estaElFicheroEnviado = true;
		$("#" + feedBack).rup_feedback("option", "delay", 1000);
		$("#" + feedBack).rup_feedback("set",messageOK,"ok");
	}
	
	if (estaElFicheroEnviado && callback !== null && typeof callback === 'function') {
		callback();
	}
}

/**
 * Encode string into Base64, as defined by RFC 4648 [http://tools.ietf.org/html/rfc4648].
 * As per RFC 4648, no newlines are added.
 *
 * Characters in str must be within ISO-8859-1 with Unicode code point <= 256.
 *
 * Can be achieved JavaScript with btoa(), but this approach may be useful in other languages.
 *
 * @param {string} str ASCII/ISO-8859-1 string to be encoded as base-64.
 * @returns {string} Base64-encoded string.
 */
function Base64Encode(str) {
    if (/([^\u0000-\u00ff])/.test(str)) throw Error('String must be ASCII');

    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var o1, o2, o3, bits, h1, h2, h3, h4, e=[], pad = '', c;

    c = str.length % 3;  // pad string to length of multiple of 3
    if (c > 0) { while (c++ < 3) { pad += '='; str += '\0'; } }
    // note: doing padding here saves us doing special-case packing for trailing 1 or 2 chars

    for (c=0; c<str.length; c+=3) {  // pack three octets into four hexets
        o1 = str.charCodeAt(c);
        o2 = str.charCodeAt(c+1);
        o3 = str.charCodeAt(c+2);

        bits = o1<<16 | o2<<8 | o3;

        h1 = bits>>18 & 0x3f;
        h2 = bits>>12 & 0x3f;
        h3 = bits>>6 & 0x3f;
        h4 = bits & 0x3f;

        // use hextets to index into code string
        e[c/3] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
    }
    str = e.join('');  // use Array.join() for better performance than repeated string appends

    // replace 'A's from padded nulls with '='s
    str = str.slice(0, str.length-pad.length) + pad;

    return str;
}

function inicializarEscritorio(){
	location.href = "/y41bVistaWar/escritorio/maint/S";
}


function inicializarEscritorioArb(){
//INICIALIZAR ESCRITORIO abriendo ventana de nuevo arbitraje
	location.href = "/y41bVistaWar/escritorio/maint/NARB";
}

function creaModalNuevaSancion(cargarOrigen){
	padreModalSeleccionOrigen="y41bFichaExpedienteSanNuevaDivModal";
	$("#y41bFichaExpedienteSanNuevaDivModal").rup_dialog("destroy");
	$("#y41bFichaExpedienteSanNuevaDivModal").rup_dialog({
		modal: true,
		autoOpen: true,
		width: "850",
		height: "auto",
		title: $.rup.i18n.app.sanciones.nueva.titulo,
		url: "/y41bVistaWar/expedien/maintNuevaMod?R01HNoPortal=true",    
		type:$.rup.dialog.AJAX,
		ajaxOptions: {
		},
		beforeclose: function(){
			if (y41bVar_FormChangedPopup) {
				   $.rup_messages("msgConfirm",{
					   title:$.rup.i18n.app.comun.confirmacion,
					   message: $.rup.i18n.app.msg.confirmacionperdidadatos,
					   OKFunction : function () {
						   y41bVar_FormChangedPopup = false;
						  $("#"+padreModalSeleccionOrigen).rup_dialog("close");
						}
					});
					return false;
				}else{
					return true;
				}
			},
			open: function(){
			if(cargarOrigen){
				//En caso de provenir de propuesto de sanción se deshabilita el radio de establecimiento
				$("#y41bOpcionEstablecimiento").attr("disabled", "disabled");
				
				$("#y41bOpcionExpRel").prop('checked', true);
				$("#y41bOpcionExpRel").click();
				var excodigo=getIdSelectedRows("#GRID_escritorioBandejaPropuestaSanciones","baprsanexcodigo");
				var identificadorBandeja=getIdSelectedRows("#GRID_escritorioBandejaPropuestaSanciones","baprsanid");
				/* en el campo baprsanusualta hemos metido el codigo del expediente sin formatear para recuperarlo aqui*/
				var excodigocompleto=getIdSelectedRows("#GRID_escritorioBandejaPropuestaSanciones","baprsanusualta");
				var tipoproc=getIdSelectedRows("#GRID_escritorioBandejaPropuestaSanciones","tipoProcedimiento.pcodigo");				
				//Procedimiento origen	
				
				$("#y41bNuevaSancionbaprsanid").val(identificadorBandeja);
				$("#y41bNuevaSancionRelacionados").val(excodigo+"-"+tipoproc);
				$("#listaExpedientesRelacionados ul").append('<li id="y41bNuevaSancionExpRel'+ excodigo +'-'+tipoproc+'" style="padding:0.5em;">'
							+excodigocompleto							
							+'</li>');
				switch (tipoproc){
				   	//SOLICITUD	
					case $("#y41bConstanteTipoProcSolic").val(): 
						comboTipoprocJSON.push({"value":tipoproc,"label":$.rup.i18n.app.y41bTipoProcedimiento.solicitudes});
						comboExpedientesSolJSON.push({"value":excodigo,"label":excodigocompleto});
						$("#listaExpedienteOrigen").empty();
						$("#listaExpedienteOrigen").append('<select id="y41bNuevaSancionExpedienteOrigenCombo" name="sanexp.expedienteOrigen"></select>');
						$("#"+nombreEmpieceBotones+"ExpedienteOrigenCombo").rup_combo({
							blank : "",
							width:"350",
							source:comboExpedientesSolJSON,
							selected:1
						});	
					    break;				  
					//INSPECCIONES
					case $("#y41bConstanteTipoProcInsp").val(): 
						comboTipoprocJSON.push({"value":tipoproc,"label":$.rup.i18n.app.y41bTipoProcedimiento.inspecciones});
						comboExpedientesInsJSON.push({"value":excodigo,"label":excodigocompleto});
						$("#listaExpedienteOrigen").empty();
						$("#listaExpedienteOrigen").append('<select id="y41bNuevaSancionExpedienteOrigenCombo" name="sanexp.expedienteOrigen"></select>');
						$("#"+nombreEmpieceBotones+"ExpedienteOrigenCombo").rup_combo({
							blank : "",
							width:"350",
							source:comboExpedientesInsJSON,
							selected:1
						});	
						break;
				    //ARBITRAJE
					case $("#y41bConstanteTipoProcArb").val(): 
						comboTipoprocJSON.push({"value":tipoproc,"label":$.rup.i18n.app.y41bTipoProcedimiento.arbitraje});
						comboExpedientesArbJSON.push({"value":excodigo,"label":excodigocompleto});
						$("#listaExpedienteOrigen").empty();
						$("#listaExpedienteOrigen").append('<select id="y41bNuevaSancionExpedienteOrigenCombo" name="sanexp.expedienteOrigen"></select>');
						$("#"+nombreEmpieceBotones+"ExpedienteOrigenCombo").rup_combo({
							blank : "",
							width:"350",
							source:comboExpedientesArbJSON,
							selected:1
						});	
						break;
				    default: 					  
					   break;
				}				
					
				$("#listaTipoprocOrigen").empty();
				$("#listaTipoprocOrigen").append('<select id="y41bNuevaSancionTipoProcOrigenCombo" name="sanexp.tipoprocOrigen"></select>');
				$("#"+nombreEmpieceBotones+"TipoProcOrigenCombo").rup_combo({
					blank : "",
					width:"350",
					source:comboTipoprocJSON,
					selected:1,
					select: function(){pintarComboExpedientesTipoProcOrigen();}
				});
				
				
			}else{
				/* para limpiar el campo por si antes ha entrado por propuesta*/
				$("#y41bNuevaSancionbaprsanid").val('');
			}
		}
	}
	);
}

function creaModalNuevoArbitraje(cargarOrigen, desdePropuesta, codExpediente){
	$("#y41bFichaExpedienteArbNuevaDivModal").rup_dialog("destroy");
	$("#y41bFichaExpedienteArbNuevaDivModal").rup_dialog({
		modal: true,
		autoOpen: true,
		width: "870",
		height: "auto",
		title: $.rup.i18n.app.arbitrajes.nueva.titulo,
		url: "/y41bVistaWar/solarb/maintNuevaMod?desdeBandejaPropuestas=" + desdePropuesta + "&codExpediente=" + codExpediente + "&R01HNoPortal=true",    
		type:$.rup.dialog.AJAX,
		ajaxOptions: {
		},
		beforeclose: function(){
			if (y41bVar_FormChangedPopup) {
				   $.rup_messages("msgConfirm",{
					   title:$.rup.i18n.app.comun.confirmacion,
					   message: $.rup.i18n.app.msg.confirmacionperdidadatos,
					   OKFunction : function () {
						   y41bVar_FormChangedPopup = false;
						  $("#y41bFichaExpedienteArbNuevaDivModal").rup_dialog("close");
						}
					});
				   y41bVar_Popup = false;
					return false;
				}else{
					y41bVar_Popup = false;
					return true;
				}
		},
		open: function(){
			if(cargarOrigen){
				//En caso de provenir de propuesto de sanción se deshabilita el radio de establecimiento
				$("#y41bOpcionEstablecimiento").attr("disabled", "disabled");
				
				$("#y41bOpcionExpRel").prop('checked', true);
				$("#y41bOpcionExpRel").click();
				var excodigo=getIdSelectedRows("#GRID_escritorioBandejaPropuestaArbitrajes","baprsanexcodigo");
				var identificadorBandeja=getIdSelectedRows("#GRID_escritorioBandejaPropuestaArbitrajes","baprarbid");
				// en el campo baprsanusualta hemos metido el codigo del expediente sin formatear para recuperarlo aqui
				var excodigocompleto=getIdSelectedRows("#GRID_escritorioBandejaPropuestaArbitrajes","baprarbusualta");
				var tipoproc=getIdSelectedRows("#GRID_escritorioBandejaPropuestaArbitrajes","tipoProcedimiento.pcodigo");				
				//Procedimiento origen	
				
				$("#y41bNuevaArbitrajebaprarbid").val(identificadorBandeja);
				$("#y41bNuevaArbitrajeRelacionados").val(excodigo+"-"+tipoproc);
				$("#listaExpedientesRelacionados ul").append('<li id="y41bNuevaArbitrajeExpRel'+ excodigo +'-'+tipoproc+'" style="padding:0.5em;">'
							+excodigocompleto							
							+'</li>');
				switch (tipoproc){
				   	//SOLICITUD	
					case $("#y41bConstanteTipoProcSolic").val(): 
						/*comboTipoprocJSON.push({"value":tipoproc,"label":$.rup.i18n.app.y41bTipoProcedimiento.solicitudes});
						comboExpedientesJSON.push({"value":excodigo,"label":excodigocompleto});
						$("#listaExpedienteOrigen").empty();
						$("#listaExpedienteOrigen").append('<select id="y41bNuevaArbitrajeExpedienteOrigenCombo" name="arbexp.expedienteOrigen"></select>');
						$("#"+nombreEmpieceBotones+"ExpedienteOrigenCombo").rup_combo({
							blank : "",
							width:"350",
							source:comboExpedientesJSON,
							selected:1
						});*/	
					    break;				  
					//INSPECCIONES
					case $("#y41bConstanteTipoProcInsp").val(): 
						comboTipoprocJSON.push({"value":tipoproc,"label":$.rup.i18n.app.y41bTipoProcedimiento.inspecciones});
						comboExpedientesInsJSON.push({"value":excodigo,"label":excodigocompleto});
						$("#listaExpedienteOrigen").empty();
						$("#listaExpedienteOrigen").append('<select id="y41bNuevaArbitrajeExpedienteOrigenCombo" name="arbexp.expedienteOrigen"></select>');
						$("#"+nombreEmpieceBotones+"ExpedienteOrigenCombo").rup_combo({
							blank : "",
							width:"350",
							source:comboExpedientesJSON,
							selected:1
						});	
						break;
				    //ARBITRAJE
					case $("#y41bConstanteTipoProcArb").val(): 
						comboTipoprocJSON.push({"value":tipoproc,"label":$.rup.i18n.app.y41bTipoProcedimiento.arbitraje});
						comboExpedientesJSON.push({"value":excodigo,"label":excodigocompleto});
						$("#listaExpedienteOrigen").empty();
						$("#listaExpedienteOrigen").append('<select id="y41bNuevaArbitrajeExpedienteOrigenCombo" name="arbexp.expedienteOrigen"></select>');
						$("#"+nombreEmpieceBotones+"ExpedienteOrigenCombo").rup_combo({
							blank : "",
							width:"350",
							source:comboExpedientesJSON,
							selected:1
						});	
						break;
				    default: 					  
					   break;
				}				
					
				/*$("#listaTipoprocOrigen").empty();
				$("#listaTipoprocOrigen").append('<select id="y41bNuevaArbitrajeTipoProcOrigenCombo" name="arbexp.tipoprocOrigen"></select>');
				$("#"+nombreEmpieceBotones+"TipoProcOrigenCombo").rup_combo({
					blank : "",
					width:"350",
					source:comboTipoprocJSON,
					selected:1
				});*/
			}else{
				// para limpiar el campo por si antes ha entrado por propuesta
				$("#y41bNuevaArbitrajebaprarbid").val('');
			}
		}
	}
	);
}


function y41bFunArbitrajeAbrirModalADO(){
	
	$("#y41bGenerarFicheroADOModal").rup_dialog("destroy");
	$("#y41bGenerarFicheroADOModal").rup_dialog({
		modal: true,
		autoOpen: true,
		width: "800",
		height: "auto",
		title: $.rup.i18n.app.arbitrajes.ficheroado.titulo,
		url: "/y41bVistaWar/solarb/maintFicheroAdoMod?R01HNoPortal=true",    
		type:$.rup.dialog.AJAX,
		ajaxOptions: {
		},
		beforeclose: function(){
			if (y41bVar_FormChangedPopup) {
				   $.rup_messages("msgConfirm",{
					   title:$.rup.i18n.app.comun.confirmacion,
					   message: $.rup.i18n.app.msg.confirmacionperdidadatos,
					   OKFunction : function () {
						   y41bVar_FormChangedPopup = false;
						  $("#y41bGenerarFicheroADOModal").rup_dialog("close");
						}
					});
					return false;
				}else{
					return true;
				}
			},
		open: function(){
			
		}
	}
	);
	
	
}




/* ***************************************************
 * Funci�n que suma o resta d�as a la fecha indicada * 
 * ***************************************************
 */
function sumaFecha(d, fecha)
{
	if ("eu"==$.rup_utils.get("language")){
		var amiFecha = fecha.split('/');
		fecha =amiFecha[2]+'/'+amiFecha[1]+'/'+amiFecha[0];
	}
	var Fecha = new Date();
	var sFecha = fecha || (Fecha.getDate() + "/" + (Fecha.getMonth() +1) + "/" + Fecha.getFullYear());
	var sep = sFecha.indexOf('/') != -1 ? '/' : '-'; 
	var aFecha = sFecha.split(sep);
	var fecha = aFecha[2]+'/'+aFecha[1]+'/'+aFecha[0];
	fecha= new Date(fecha);
	fecha.setDate(fecha.getDate()+parseInt(d));
	var anno=fecha.getFullYear();
	var mes= fecha.getMonth()+1;
	var dia= fecha.getDate();
	mes = (mes < 10) ? ("0" + mes) : mes;
	dia = (dia < 10) ? ("0" + dia) : dia;
	var fechaFinal = "";
	if ("es"==$.rup_utils.get("language")){
		fechaFinal= dia+sep+mes+sep+anno;
	}else{
		fechaFinal= anno+sep+mes+sep+dia;
	}
	return (fechaFinal);
 }


/* ********************************************************************************************
 * Funcion que devuelve la letra a agregar al nombre del campo idiomatico en funcion del idioma 
 * ********************************************************************************************
 */
function recuperarLetraIdiomaArbitraje(){
	var letra ="es";
	if ("eu"==$.rup_utils.get("language")){
		letra="eu";
	}	
	return letra;
}


function validaTextareaLength(valorTextarea,longitud_ini){
    var tamReal = "";
    if(valorTextarea!=""){                  
           if ((valorTextarea.length + cuentaSaltos(valorTextarea,1)) > longitud_ini) {
                   tamReal = valorTextarea.length + cuentaSaltos(valorTextarea,1);
                   return true;
           }else{
        	   return false;
           }
    }else {
    	return false;                           
    }
}
function cuentaSaltos(str,factor) {
    //Factor: indica el valor por el que hay que multiplicar el n� de lineas
    //  Los saltos ocupan 2 caracteres, pero cuando se aplica el length, ya ha sumado uno.
    // Por lo tanto, habr� ocasiones en que queramos multiplicar por 2 o por 1
    var alineas;
    var nlineas, longitud;
    alineas = str.split("\n");
    nlineas = alineas.length;
    if (nlineas > 0) {
                   //Si hay saltos de l�nea hay que tenerlos en cuenta en la longitud m�xima
                   longitud = ((nlineas - 1) * parseInt(factor));
    }else{
                   alineas = str.split("\r");
                   nlineas = alineas.length;
                   if (nlineas > 0) {
                                   longitud = ((nlineas - 1) * parseInt(factor));                                       
                   }else{
                                   alineas = str.split("\r\n");
                                   nlineas = alineas.length;
                                   if (nlineas > 0) {
                                                   longitud = ((nlineas - 1) * parseInt(factor));
                                   }else{
                                                   alineas = str.split("\n\r");
                                                   nlineas = alineas.length;
                                                   if (nlineas > 0) {
                                                                  longitud = ((nlineas - 1) * parseInt(factor));                                                      
                                                   }
                                                   
                                   }
                                   
                   }
                   
    }
    return longitud;
    
}
function recuperarLetraIdioma_c_e(){
	var letra ="c";
	if ("eu"==$.rup_utils.get("language")){
		letra="e";
	}	
	return letra;
}

function recuperarLetraAntiguasTablasPrueba(){
	var letra ="";
	if ("eu"==$.rup_utils.get("language")){
		letra="eu";
	}	
	return letra;
}


function y41bArbPeticionActualizacion(){
	   $("#y41bArbPeticionActualizacion").rup_dialog("destroy");
	   $("#y41bArbPeticionActualizacion").rup_dialog({
			modal: true,
			autoOpen: true,
			width: "800",
			height: "auto",
			title: $.rup.i18n.app.arbitrajes.petActDatos.titulo,
			url: "/y41bVistaWar/solarb/maintPeticionActualizacion?R01HNoPortal=true",    
			type:$.rup.dialog.AJAX,
			ajaxOptions: {
			}
		}
		);
}

// Tu IE no soporta IndexOf? 
if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function(obj, start) {
		for (var i = (start || 0), j = this.length; i < j; i++) {
			if (this[i] === obj) { return i; }
		}
		return -1;
	};
}

// Tu IE no soporta StartsWith?
if (!String.prototype.startsWith) {
	String.prototype.startsWith = function(searchString, position) {
		position = position || 0;
		return this.indexOf(searchString, position) === position;
	};
}

// Tu IE no soporta EndsWith?
if (!String.prototype.endsWith) {
	String.prototype.endsWith = function(searchString, position) {
		var subjectString = this.toString();
		if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
			position = subjectString.length;
		}
		position -= searchString.length;
		var lastIndex = subjectString.indexOf(searchString, position);
		return lastIndex !== -1 && lastIndex === position;
	};
}

var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
if (msie > 0) { // If Internet Explorer, return version number
	var version = parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
	
	if (version < 10) {
		
		// Tu IE (6-9) no soporta textarea[maxlenth]?
		$(document).on('input keyup', 'textarea[maxlength]', function(e) {
		    var $this = $(this);
		    var maxlength = $this.attr('maxlength');
		    if (!!maxlength) {
		        var text = $this.val();

		        if (text.length > maxlength) {
		            $this.val(text.substring(0, maxlength));
		            e.preventDefault();
		        }
		    }
		});
	}
}


/**
 * ValidateSpanishID. Returns the type of document and checks its validity.
 * 
 * Usage:
 *     ValidateSpanishID( str );
 * 
 *     > ValidateSpanishID( '12345678Z' );
 *     // { type: 'dni', valid: true }
 *     
 *     > ValidateSpanishID( 'B83375575' );
 *     // { type: 'cif', valid: false }
 * 
 * The algorithm is adapted from other solutions found at:
 * - http://www.compartecodigo.com/javascript/validar-nif-cif-nie-segun-ley-vigente-31.html
 * - http://es.wikipedia.org/wiki/C%C3%B3digo_de_identificaci%C3%B3n_fiscal
 */

ValidateSpanishID = (function() {
  'use strict';
  
  var DNI_REGEX = /^(\d{8})([A-Z])$/;
  var CIF_REGEX = /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/;
  var NIE_REGEX = /^[XYZ]\d{7,8}[A-Z]$/;

  var ValidateSpanishID = function( str ) {

    // Ensure upcase and remove whitespace
    str = str.toUpperCase().replace(/\s/, '');

    var valid = false;
    var type = spainIdType( str );

    switch (type) {
      case 'dni':
        valid = validDNI( str );
        break;
      case 'nie':
        valid = validNIE( str );
        break;
      case 'cif':
        valid = validCIF( str );
        break;
    }

    return {
      type: type,
      valid: valid
    };

  };

  var spainIdType = function( str ) {
    if ( str.match( DNI_REGEX ) ) {
      return 'dni';
    }
    if ( str.match( CIF_REGEX ) ) {
      return 'cif';
    }
    if ( str.match( NIE_REGEX ) ) {
      return 'nie';
    }
  };

  var validDNI = function( dni ) {
    var dni_letters = "TRWAGMYFPDXBNJZSQVHLCKE";
    var letter = dni_letters.charAt( parseInt( dni, 10 ) % 23 );
    
    return letter == dni.charAt(8);
  };

  var validNIE = function( nie ) {

    // Change the initial letter for the corresponding number and validate as DNI
    var nie_prefix = nie.charAt( 0 );

    switch (nie_prefix) {
      case 'X': nie_prefix = 0; break;
      case 'Y': nie_prefix = 1; break;
      case 'Z': nie_prefix = 2; break;
    }

    return validDNI( nie_prefix + nie.substr(1) );

  };

  var validCIF = function( cif ) {

    var match = cif.match( CIF_REGEX );
    var letter  = match[1],
        number  = match[2],
        control = match[3];

    var even_sum = 0;
    var odd_sum = 0;
    var n;

    for ( var i = 0; i < number.length; i++) {
      n = parseInt( number[i], 10 );

      // Odd positions (Even index equals to odd position. i=0 equals first position)
      if ( i % 2 === 0 ) {
        // Odd positions are multiplied first.
        n *= 2;

        // If the multiplication is bigger than 10 we need to adjust
        odd_sum += n < 10 ? n : n - 9;

      // Even positions
      // Just sum them
      } else {
        even_sum += n;
      }

    }

    var control_digit = (10 - (even_sum + odd_sum).toString().substr(-1) );
    var control_letter = 'JABCDEFGHI'.substr( control_digit, 1 );

    // Control must be a digit
    if ( letter.match( /[ABEH]/ ) ) {
      return control == control_digit;

    // Control must be a letter
    } else if ( letter.match( /[KPQS]/ ) ) {
      return control == control_letter;

    // Can be either
    } else {
      return control == control_digit || control == control_letter;
    }

  };

  return ValidateSpanishID;
})();



//Funcion para visualizar mayor cantidad de texto
function y41bFunctionEdicionTextArea(textAreaId,editable){
	y41bVar_EdicionTextarea = true;
	var params = "?textAreaId="+textAreaId+"&editable="+editable;
	var urlEdicionTextArea = "/y41bVistaWar/utilidades/maintEdicionTextareaModal" + params;
	$("#y41EdicionTextareaModal").rup_dialog("destroy");
	$("#y41EdicionTextareaModal").rup_dialog({
		modal: true,
		autoOpen: true,
		width: screen.width-80,
		height: "auto",
		title: $.rup.i18n.app.y41bUtilidadesZoom.zoom,
		url: urlEdicionTextArea,
		type:$.rup.dialog.AJAX,
		// FORMCHANGED Ini
		beforeclose: function(){
			if (y41bVar_FormmEdicionTextAreaChanged) {
			   $.rup_messages("msgConfirm",{
				   title:$.rup.i18n.app.comun.confirmacion,
				   message: $.rup.i18n.app.msg.confirmacionperdidadatos,
				   OKFunction : function () {
					   y41bVar_FormmEdicionTextAreaChanged = false;
					   $("#y41EdicionTextareaModal").rup_dialog("close");
				   }
				});
			    y41bVar_EdicionTextarea = false;
				return false;
			}else{
				y41bVar_EdicionTextarea = false;
				return true;
			}
		}
		// FORMCHANGED Fin
	});
}




//Funcion para controlar que haya cambiado un elemento de una pagina HTML
function y41b_FunFormEdicionTextAreaChanged(){
	//Elementos HTML de la pagina
		
	//*textarea
	$("textarea").keypress(function(){
		y41bVar_FormmEdicionTextAreaChanged = true;
	});
}
