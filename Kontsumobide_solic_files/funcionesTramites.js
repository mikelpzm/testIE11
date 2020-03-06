var y41bfuncionesTramiteidExpedienteSolicitudes = "";
var y41bfuncionesTramiteidProcedimientoSolicitudes = "";

function y41bFunctionSOLDespliegaModalTramite(trcodigo, rowId, idExpediente, idProcedimiento, nomtramite){
	y41bfuncionesTramiteidExpedienteSolicitudes = idExpediente;
	y41bfuncionesTramiteidProcedimientoSolicitudes = idProcedimiento;
	y41bVarDestinatarioTramite = false;
	y41bVarTipodocumentoTramite =false;
	y41bVarPerfilFirmaOcultoTramite = false;
	switch (trcodigo)
	{
	   case $("#y41bConstanteIdTramiteRegistroSolicitud").val(): 
		   y41bFunctionAbrirTramite(rowId,"tramiteRegistroSolicitud","y41bTramiteRegistroSolicitudDiv","maintMod", $.rup.i18n.app.y41bVistaWar_tramiteregistrosolicitud.registrosolicitud);
	       break;
	   case $("#y41bConstanteIdTramiteAsignacionInstructor").val(): 
		   y41bFunctionAbrirTramite(rowId,"tramiteAsignacionInstructor","y41bTramiteAsignacionInstructorDiv","maintMod", $.rup.i18n.app.y41bVistaWar_tramiteasignacioninstructor.asignacioninstructor);
	       break;
	   case $("#y41bConstanteIdTramiteRequerimientoInformacion").val(): 
		   y41bFunctionAbrirTramite(rowId,"tramiteRequerimientoInformacion","y41bTramiteRequerimientoInformacionDiv","maintMod", $.rup.i18n.app.y41bVistaWar_tramiterequerimientoinformacion.tramiterequerimientoinformacion);
	       break;
	   case $("#y41bConstanteIdTramiteRecepcionRequerimientoInformacion").val(): 
		   y41bFunctionAbrirTramite(rowId,"tramiteRecepcionRequerimientoInformacion","y41bTramiteRecepcionRequerimientoInformacionDiv","maintMod", $.rup.i18n.app.y41bVistaWar_tramiterecepcioninformacion.tramiterecepcioninformacion);
	       break;
	   case $("#y41bConstanteIdTramiteRequerimientoSubsanacion").val(): 
		   y41bFunctionAbrirTramite(rowId,"tramiteRequerimientoSubsanacion","y41bTramiteRequerimientoSubsanacionDiv","maintMod", $.rup.i18n.app.y41bVistaWar_tramiterequerimientosubsanacion.tramiterequerimientosubsanacion);
	       break;
	   case $("#y41bConstanteIdTramiteRecepcionRequerimientoSubsanacion").val(): 
		   y41bFunctionAbrirTramite(rowId,"tramiteRecepcionRequerimientoSubsanacion","y41bTramiteRecepcionRequerimientoSubsanacionDiv","maintMod", $.rup.i18n.app.y41bVistaWar_tramiterecepcionsubsanacion.tramiterecepcionsubsanacion);
	       break;	       
	   case $("#y41bConstanteIdTramiteRequerimientoAlegacion").val(): 
		   y41bFunctionAbrirTramite(rowId,"tramiteRequerimientoAlegacion","y41bTramiteRequerimientoAlegacionDiv","maintMod", $.rup.i18n.app.y41bVistaWar_tramiterequerimientoalegacion.tramiterequerimientoalegacion);
	       break;
	   case $("#y41bConstanteIdTramiteAlegacion").val(): 
		   y41bFunctionAbrirTramite(rowId,"tramiteAlegacion","y41bTramiteAlegacionDiv","maintMod", $.rup.i18n.app.y41bVistaWar_tramitealegacion.tramitealegacion);
	       break;
	   case $("#y41bConstanteIdTramiteMediacionTelefonica").val(): 
		   y41bFunctionAbrirTramite(rowId,"tramiteMediacionTelefonica","y41bTramiteMediacionTelefonicaDiv","maintMod", $.rup.i18n.app.y41bVistaWar_tramitemediaciontelefonica.tramitemediaciontelefonica);
	       break;
	   case $("#y41bConstanteIdTramiteMediacionPresencial").val(): 
		   y41bFunctionAbrirTramite(rowId,"tramiteMediacionPresencial","y41bTramiteMediacionPresencialDiv","maintMod", $.rup.i18n.app.y41bVistaWar_tramitemediacionpresencial.tramitemediacionpresencial);
	       break;	       
	   case $("#y41bConstanteIdTramiteConciliacionEntrePartes").val(): 
		   y41bFunctionAbrirTramite(rowId,"tramiteConciliacionEntrePartes","y41bTramiteConciliacionEntrePartesDiv","maintMod", $.rup.i18n.app.y41bVistaWar_tramiteconciliacion.tramiteconciliacion);
	       break;
	   case $("#y41bConstanteIdTramiteSolicitudInspeccion").val(): 
		   y41bFunctionAbrirTramite(rowId,"tramiteSolicitudInspeccion","y41bTramiteSolicitudInspeccionDiv","maintMod", $.rup.i18n.app.y41bVistaWar_tramitesolicitudinspeccion.tramitesolicitudinspeccion);
	       break;	       
	   case $("#y41bConstanteIdTramiteTrasladoRedCIAC").val(): 
		   y41bFunctionAbrirTramite(rowId,"tramiteTrasladoRedCiac","y41bTramiteTrasladoRedCiacDiv","maintMod", $.rup.i18n.app.y41bVistaWar_tramitetrasladoredciac.tramitetrasladoredciac);
	       break;
	   case $("#y41bConstanteIdTramiteRecepcionTraslado").val(): 
		   y41bFunctionAbrirTramite(rowId,"tramiteRecepcionTraslado","y41bTramiteRecepcionTrasladoDiv","maintMod", $.rup.i18n.app.y41bVistaWar_tramiterecepciontraslado.tramiterecepciontraslado);
	       break;
	   case $("#y41bConstanteIdTramiteCierreExpediente").val(): 
		   y41bFunctionAbrirTramite(rowId,"tramiteCierre","y41bTramiteCierreDiv","maintMod",  $.rup.i18n.app.y41bVistaWar_tramitecierre.tramitecierre);
	       break;
	   case $("#y41bConstanteIdTramiteComunicacion").val(): 
		   y41bFunctionAbrirTramite(rowId,"tramiteComunicacion","y41bTramiteComunicacionDiv","maintMod",  $.rup.i18n.app.y41bVistaWar_tramitecomunicacion.tramitecomunicacion);
	       break;
	   case $("#y41bConstanteIdTramiteNotificacion").val(): 
		   y41bFunctionAbrirTramite(rowId,"tramiteNotificacion","y41bTramiteNotificacionDiv","maintMod",  $.rup.i18n.app.y41bVistaWar_tramitenotificacion.tramitenotificacion);
	       break;
	   case $("#y41bConstanteIdTramiteElaboracionBOPV_AYTO").val(): 
		   y41bFunctionAbrirTramite(rowId,"tramiteElaboracionBOPVAyto","y41bTramiteElaboracionBOPVDiv","maintMod",  $.rup.i18n.app.y41bTramiteSANElaboracionInformacionPublicacionBOPVAyunta.nombrepopup);
	       break;	       
	   case $("#y41bConstanteIdTramiteBOPV_AYTO").val(): 
		   y41bFunctionAbrirTramite(rowId,"tramiteBOPVAyto","y41bTramiteBOPVAytoDiv","maintMod",  $.rup.i18n.app.y41bTramiteSANInformacionPublicacionBOPVAyunta.nombrepopup);
	       break;
	   case $("#y41bConstanteIdTramiteAcuseRecibo").val(): 
		   y41bFunctionAbrirTramite(rowId,"tramiteAcuseRecibo","y41bTramiteAcuseReciboDiv","maintMod",  $.rup.i18n.app.y41bVistaWar_tramiteacuserecibo.tramiteacuserecibo);
	       break;
	   case $("#y41bConstanteIdTramiteAdjuntarDocumentacion").val(): 
		   y41bFunctionAbrirTramite(rowId,"tramiteAdjuntarDocs","y41bTramiteAdjuntarDocumentosDiv","maintMod",  $.rup.i18n.app.y41bVistaWar_aportaciondocumentacion.aportardocumentacion);
	       break;
	   case $("#y41bConstanteIdTramiteGenerico").val(): 
		   y41bFunctionAbrirTramite(rowId,"tramiteGenerico","y41bTramiteGenericoDiv","maintMod",  $.rup.i18n.app.y41bVistaWar_tramitegenerico.tramitegenerico);
	       break;
	   case $("#y41bConstanteIdTramiteRecepcionRecurso").val(): 
		   y41bFunctionAbrirTramite(rowId,"tramiteRecepcionRecurso","y41bTramiteRecepcionRecursoDiv","maintMod",  $.rup.i18n.app.y41bVistaWar_tramiterecepcionrecurso.tramiterecepcionrecurso);
	       break;
	   case $("#y41bConstanteIdTramiteElaboracionInformeAsesoria").val(): 
		   y41bFunctionAbrirTramite(rowId,"tramiteInformeAsesoria","y41bTramiteInformeAsesoriaDiv","maintMod",  $.rup.i18n.app.y41bVistaWar_tramiteinformeasesoria.tramiteinformeasesoria);
	       break;
	   case $("#y41bConstanteIdTramiteRecepcionOrdenConsejero").val(): 
		   y41bFunctionAbrirTramite(rowId,"tramiteRecepcionOrdenConsejero","y41bTramiteRecepcionOrdenConsejeroDiv","maintMod",  $.rup.i18n.app.y41bVistaWar_tramiterecepcionordenconsejero.tramiterecepcionordenconsejero);
	       break;
	   case $("#y41bConstanteIdTramiteRegistroDecision").val(): 
		   y41bFunctionAbrirTramite(rowId,"tramiteRegistroDecision","y41bTramiteRegistroDecisionDiv","maintMod",  $.rup.i18n.app.y41bVistaWar_tramiteregistrodecision.tramiteregistrodecision);
	       break;
	   case $("#y41bConstanteIdTramiteSolicitudColaboracion").val(): 
		   y41bFunctionAbrirTramite(rowId,"tramiteSolicitudColaboracion","y41bTramiteSolColaboracionDiv","maintMod",  $.rup.i18n.app.y41bVistaWar_tramitesolicitudcolaboracion.tramitesolicitudcolaboracion);
	       break;
	   case $("#y41bConstanteIdTramiteRespuestaColaboracion").val(): 
		   y41bFunctionAbrirTramite(rowId,"tramiteRespuestaColaboracion","y41bTramiteRespColaboracionDiv","maintMod",  $.rup.i18n.app.y41bVistaWar_tramiterespuestacolaboracion.tramiterespuestacolaboracion);
	       break;
	   case $("#y41bConstanteIdTramiteRequerimientoAcreditacionRepresentacion").val(): 
		   y41bFunctionAbrirTramite(rowId,"tramiteRequerimientoAcreditacionRepresentacion","y41bTramiteRequerimientoAcreditacionRepresentacionDiv","maintMod", $.rup.i18n.app.y41bVistaWar_tramiterequerimientoacreditacionrepresentacion.tramiterequerimientoacreditacionrepresentacion);
	       break;
	   case $("#y41bConstanteIdTramiteRecepcionAcreditacionRepresentacion").val():
		   y41bFunctionAbrirTramite(rowId,"tramiteRecepcionRequerimientoAcreditacionRepresentacion","y41bTramiteRecepcionRequerimientoAcreditacionRepresentacionDiv","maintMod", $.rup.i18n.app.y41bVistaWar_tramiterecepcionacreditacionrepresentacion.tramiterecepcionacreditacionrepresentacion);
	       break;
	   case $("#y41bConstanteIdTramiteRecepcionInspeccion").val():
		   y41bFunctionAbrirTramite(rowId,"tramiteRecepcionInspeccion","y41bTramiteRecepcionInspeccionDiv","maintMod", $.rup.i18n.app.y41bVistaWar_tramiterecepcioninspeccion.tramiterecepcioninspeccion);
	       break;
	   default: 
			nomtramite = nomtramite.replace("</a>","");
			nomtramite = nomtramite.substring(nomtramite.indexOf(">")+1);

	   	   	y41bTramiteKnet(rowId,nomtramite);
	   	   	break;
	}
}

function y41bFunctionINSDespliegaModalTramite(trcodigo, rowId, idExpediente, idProcedimiento, nomtramite) {
	y41bfuncionesTramiteidExpedienteSolicitudes = idExpediente;
	y41bfuncionesTramiteidProcedimientoSolicitudes = idProcedimiento;
	y41bVarDestinatarioTramite = false;
	y41bVarTipodocumentoTramite =false;
	y41bVarPerfilFirmaOcultoTramite = false;
	switch (trcodigo) {
	   case $("#y41bConstanteIdTramiteINSAperturaInspeccion").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteAsignacionInstructor","y41bTramiteAsignacionInstructorDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSAperturaInspeccion.titulo);
	       break;
	   case $("#y41bConstanteIdTramiteINSRegistroInspeccion").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteRegistroSolicitud", "y41bTramiteRegistroSolicitudDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSRegistroInspeccion.titulo);
	       break;
	   case $("#y41bConstanteIdTramiteINSAcuerdoInicioProcedimiento").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteINSAcuerdoInicioProcedimiento", "y41bTramiteAcuerdoInicioProcedimientoDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSAcuerdoInicioProcedimiento.titulo);
	       break;
	   case $("#y41bConstanteIdTramiteINSLevantamientoActa").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteINSLevantamientoActa", "y41bTramiteLevantamientoActaDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSLevantamientoActa.titulo);
	       break;
	   case $("#y41bConstanteIdTramiteINSRequerimientoEscrito").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteRequerimientoInformacion", "y41bTramiteRequerimientoInformacionDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSRequerimientoEscrito.titulo);
	       break;
	   case $("#y41bConstanteIdTramiteINSRecepcionRequerimiento").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteRecepcionRequerimientoInformacion", "y41bTramiteRecepcionRequerimientoInformacionDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSRecepcionRequerimiento.titulo);
	       break;
	   case $("#y41bConstanteIdTramiteINSResolucionAIP").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteINSResolucionAIP", "y41bTramiteResolucionAIPDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSResolucionAcuerdoIncicioProcedimiento.titulo);
	       break;
	   case $("#y41bConstanteIdTramiteINSRevisionInclusionRedAlerta").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteINSRevisionInclusionRedAlerta", "y41bTramiteRevisionInclusionRedAlertaDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSRevisionInclusionRedAlerta.titulo);
	       break;
	   case $("#y41bConstanteIdTramiteINSEstablecimientoRelacionConRedAlerta").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteINSEstablecimientoRelacionConRedAlerta", "y41bTramiteEstablecimientoRelacionConRedAlertaDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSEstablecimientoRelacionConRedAlerta.titulo);
	       break;
	   case $("#y41bConstanteIdTramiteINSRegistroDecision").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteRegistroDecision", "y41bTramiteRegistroDecisionDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSRegistroDecision.titulo);
	       break;
	   case $("#y41bConstanteIdTramiteINSRemisionMuestrasAlLaboratorio").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteINSRemisionMuestrasAlLaboratorio", "y41bTramiteRemisionMuestrasAlLaboratorioDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSRemisionMuestrasAlLaboratorio.titulo);
	       break;
	   case $("#y41bConstanteIdTramiteINSResultadoEnsayos").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteINSResultadoEnsayos", "y41bTramiteResultadoEnsayosDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSResultadoEnsayos.titulo);
	       break;
	   case $("#y41bConstanteIdTramiteINSDesinmovilizacion").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteINSDesinmovilizacion", "y41bTramiteDesinmovilizacionDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSDesinmovilizacion.titulo);
	       break;
	   case $("#y41bConstanteIdTramiteINSRecepcionCertificadoDestruccion").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteINSRecepcionCertificadoDestruccion", "y41bTramiteRecepcionCertificadoDestruccionDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSRecepcionCertificadoDestruccion.titulo);
	       break;
	   case $("#y41bConstanteIdTramiteINSRecepcionJustificanteDevolucion").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteINSRecepcionJustificanteDevolucion", "y41bTramiteRecepcionJustificanteDevolucionDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSRecepcionJustificanteDevolucion.titulo);
	       break;
	   case $("#y41bConstanteIdTramiteINSEmisionInforme").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteINSEmisionInforme", "y41bTramiteEmisionInformeDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSEmisionInforme.titulo);
	       break;
	   case $("#y41bConstanteIdTramiteINSCierreExpediente").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteCierre","y41bTramiteCierreDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSCierreExpediente.titulo);
	       break;
	   case $("#y41bConstanteIdTramiteINSInformeValoracion").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteINSValoracionInspeccion", "y41bTramiteValoracionInspeccionDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSInformeValoracion.titulo);
	       break;
	   case $("#y41bConstanteIdTramiteINSAceptacionInformeValoracion").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteINSAceptacionInformeValoracion", "y41bTramiteAceptacionInformeValoracionDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSAceptacionInformeValoracion.titulo);
	       break;
	   case $("#y41bConstanteIdTramiteINSAmpliacionInspeccion").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteINSAmpliacionInspeccion", "y41bTramiteAmpliacionInspeccionDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSSolicitudAmpliacionInspeccion.titulo);
	       break;
	  // case $("#y41bConstanteIdTramiteINSAportarDocumentacion").val():
		//   y41bFunctionAbrirTramite(rowId, "tramiteAportarDocumentacion", "y41bTramiteAdjuntarDocumentosDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSAportarDocumentacion.titulo);
	  //     break;
	   case $("#y41bConstanteIdTramiteINSNotificacion").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteNotificacion", "y41bTramiteNotificacionDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSNotificacion.titulo);
	       break;
	   case $("#y41bConstanteIdTramiteINSAcuseRecibo").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteAcuseRecibo", "y41bTramiteAcuseReciboDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSAcuseRecibo.titulo);
	       break;
	   case $("#y41bConstanteIdTramiteINSComunicacion").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteComunicacion", "y41bTramiteComunicacionDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSComunicacion.titulo);
	       break;
	   case $("#y41bConstanteIdTramiteINSGenerico").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteGenerico", "y41bTramiteGenericoDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSGenerico.titulo);
	       break;
	   case $("#y41bConstanteIdTramiteINSBOPV_AYTO").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteBOPVAyto","y41bTramiteBOPVAytoDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSBOPV_AYTO.titulo);
	       break;
	   case $("#y41bConstanteIdTramiteINSElaboracionBOPV_AYTO").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteElaboracionBOPVAyto","y41bTramiteElaboracionBOPVDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSElaboracionBOPV_AYTO.titulo);
	       break;
	   case $("#y41bConstanteIdTramiteINSRecepcionRecurso").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteRecepcionRecurso","y41bTramiteRecepcionRecursoDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSRecepcionRecurso.titulo);
	       break;
	   case $("#y41bConstanteIdTramiteINSElaboracionInformeParaAsesoria").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteInformeAsesoria","y41bTramiteInformeAsesoriaDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSElaboracionInformeParaAsesoria.titulo);
	       break;
	   case $("#y41bConstanteIdTramiteINSRecepcionOrdenDelConsejero").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteRecepcionOrdenConsejero","y41bTramiteRecepcionOrdenConsejeroDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSRecepcionOrdenDelConsejero.titulo);
	       break;
	   case $("#y41bConstanteIdTramiteINSRecepcionAlegaciones").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteAlegacion","y41bTramiteAlegacionDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSRecepcionAlegaciones.titulo);
	       break;
	   case $("#y41bConstanteIdTramiteINSGenerico").val():
		   y41bFunctionAbrirTramite(rowId,"tramiteGenerico","y41bTramiteGenericoDiv","maintMod", $.rup.i18n.app.y41bVistaWar_tramitegenerico.tramitegenerico);
	       break;
	   case $("#y41bConstanteIdTramiteINSAdjuntarDocumentacion").val():
		   y41bFunctionAbrirTramite(rowId,"tramiteAdjuntarDocs","y41bTramiteAdjuntarDocumentosDiv","maintMod", $.rup.i18n.app.y41bVistaWar_aportaciondocumentacion.aportardocumentacion);
	       break;
	   case $("#y41bConstanteIdTramiteINSRequerimientoAcreditacionRepresentacion").val(): 
		   y41bFunctionAbrirTramite(rowId,"tramiteRequerimientoAcreditacionRepresentacion","y41bTramiteRequerimientoAcreditacionRepresentacionDiv","maintMod", $.rup.i18n.app.y41bVistaWar_tramiterequerimientoacreditacionrepresentacion.tramiterequerimientoacreditacionrepresentacion);
	       break;
	   case $("#y41bConstanteIdTramiteINSRecepcionAcreditacionRepresentacion").val():
		   y41bFunctionAbrirTramite(rowId,"tramiteRecepcionRequerimientoAcreditacionRepresentacion","y41bTramiteRecepcionRequerimientoAcreditacionRepresentacionDiv","maintMod", $.rup.i18n.app.y41bVistaWar_tramiterecepcionacreditacionrepresentacion.tramiterecepcionacreditacionrepresentacion);
	       break;
	   case $("#y41bConstanteIdTramiteINSOrdenServicio").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteINSOrdenServicio", "y41bTramiteOrdenServicioDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSOrdenServicio.titulo);
	       break;
	   case $("#y41bConstanteIdTramiteINSGenericoFirma").val():
		   y41bFunctionAbrirTramite(rowId, "tramiteINSGenericoFirma", "y41bTramiteGenericoFirmaDiv", "maintMod", $.rup.i18n.app.y41bTramiteINSGenericoFirma.titulo);
	       break;	
	   case $("#y41bConstanteIdTramiteINSEnviarMuestraEmpresa").val():
		   y41bFunctionAbrirTramite(rowId,"tramiteINSEnviarMuestraEmpresa","y41bTramiteEnviarMuestraEmpresaDiv","maintMod", $.rup.i18n.app.y41bTramiteINSEnviarMuestraEmpresa.titulo);
		   break;
	   case $("#y41bConstanteIdTramiteINSComunicarNuevoDistribuidor").val():
		   y41bFunctionAbrirTramite(rowId,"tramiteINSComunicarNuevoDistribuidor","y41bTramiteComunicarNuevoDistribuidorDiv","maintMod", $.rup.i18n.app.y41bTramiteINSComunicarNuevoDistribuidor.titulo);
		   break;		   
	   default: 
			nomtramite = nomtramite.replace("</a>", "");
			nomtramite = nomtramite.substring(nomtramite.indexOf(">") + 1);

			y41bTramiteINSKnet(rowId, nomtramite);
			break;
	}
}

function y41bTramiteKnet(ehcodigo,nomtramite) {
	seleccionado = ehcodigo; 
	$("#y41bTramiteKnetDiv").rup_dialog("destroy");
	$("#y41bTramiteKnetDiv").rup_dialog({
		modal: true,
		autoOpen: true,
		width: "880",
		height: "auto",
		title: nomtramite,
		url: "/y41bVistaWar/denuncia/y41bSolicitudTramitacionDetalle",
		type:$.rup.dialog.AJAX,
		beforeclose: function(){
			y41bVar_FormChanged = false;
		}
	});		
}

function y41bTramiteINSKnet(ehcodigo,nomtramite) {
	seleccionado = ehcodigo; 
	$("#y41bTramiteKnetDiv").rup_dialog("destroy");
	$("#y41bTramiteKnetDiv").rup_dialog({
		modal: true,
		autoOpen: true,
		width: "880",
		height: "auto",
		title: nomtramite,
		url: "/y41bVistaWar/inspeccion/y41bSolicitudTramitacionDetalle",
		type:$.rup.dialog.AJAX,
		beforeclose: function(){
			y41bVar_FormChanged = false;
		}
	});		
}

/* APERTURA DE TRAMITES Y MODIFICACION DE TRAMITES */
function y41bFunctionAbrirTramite(rowId,nombreController,nombreDiv,modo, titulo){
	y41bVar_FormChangedPopup = false;
	y41bVar_FormChangedMaestros = false;
	var url="";
	if(modo=="maintMod"){
		url="/y41bVistaWar/"+nombreController+"/"+modo+"/"+y41bfuncionesTramiteidProcedimientoSolicitudes+"/"+y41bfuncionesTramiteidExpedienteSolicitudes+"/"+rowId+"?R01HNoPortal=true";
	}else{
		url="/y41bVistaWar/"+nombreController+"/"+modo+"/"+y41bfuncionesTramiteidProcedimientoSolicitudes+"/"+y41bfuncionesTramiteidExpedienteSolicitudes+"?R01HNoPortal=true";
	}
	y41bVarIsConfirm = false;
	$("#"+nombreDiv).rup_dialog("destroy");
	$("[id$='ModalAdjuntarDocumento']").rup_dialog("destroy");
	$("#"+nombreDiv).rup_dialog({
		modal: true,
		autoOpen: true,
		width: "880",
		height: "auto",
		title: titulo,
		url: url,
		type:$.rup.dialog.AJAX,
		beforeclose: function(){
			y41bVar_FormChanged = false;
			if (y41bVar_FormChangedPopup) {
				if (y41bVarIsConfirm){
					y41bVar_Popup = false;
					return false;
				}
				y41bVarIsConfirm = true;
			   $.rup_messages("msgConfirm",{
				   title:$.rup.i18n.app.comun.confirmacion,
				   message: $.rup.i18n.app.msg.confirmacionperdidadatos,
				   OKFunction : function () {
					   y41bVar_FormChangedPopup = false;
					   y41bVar_FormChangedMaestros = false;
					   y41bVar_Popup = false;
					   $("#"+nombreDiv).rup_dialog("close");
					   $("#"+nombreDiv).html("");
					   $("[id$='ModalAdjuntarDocumento']").html("");
					}
				});
			   	$('a').click(function(event) {
			   		var url = $(this).attr('href');
					var id =  $(this).attr('id');
			   		if ((url == "#"  || url == undefined) && id.indexOf('_cancel') !== -1){
			   			y41bVarIsConfirm = false;
			   		}
			   	});
			   	$(document).keyup(function(event){
			        if(event.which==27)
			        {
			        	y41bVarIsConfirm = false;
			        }
			    });
				y41bVar_Popup = false;
				return false;
			}else{
				$("#"+nombreDiv).html("");
				$("[id$='ModalAdjuntarDocumento']").html("");
				y41bVar_Popup = false;
				return true;
			}
		}
	});	
}

function  y41bFunctionRecargarUpload(prefijoCtrl) {
	if (typeof prefijoCtrl === "undefined")
		prefijoCtrl = nombreEmpieceBotones;
	// Upload integrado en formulario
	$("#"+prefijoCtrl+"Fileupload_form").rup_upload({
		fileInput: $("#"+prefijoCtrl+"File_form"),
		submitFormButton: $("#"+prefijoCtrl+"Guardar"),
		maxFileSize: 5000000,
		singleFileUploads:true,
		submitInForm:true
	});	
}

function  y41bFunctionRecargarAjaxForm(prefijoCtrl) {
	if (typeof prefijoCtrl === "undefined")
		prefijoCtrl = nombreEmpieceBotones;
	  
	// Se utiliza jquery.form para realizar el submit de los formularios por AJAX
	var options = {
			success:       y41bFunctionShowSuccess_doc,  // post-submit callback
			error:    	   y41bFunctionShowError,
			feedback:      nombreEmpieceBotones + "DetalleTablaDocumentosFeedback"
    }; 
	$("#"+prefijoCtrl+"DocumentosForm").ajaxForm(options);
}

function y41bFunctionShowSuccess_doc(responseText) {
	errorFileUploadExplorer(responseText, $.rup.i18n.app.comun.datosEnviadosTramite, nombreFeedBack, function() {
		y41bFunctionDocumentosConsultaLimpiarDocumento();
		if (typeof nombreEmpieceBotones !== 'undefined' && 	nombreEmpieceBotones == 'y41bAdhsolicitudesComunicacion') {
			y41bAdhsolicitudesComunicacionReloadTablaDocs();
		}else{
			y41bFunctionReloadTablaDocs();
		}
		
		if ($("#" + nombreEmpieceBotones + "ModalAdjuntarDocumento").rup_dialog("isOpen")) {
			y41bVar_FormChangedMaestros = false;
			$("#" + nombreEmpieceBotones + "ModalAdjuntarDocumento").rup_dialog("close");
		}
	});
}

//Funcion que limpia/inicializa los valores del formulario
function y41bFunctionDocumentosConsultaLimpiarDocumento(){
	$("#"+nombreEmpieceBotones+"DocsContent").html('<table class="files"></table>');
	$("#"+nombreEmpieceBotones+"File_form").val("");
	y41bFunctionRecargarUpload(nombreEmpieceBotones);
	$("#"+nombreEmpieceBotones+"Documento").css("display", "block");
	$("#"+nombreEmpieceBotones+"NombreDocumento").val("");	
	/*if($("#"+nombreEmpieceBotones+"RequiereFirma")!= null && $("#"+nombreEmpieceBotones+"RequiereFirma").val()!=undefined && $("#"+nombreEmpieceBotones+"RequiereFirma").val()!=""){
		$("#"+nombreEmpieceBotones+"RequiereFirma").attr('checked', true);
		$("#"+nombreEmpieceBotones+"Rol").css("display", "block");
		$("#"+nombreEmpieceBotones+"ComboRol").rup_combo("setRupValue",rolFirma);	
	}*/
	if (y41bVarDestinatarioTramite){
		if($("#"+nombreEmpieceBotones+"ComboDestinatario")!= null && $("#"+nombreEmpieceBotones+"ComboDestinatario").val()!=undefined){
			$("#"+nombreEmpieceBotones+"ComboDestinatario").rup_combo("setRupValue","");	
		}
	}
	if (y41bVarTipodocumentoTramite){
		if($("#"+nombreEmpieceBotones+"ComboTipoDocumento")!= null && $("#"+nombreEmpieceBotones+"ComboTipoDocumento").val()!=undefined){
			$("#"+nombreEmpieceBotones+"ComboTipoDocumento").rup_combo("setRupValue","");	
		}
	}
	if($("#"+nombreEmpieceBotones+"ComboPlantilla")!= null && $("#"+nombreEmpieceBotones+"ComboPlantilla").val()!=undefined){
		$("#"+nombreEmpieceBotones+"ComboPlantilla").rup_combo("setRupValue","");	
	}	
}

//Funcion que limpia tabla docs
function  y41bFunctionReloadTablaDocs(){
	$("#"+nombreEmpieceBotones+"Documentos").rup_grid("clearGridData");
	$("#"+nombreEmpieceBotones+"Documentos").rup_grid("setGridParam", {url : "/y41bVistaWar/"+nombreController+"/findAllDocsTramite"});
	$("#"+nombreEmpieceBotones+"Documentos").rup_grid("reloadGrid");
}

function  y41bFunctionShowError(response, status, err) {
	switch(response.status) {		
		case 406:
			$("#" + this.feedback).rup_feedback("option", "delay", null);
			$("#" + this.feedback).rup_feedback("set", jqXHR.responseText, "error");
			break;
		case 409:
			controlY41bUDAException(response, this.feedback);
			break;
		case 422:
            controlY41bUDAException(response, this.feedback);
            break; 
		default:
			$("#" + this.feedback).rup_feedback("option", "delay", null);
			$("#" + this.feedback).rup_feedback("set", $.rup.i18n.app.msg.errorModifDatos, "error");
			break;
	}
}

function y41bFunctionGuardar(tramite){
	waitDialogIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
	var jqxhr = $.ajax({
		type : "POST",
		url : "/y41bVistaWar/"+nombreController+"/guardar",
		dataType : "json",
		data : JSON.stringify(tramite),
		contentType : 'application/json',
		error: function (jqXHR, textStatus, errorThrown){
			waitDialogStopIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
			switch(jqXHR.status){	
				case 406:
					$("#"+nombreFeedBack).rup_feedback("option", "delay",1000);
					$("#"+nombreFeedBack).rup_feedback("set",jqXHR.responseText, "error");
					break;
				case 409:
					controlY41bUDAException(jqXHR, ""+nombreFeedBack);
					break;
				default:
					$("#"+nombreFeedBack).rup_feedback("option", "delay", 1000);
					$("#"+nombreFeedBack).rup_feedback("set",$.rup.i18n.app.msg.errorModifDatos, "error");
					break;
			}
		},
		success : function(data) {
			waitDialogStopIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
					$("#"+nombreFeedBack).rup_feedback("option", "delay",1000);
					$("#"+nombreFeedBack).rup_feedback("set", $.rup.i18n.app.msg.operacionok, "ok");
					// FORMCHANGED Ini
					y41bVar_FormChangedPopup = false;
					y41bVar_FormChangedMaestros = false;
					// FORMCHANGED Fin
					$("#"+nombreDiv).rup_dialog("close");
					$("#"+nombreEmpieceBotones+"ModalAdjuntarDocumento").rup_dialog("close");
					$("#"+nombreEmpieceBotones+"ModalAdjuntarDocumento").rup_dialog("destroy");
					y41bTramiteActualizarTabla();
		}
	});
}


function y41bFunctionTramitar(tramite){
	waitDialogIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
	var jqxhr = $.ajax({
		type : "PUT",
		url : "/y41bVistaWar/"+nombreController+"/tramitar",
		dataType : "json",
		data : JSON.stringify(tramite),
		contentType : 'application/json',
		error: function (jqXHR, textStatus, errorThrown){
			waitDialogStopIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
			switch(jqXHR.status){	
				case 406:
					$("#"+nombreFeedBack).rup_feedback("option", "delay",1000);
					$("#"+nombreFeedBack).rup_feedback("set",jqXHR.responseText, "error");
					break;
				case 409:
					controlY41bUDAException(jqXHR, ""+nombreFeedBack);
					break;
				default:
					$("#"+nombreFeedBack).rup_feedback("option", "delay", 1000);
					$("#"+nombreFeedBack).rup_feedback("set",$.rup.i18n.app.msg.errorModifDatos, "error");
					break;
			}
		},
		success : function(data) {
			waitDialogStopIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
					$("#"+nombreFeedBack).rup_feedback("option", "delay",1000);
					$("#"+nombreFeedBack).rup_feedback("set", $.rup.i18n.app.msg.operacionok, "ok");
					// FORMCHANGED Ini
					y41bVar_FormChangedPopup = false;
					y41bVar_FormChangedMaestros = false;
					// FORMCHANGED Fin
					$("#"+nombreDiv).rup_dialog("close");
					$("#"+nombreEmpieceBotones+"ModalAdjuntarDocumento").rup_dialog("close");
					$("#"+nombreEmpieceBotones+"ModalAdjuntarDocumento").rup_dialog("destroy");
					y41bTramiteActualizarTabla();	
		}
	});
}



function y41bFunctionGuardarYGenerarPlantilla(tramite){
	tramite.anyadirPlantilla = 'S';
	waitDialogIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
	var jqxhr = $.ajax({
		type : "POST",
		url : "/y41bVistaWar/"+nombreController+"/guardar",
		dataType : "json",
		data : JSON.stringify(tramite),
		contentType : 'application/json',
		error: function (jqXHR, textStatus, errorThrown){
			switch(jqXHR.status){	
				case 406:
					$("#"+nombreFeedBack).rup_feedback("option", "delay",1000);
					$("#"+nombreFeedBack).rup_feedback("set",jqXHR.responseText, "error");
					waitDialogStopIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
					break;
				case 409:
					controlY41bUDAException(jqXHR, nombreFeedBack);
					waitDialogStopIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
					break;								
				//case 500:	
				default:
					$("#"+nombreFeedBack).rup_feedback("option", "delay", 1000);
					$("#"+nombreFeedBack).rup_feedback("set",$.rup.i18n.app.msg.errorModifDatos, "error");
					waitDialogStopIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
					break;
			}
		},
		success : function(data) {	
			waitDialogStopIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
			y41bFunctionLlamadaGenerarPlantilla(nombreController);
		}
	});
}



function  y41bFunctionLlamadaGenerarPlantilla(nombreController){
	y41bTramiteActualizarTabla();
	if($("#"+nombreEmpieceBotones+"ComboPlantilla").val()!=null && $("#"+nombreEmpieceBotones+"ComboPlantilla").val()!=""){	
		if (y41bFunctionValidarCamposTablaDocsPlantilla(nombreEmpieceBotones)){
			waitDialogIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");		
			var adjuntardocs = y41bFunctionSerializeAdjuntardocs(nombreEmpieceBotones);
			// add
			var jqxhr = $.ajax({
				type : "POST",
				url : "/y41bVistaWar/"+nombreController+"/addPlantilla",
				dataType : "json",
				data : JSON.stringify(adjuntardocs),
				contentType : 'application/json',
				error: function (jqXHR, textStatus, errorThrown){
					switch(jqXHR.status){	
						case 406:
							$("#"+nombreEmpieceBotones+"Feedback").rup_feedback("option", "delay",1000);
							$("#"+nombreEmpieceBotones+"Feedback").rup_feedback("set",jqXHR.responseText, "error");
							waitDialogStopIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
							break;
						case 409:
							controlY41bUDAException(jqXHR, nombreEmpieceBotones+"Feedback");
							waitDialogStopIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
							break;								
						// case 500:
						default:
							$("#"+nombreEmpieceBotones+"Feedback").rup_feedback("option", "delay", 1000);
							$("#"+nombreEmpieceBotones+"Feedback").rup_feedback("set",$.rup.i18n.app.msg.errorModifDatos, "error");
							waitDialogStopIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
							break;
					}
				},
				success : function(data) {
					$("#"+nombreEmpieceBotones+"Feedback").rup_feedback("option", "delay",1000);
					$("#"+nombreEmpieceBotones+"Feedback").rup_feedback("set", $.rup.i18n.app.comun.datosEnviados, "ok");
					// FORMCHANGED Ini
					y41bVar_FormChangedPopup = true;
					// FORMCHANGED Fin
					y41bFunctionDocumentosConsultaLimpiarDocumento();
					y41bFunctionReloadTablaDocs();
					waitDialogStopIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
				}
			});
		}
	}else{
		waitDialogStopIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
		$("#"+nombreEmpieceBotones+"Feedback").rup_feedback("option", "delay", 1000);
		$("#"+nombreEmpieceBotones+"Feedback").rup_feedback("set",$.rup.i18n.app.msg.seleccionePlantila, "alert");
	}
}


function y41bFunctionValidarCamposTablaDocsPlantilla(nombreEmpieceBotones){
	var txtFeedback = "";
	var validoCampo1 = false;
	var validoCampo3 = false;
	var validoCampo4 = false;
	var validoCampo5 = false;
	
	if ($("#"+nombreEmpieceBotones+"NombreDocumento").val()==""){
		txtFeedback += "<li>"+ $.rup.i18n.app.y41bAportacionDocumentacion.nombre +"</li>\n";
		validoCampo1 = false;
	}else{
		validoCampo1 = true;
	}
	
	if (y41bVarDestinatarioTramite){
		if ($("#"+nombreEmpieceBotones+"ComboDestinatario").val()==""){
			txtFeedback += "<li>"+ $.rup.i18n.app.y41bAportacionDocumentacion.destinatario +"</li>\n";
			validoCampo4 = false;
		}else{
			validoCampo4 = true;
		}
	}else{
		validoCampo4 = true;
	}

	if (y41bVarTipodocumentoTramite){
		if ($("#"+nombreEmpieceBotones+"ComboTipoDocumento").val()==""){
			txtFeedback += "<li>"+ $.rup.i18n.app.y41bAportacionDocumentacion.tipo +"</li>\n";
			validoCampo5 = false;
		}else{
			validoCampo5 = true;
		}
	}else{
		validoCampo5 = true;
	}

	
	if($("#"+nombreEmpieceBotones+"RequiereFirma")!= null && $("#"+nombreEmpieceBotones+"RequiereFirma").is(':checked')) {  
		if ($("#"+nombreEmpieceBotones+"ComboRol").val()==""){
			txtFeedback += "<li>"+ $.rup.i18n.app.y41bAportacionDocumentacion.rol +"</li>\n";
			validoCampo3 = false;
		}else{
			validoCampo3 = true;
		}
	}else{
		validoCampo3 = true;
	}
	
	if (validoCampo1 && validoCampo3 && validoCampo4 && validoCampo5){
		return true;
	}else{
		$("#"+nombreEmpieceBotones+"Feedback").rup_feedback("option", "delay",null);
		$("#"+nombreEmpieceBotones+"Feedback").rup_feedback("set","<ul>" + txtFeedback + "</ul>", "error");

		return false;
	}
}


function  y41bFunctionSerializeAdjuntardocs(nombreEmpieceBotones){
	
	// Objeto que se va enviar para guardar
	var adjuntardocs = new Object();
	
	// Nombre
	adjuntardocs.thtedesfile = $("#"+nombreEmpieceBotones+"NombreDocumento").val();
	
	// Plantilla
	adjuntardocs.ptcodigo = $("#"+nombreEmpieceBotones+"ComboPlantilla").val();
	
	if (y41bVarDestinatarioTramite){
		//Destino
		adjuntardocs.thdestino = $("#"+nombreEmpieceBotones+"ComboDestinatario").val();
	}
	
	if (y41bVarTipodocumentoTramite){
		//Tipo Documento
		var tipoDocumento = new Object();
		tipoDocumento.idTipodoc = $("#"+nombreEmpieceBotones+"ComboTipoDocumento").val();
		adjuntardocs.tipoDocumento = tipoDocumento;
	}
	
	if($("#"+nombreEmpieceBotones+"RequiereFirma")!= null && $("#"+nombreEmpieceBotones+"RequiereFirma").is(':checked')) {  
		adjuntardocs.threquierefirma = "S";
		var perfil = new Object();
		perfil.idPerfil=$("#"+nombreEmpieceBotones+"ComboRol").val();
		adjuntardocs.perfil = perfil;
	}else{
		adjuntardocs.threquierefirma = "N";
		adjuntardocs.perfil = null;
	}	
	return adjuntardocs;
}


function  y41bFunctionValidarCamposTablaDocs(prefijoCtrl){
	var txtFeedback = "";
	var validoCampo1 = false;
	var validoCampo2 = false;
	var validoCampo3 = false;
	var validoCampo4 = false;
	var validoCampo5 = false;
	
	if ($("#"+prefijoCtrl+"NombreDocumento").val()==""){
		txtFeedback += "<li>"+ $.rup.i18n.app.y41bAportacionDocumentacion.nombre +"</li>\n";
		validoCampo2 = false;
	}else{
		validoCampo2 = true;
	}

	if (y41bVarDestinatarioTramite){
		if ($("#"+prefijoCtrl+"ComboDestinatario").val()==""){
			txtFeedback += "<li>"+ $.rup.i18n.app.y41bAportacionDocumentacion.destinatario +"</li>\n";
			validoCampo4 = false;
		}else{
			validoCampo4 = true;
		}
	}else{
		validoCampo4 = true;
	}
	
	if (y41bVarTipodocumentoTramite){
		if ($("#"+prefijoCtrl+"ComboTipoDocumento").val()==""){
			txtFeedback += "<li>"+ $.rup.i18n.app.y41bAportacionDocumentacion.tipo +"</li>\n";
			validoCampo5 = false;
		}else{
			validoCampo5 = true;
		}
	}else{
		validoCampo5 = true;
	}
	
	if ($("#"+prefijoCtrl+"DocumentoObligatorio").is(":visible")) {
		if ($("#"+prefijoCtrl+"File_form").val()=="") {
			txtFeedback += "<li>"+ $.rup.i18n.app.y41bAportacionDocumentacion.documento +"</li>\n";
			validoCampo1 = false;
		}else{
			validoCampo1 = true;
		}
	}else{
		validoCampo1 = true;
	}
	
	if($("#"+prefijoCtrl+"RequiereFirma")!= null && $("#"+prefijoCtrl+"RequiereFirma").is(':checked')) {  
		if ($("#"+prefijoCtrl+"ComboRol").val()==""){
			txtFeedback += "<li>"+ $.rup.i18n.app.y41bAportacionDocumentacion.rol +"</li>\n";
			validoCampo3 = false;
		}else{
			validoCampo3 = true;
		}
	}else{
		validoCampo3 = true;
	}
	
	if (validoCampo1 && validoCampo2 && validoCampo3 && validoCampo4 && validoCampo5) {
		return true;
	}else{
		if (document.getElementById(nombreEmpieceBotones+"DetalleTablaDocumentosFeedback") !== null) {
			$("#"+nombreEmpieceBotones+"DetalleTablaDocumentosFeedback").rup_feedback("option", "delay", null);
			$("#"+nombreEmpieceBotones+"DetalleTablaDocumentosFeedback").rup_feedback("set", "<ul>" + txtFeedback + "</ul>", "error");
		} else {
			$("#"+nombreFeedBack).rup_feedback("option", "delay",null);
			$("#"+nombreFeedBack).rup_feedback("set","<ul>" + txtFeedback + "</ul>", "error");
		}

		return false;
	}
}

function y41bFunctionAnyadirDocumento(prefijoCtrl) {
	if (typeof prefijoCtrl === "undefined")
	  prefijoCtrl = nombreEmpieceBotones;
	  
	if (y41bFunctionValidarCamposTablaDocs(prefijoCtrl)){
		// FORMCHANGED Ini
		y41bVar_FormChangedPopup = true;
		y41bVar_Maestros = false;
		// FORMCHANGED Fin
		$("#"+prefijoCtrl+"DocumentosForm").submit();
	}
}


function y41bFunctionResetearComboPlantilla(){
	$("#"+nombreEmpieceBotones+"ComboPlantilla-button").remove();
	$("#"+nombreEmpieceBotones+"ComboPlantilla-menu").remove();
	$('<select id="'+nombreEmpieceBotones+'ComboPlantilla" name="idPlantilla"></select>').replaceAll("#"+nombreEmpieceBotones+"ComboPlantilla");
}

function y41bFunctionPintarComboPlantilla(codigo){	
	$("#"+nombreEmpieceBotones+"ComboPlantilla").rup_combo({
		source : "/y41bVistaWar/"+nombreController+"/findAllPlantilla",
		width: cteWidthCombosPlantilla,
		sourceParam : {
			label : "ptnombre",
			value : "ptcodigo"
		},
		blank : "",
		select:function(){
			$("#"+nombreEmpieceBotones+"DocsContent").html('<table class="files"></table>');
			$("#"+nombreEmpieceBotones+"File_form").val("");
			y41bFunctionRecargarUpload(nombreEmpieceBotones);
			
			if ($("#"+nombreEmpieceBotones+"ComboPlantilla").val()==null || $("#"+nombreEmpieceBotones+"ComboPlantilla").val()==""){
				$("#"+nombreEmpieceBotones+"Documento").css("display", "block");
				$("#"+nombreEmpieceBotones+"NombreDocumento").val("");
			}else{
				$("#"+nombreEmpieceBotones+"NombreDocumento").val($("#"+nombreEmpieceBotones+"ComboPlantilla").find('option:selected').text());
				$("#"+nombreEmpieceBotones+"Documento").css("display", "none");
			}
			
		},
		onLoadSuccess: function(){
			if ($("#"+nombreEmpieceBotones+"ComboPlantilla").val()==null || $("#"+nombreEmpieceBotones+"ComboPlantilla").val()==""){
				$("#"+nombreEmpieceBotones+"NombreDocumento").val("");
			}else{
				$("#"+nombreEmpieceBotones+"NombreDocumento").val($("#"+nombreEmpieceBotones+"ComboPlantilla").find('option:selected').text());
			}
		}		
	});
}

function y41bFunctionResetearComboPlantillaDecision(){
	$("#"+nombreEmpieceBotones+"ComboPlantilla-button").remove();
	$("#"+nombreEmpieceBotones+"ComboPlantillan-menu").remove();
	$('<select id="#'+nombreEmpieceBotones+'ComboPlantilla" name="idPlantilla"></select>').replaceAll("#"+nombreEmpieceBotones+"ComboPlantilla");
}

function y41bFunctionPintarComboPlantillaDecision(decodigo){
	y41bFunctionResetearComboPlantilla();
	$("#"+nombreEmpieceBotones+"ComboPlantilla").rup_combo({
		//blank : "",
		source : "/y41bVistaWar/"+nombreController+"/findAllPlantilla?decodigo="+decodigo,
		width:"440",
		blank : "",
		sourceParam : {
			label : "pdnombre",
			value : "pdcodigo"
		},
		select:function(){
			$("#"+nombreEmpieceBotones+"DocsContent").html('<table class="files"></table>');
			$("#"+nombreEmpieceBotones+"File_form").val("");
			y41bFunctionRecargarUpload(nombreEmpieceBotones);
			
			if ($("#"+nombreEmpieceBotones+"ComboPlantilla").val()==""
				|| $("#"+nombreEmpieceBotones+"ComboPlantilla").val()==null){
				$("#"+nombreEmpieceBotones+"Documento").css("display", "block");
				$("#"+nombreEmpieceBotones+"NombreDocumento").val("");
			}else{
				$("#"+nombreEmpieceBotones+"NombreDocumento").val($("#"+nombreEmpieceBotones+"ComboPlantilla").find('option:selected').text());
				$("#"+nombreEmpieceBotones+"Documento").css("display", "none");
			}
		},
		onLoadSuccess: function(){
			if ($("#"+nombreEmpieceBotones+"ComboPlantilla").val()==""
				|| $("#"+nombreEmpieceBotones+"ComboPlantilla").val()==null){
				$("#"+nombreEmpieceBotones+"NombreDocumento").val("");
			}else{				
				$("#"+nombreEmpieceBotones+"NombreDocumento").val($("#"+nombreEmpieceBotones+"ComboPlantilla").find('option:selected').text());
			}
		}		
	});
}


function y41bFunctionGuardarYGenerarPlantillaDecision(tramite){
	tramite.anyadirPlantilla = 'S';
	waitDialogIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
	var jqxhr = $.ajax({
		type : "POST",
		url : "/y41bVistaWar/"+nombreController+"/guardar",
		dataType : "json",
		data : JSON.stringify(tramite),
		contentType : 'application/json',
		error: function (jqXHR, textStatus, errorThrown){
			switch(jqXHR.status){	
				case 406:
					$("#"+nombreFeedBack).rup_feedback("option", "delay",1000);
					$("#"+nombreFeedBack).rup_feedback("set",jqXHR.responseText, "error");
					waitDialogStopIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
					break;
				case 409:
					controlY41bUDAException(jqXHR, nombreFeedBack);
					waitDialogStopIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
					break;								
				//case 500:	
				default:
					$("#"+nombreFeedBack).rup_feedback("option", "delay", 1000);
					$("#"+nombreFeedBack).rup_feedback("set",$.rup.i18n.app.msg.errorModifDatos, "error");
					waitDialogStopIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
					break;
			}
		},
		success : function(data) {	
			waitDialogStopIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
			y41bFunctionLlamadaGenerarPlantillaDecision(nombreController);
		}
	});
}

function y41bFunctionGuardarYGenerarPlantillaAcuerdoInicioProcedimiento(tramite) {
	tramite.anyadirPlantilla = 'S';
	waitDialogIdazki(nombreEmpieceBotones + "CapaCargandoIdazki");
	var jqxhr = $.ajax({
		type: "POST",
		url: "/y41bVistaWar/" + nombreController + "/guardar",
		dataType: "json",
		data: JSON.stringify(tramite),
		contentType: 'application/json',
		error: function(jqXHR, textStatus, errorThrown) {
			switch(jqXHR.status) {	
				case 406:
					$("#" + nombreFeedBack).rup_feedback("option", "delay", 1000);
					$("#" + nombreFeedBack).rup_feedback("set", jqXHR.responseText, "error");
					waitDialogStopIdazki(nombreEmpieceBotones + "CapaCargandoIdazki");
					break;
				case 409:
					controlY41bUDAException(jqXHR, nombreFeedBack);
					waitDialogStopIdazki(nombreEmpieceBotones + "CapaCargandoIdazki");
					break;								
				//case 500:	
				default:
					$("#" + nombreFeedBack).rup_feedback("option", "delay", 1000);
					$("#" + nombreFeedBack).rup_feedback("set", $.rup.i18n.app.msg.errorModifDatos, "error");
					waitDialogStopIdazki(nombreEmpieceBotones + "CapaCargandoIdazki");
					break;
			}
		},
		success: function(data) {	
			waitDialogStopIdazki(nombreEmpieceBotones + "CapaCargandoIdazki");
			y41bFunctionLlamadaGenerarPlantillaDecision(nombreController);
		}
	});
}

function  y41bFunctionLlamadaGenerarPlantillaDecision(nombreController){
	y41bTramiteActualizarTabla();
	if($("#"+nombreEmpieceBotones+"ComboPlantilla").val()!=null && $("#"+nombreEmpieceBotones+"ComboPlantilla").val()!=""){	
		if (y41bFunctionValidarCamposTablaDocsPlantilla(nombreEmpieceBotones)){
			waitDialogIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");		
			var adjuntardocs = serializeAdjuntardocsDecision(nombreEmpieceBotones);
			// add
			var jqxhr = $.ajax({
				type : "POST",
				url : "/y41bVistaWar/"+nombreController+"/addPlantilla",
				dataType : "json",
				data : JSON.stringify(adjuntardocs),
				contentType : 'application/json',
				error: function (jqXHR, textStatus, errorThrown){
					switch(jqXHR.status){	
						case 406:
							$("#"+nombreEmpieceBotones+"Feedback").rup_feedback("option", "delay",1000);
							$("#"+nombreEmpieceBotones+"Feedback").rup_feedback("set",jqXHR.responseText, "error");
							waitDialogStopIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
							break;
						case 409:
							controlY41bUDAException(jqXHR, nombreEmpieceBotones+"Feedback");
							waitDialogStopIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
							break;								
						// case 500:
						default:
							$("#"+nombreEmpieceBotones+"Feedback").rup_feedback("option", "delay", 1000);
							$("#"+nombreEmpieceBotones+"Feedback").rup_feedback("set",$.rup.i18n.app.msg.errorModifDatos, "error");
							waitDialogStopIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
							break;
					}
				},
				success : function(data) {
					$("#"+nombreEmpieceBotones+"Feedback").rup_feedback("option", "delay",1000);
					$("#"+nombreEmpieceBotones+"Feedback").rup_feedback("set", $.rup.i18n.app.comun.datosEnviados, "ok");
					// FORMCHANGED Ini
					y41bVar_FormChangedPopup = true;
					// FORMCHANGED Fin
					y41bFunctionDocumentosConsultaLimpiarDocumento();
					y41bFunctionReloadTablaDocs();
					waitDialogStopIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
				}
			});
		}
	}else{
		waitDialogStopIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
		$("#"+nombreEmpieceBotones+"Feedback").rup_feedback("option", "delay", 1000);
		$("#"+nombreEmpieceBotones+"Feedback").rup_feedback("set",$.rup.i18n.app.msg.seleccionePlantila, "alert");
	}
}

function serializeAdjuntardocsDecision(){
	
	// Objeto que se va enviar para guardar
	var adjuntardocs = new Object();
	
	//Nombre
	adjuntardocs.thtedesfile = $("#y41bTramiteRegistroDecisionNombreDocumento").val();
	
	//Plantilla Decision
	adjuntardocs.pdcodigo = $("#y41bTramiteRegistroDecisionComboPlantilla").val();
	
	
	//Destinatario
	adjuntardocs.thdestino = $("#y41bTramiteRegistroDecisionComboDestinatario").val();
	
	if($("#y41bTramiteRegistroDecisionRequiereFirma").is(':checked')) {  
		adjuntardocs.threquierefirma = "S";
		
		var perfil = new Object();
		perfil.idPerfil=$("#y41bTramiteRegistroDecisionComboRol").val();
		adjuntardocs.perfil = perfil;
	}else{
		adjuntardocs.threquierefirma = "N";
	}
	
	return adjuntardocs;
}

function y41bFunctionPintarTablaModificacion(){
	var destinatarioHidden = true;

	if (y41bVarDestinatarioTramite){
		destinatarioHidden = false;
	}

	var perfilFirmaHidden = false;

	if (y41bVarPerfilFirmaOcultoTramite){
		perfilFirmaHidden = true;
	}

	var y41bVarWidthTablaAdjuntarDocumentos = 820;	
	$("#"+nombreEmpieceBotones+"Documentos").rup_grid({
		url:"/y41bVistaWar/"+nombreController+"/findAllDocsTramite",
		loadOnStartUp: true,
		width: y41bVarWidthTablaAdjuntarDocumentos,
		pagerName:nombreEmpieceBotones+"DocumentosPager",
		rowNum: "10",
		sortorder: "asc",
		sortname: "thfecha",
		fluidBaseLayer:nombreEmpieceBotones+"TablaDocumentosConsultaDiv",
		colNames:[
		    '',
		    $.rup.i18n.app.y41bTablaAdjuntarDocumentos.expediente,
		    $.rup.i18n.app.y41bTablaAdjuntarDocumentos.tipodocumento,
		    $.rup.i18n.app.y41bTablaAdjuntarDocumentos.nombre,
		    $.rup.i18n.app.y41bTablaAdjuntarDocumentos.destinatario,
		    $.rup.i18n.app.y41bTablaAdjuntarDocumentos.archivo,
		    $.rup.i18n.app.y41bTablaAdjuntarDocumentos.fecha,
		    $.rup.i18n.app.y41bTablaAdjuntarDocumentos.pendientefirma,
		    $.rup.i18n.app.y41bTablaAdjuntarDocumentos.perfilfirma,
		    '',
		    $.rup.i18n.app.y41bTablaAdjuntarDocumentos.borrar
		],
		colModel: [
			{ 	name: "thcodocumento", 
				index: "thcodocumento",
				hidden: true,
				width:1
			},
			{ 	name: "thnumExpediente",
		    	index: "thnumExpediente",
		    	sortable:false,
		    	width: funcPercentage(15,y41bVarWidthTablaAdjuntarDocumentos) 
		    },
			{ 	name: "tipoDocumento.tdnombre"  + recuperarLetraIdioma(),
		    	index: "tipoDocumento.tdnombre"  + recuperarLetraIdioma(),
		    	sortable:false,
		    	width: funcPercentage(15,y41bVarWidthTablaAdjuntarDocumentos) 
		    },		           
		    { 	name: "thtedesfile",
		    	index: "thtedesfile",
		    	width: funcPercentage(26,y41bVarWidthTablaAdjuntarDocumentos) 
		    },
		    { 	name: "thdestino",
		    	index: "thdestino",
		    	editoptions: {	
		    		value:{"CO":$.rup.i18n.app.y41bTramiteTrasladoRedCiacComboDestinatario.reclamante,"ES":$.rup.i18n.app.y41bSolicitudDocumentacionTablaOrigen.reclamado,"OF":$.rup.i18n.app.y41bTramiteTrasladoRedCiacComboDestinatario.oficina,"O":$.rup.i18n.app.y41bSolicitudDocumentacionTablaOrigen.otros,"EV":$.rup.i18n.app.y41bTramiteRegistroDecisionComboDestinatario.establecimientovisitado}
				},
				formatter:"select",
				hidden: destinatarioHidden,
		    	width: funcPercentage(16,y41bVarWidthTablaAdjuntarDocumentos)
		    },
		    { 	name: "thnofile",
		    	index: "thnofile",
		    	formatter: y41bFunctionFormateadorLink,
		    	width: funcPercentage(26,y41bVarWidthTablaAdjuntarDocumentos)
		    },
		    { 	name: "thfecha", 
		    	index: "thfecha",
		    	align: "center",
		    	align: "center",
		    	width: funcPercentage(10,y41bVarWidthTablaAdjuntarDocumentos)
		    },
		    { 	name: "pendientefirma", 
		    	index: "pendientefirma",
		    	align: "center",
		    	sortable:false,
		    	formatter: y41bFunctionFormateadorPendienteFirma,
		    	width: funcPercentage(10,y41bVarWidthTablaAdjuntarDocumentos)
		    },
			{ name: "perfil.nombre"+recuperarLetraIdiomaOrganismos(),
				index: "perfil.nombre"+recuperarLetraIdiomaOrganismos(),
				width: funcPercentage(10,y41bVarWidthTablaAdjuntarDocumentos),
				hidden: perfilFirmaHidden
			},
		    { 	name: "thiddocumentum", 
		    	index: "thiddocumentum",
		    	align: "center",
		    	sortable: false,
		    	width: funcPercentage(10,y41bVarWidthTablaAdjuntarDocumentos),
		    	formatter: formateadorInfo
		    },
		    { 	name: "borrar", 
		    	index: "borrar",
		    	align: "center",
		    	sortable:false,
		    	formatter: y41bFunctionFormateadorPapelera,
		    	width: funcPercentage(10,y41bVarWidthTablaAdjuntarDocumentos) 
		    }		    
		]
	});
	
}



function  y41bFunctionPintarTablaTramitada(){
	var destinatarioHidden = true;
	
	if (y41bVarDestinatarioTramite){
		destinatarioHidden = false;
	}

	var y41bVarWidthTablaAdjuntarDocumentos = 820;
	$("#"+nombreEmpieceBotones+"Documentos").rup_grid({
		url:"/y41bVistaWar/"+nombreController+"/findAllDocsTramite",
		loadOnStartUp: true,
		width: y41bVarWidthTablaAdjuntarDocumentos,
		pagerName:""+nombreEmpieceBotones+"DocumentosPager",
		rowNum: "10",
		sortorder: "asc",
		sortname: "thfecha",
		fluidBaseLayer:""+nombreEmpieceBotones+"TablaDocumentosConsultaDiv",
		colNames:[
		    '',
		    $.rup.i18n.app.y41bTablaAdjuntarDocumentos.expediente,
		    $.rup.i18n.app.y41bTablaAdjuntarDocumentos.tipodocumento,
		    $.rup.i18n.app.y41bTablaAdjuntarDocumentos.nombre,
		    $.rup.i18n.app.y41bTablaAdjuntarDocumentos.destinatario,
		    $.rup.i18n.app.y41bTablaAdjuntarDocumentos.archivo,
		    $.rup.i18n.app.y41bTablaAdjuntarDocumentos.fecha
		],
		colModel: [
			{ 	name: "thcodocumento", 
				index: "thcodocumento",
				hidden: true,
				width:1
			},
			{ 	name: "thnumExpediente",
		    	index: "thnumExpediente",
		    	sortable:false,
		    	width: funcPercentage(15,y41bVarWidthTablaAdjuntarDocumentos) 
		    },
			{ 	name: "tipoDocumento.tdnombre"  + recuperarLetraIdioma(),
		    	index: "tipoDocumento.tdnombre"  + recuperarLetraIdioma(),
		    	sortable:false,
		    	width: funcPercentage(15,y41bVarWidthTablaAdjuntarDocumentos) 
		    },		           
		    { 	name: "thtedesfile",
		    	index: "thtedesfile",
		    	width: funcPercentage(20,y41bVarWidthTablaAdjuntarDocumentos) 
		    },
		    { 	name: "thdestino",
		    	index: "thdestino",
		    	editoptions: {	
		    		value:{"CO":$.rup.i18n.app.y41bTramiteTrasladoRedCiacComboDestinatario.reclamante,"ES":$.rup.i18n.app.y41bSolicitudDocumentacionTablaOrigen.reclamado,"OF":$.rup.i18n.app.y41bTramiteTrasladoRedCiacComboDestinatario.oficina,"O":$.rup.i18n.app.y41bSolicitudDocumentacionTablaOrigen.otros,"EV":$.rup.i18n.app.y41bTramiteRegistroDecisionComboDestinatario.establecimientovisitado}
				},
				formatter:"select",
				hidden: destinatarioHidden,
		    	width: funcPercentage(16,y41bVarWidthTablaAdjuntarDocumentos)
		    },
		    { 	name: "thnofile",
		    	index: "thnofile",
		    	formatter: y41bFunctionFormateadorLink,
		    	width: funcPercentage(20,y41bVarWidthTablaAdjuntarDocumentos)
		    },
		    { 	name: "thfecha", 
		    	index: "thfecha",
		    	align: "center",
		    	width: funcPercentage(10,y41bVarWidthTablaAdjuntarDocumentos)
		    }   
		]
	});	
}

function y41bFunctionPintarTablaDocsSinFirma(){
	
	var destinatarioHidden = true;
	
	if (y41bVarDestinatarioTramite){
		destinatarioHidden = false;
	}
	
	var y41bVarWidthTablaAdjuntarDocumentos = 820;	
	$("#"+nombreEmpieceBotones+"Documentos").rup_grid({
		url:"/y41bVistaWar/"+nombreController+"/findAllDocsTramite",
		loadOnStartUp: true,
		width: y41bVarWidthTablaAdjuntarDocumentos,
		pagerName:nombreEmpieceBotones+"DocumentosPager",
		rowNum: "10",
		sortorder: "asc",
		sortname: "thfecha",
		fluidBaseLayer:nombreEmpieceBotones+"TablaDocumentosConsultaDiv",
		colNames:[
		    '',
		    $.rup.i18n.app.y41bTablaAdjuntarDocumentos.expediente,
		    $.rup.i18n.app.y41bTablaAdjuntarDocumentos.tipodocumento,
		    $.rup.i18n.app.y41bTablaAdjuntarDocumentos.nombre,
		    $.rup.i18n.app.y41bTablaAdjuntarDocumentos.destinatario,
		    $.rup.i18n.app.y41bTablaAdjuntarDocumentos.archivo,
		    $.rup.i18n.app.y41bTablaAdjuntarDocumentos.fecha,
		    '',
		    $.rup.i18n.app.y41bTablaAdjuntarDocumentos.borrar
		],
		colModel: [
			{ 	name: "thcodocumento", 
				index: "thcodocumento",
				hidden: true,
				width:1
			},
			{ 	name: "thnumExpediente",
		    	index: "thnumExpediente",
		    	sortable:false,
		    	width: funcPercentage(15,y41bVarWidthTablaAdjuntarDocumentos) 
		    },
			{ 	name: "tipoDocumento.tdnombre"  + recuperarLetraIdioma(),
		    	index: "tipoDocumento.tdnombre"  + recuperarLetraIdioma(),
		    	sortable:false,
		    	width: funcPercentage(15,y41bVarWidthTablaAdjuntarDocumentos) 
		    },		           
		    { 	name: "thtedesfile",
		    	index: "thtedesfile",
		    	width: funcPercentage(26,y41bVarWidthTablaAdjuntarDocumentos) 
		    },
		    { 	name: "thdestino",
		    	index: "thdestino",
		    	editoptions: {	
		    		value:{"CO":$.rup.i18n.app.y41bTramiteTrasladoRedCiacComboDestinatario.reclamante,"ES":$.rup.i18n.app.y41bSolicitudDocumentacionTablaOrigen.reclamado,"OF":$.rup.i18n.app.y41bTramiteTrasladoRedCiacComboDestinatario.oficina,"O":$.rup.i18n.app.y41bSolicitudDocumentacionTablaOrigen.otros}
				},
				formatter:"select",
				hidden: destinatarioHidden,
		    	width: funcPercentage(16,y41bVarWidthTablaAdjuntarDocumentos)
		    },
		    { 	name: "thnofile",
		    	index: "thnofile",
		    	formatter: y41bFunctionFormateadorLink,
		    	width: funcPercentage(26,y41bVarWidthTablaAdjuntarDocumentos)
		    },
		    { 	name: "thfecha", 
		    	index: "thfecha",
		    	align: "center",
		    	align: "center",
		    	width: funcPercentage(10,y41bVarWidthTablaAdjuntarDocumentos)
		    },
		    { 	name: "thiddocumentum", 
		    	index: "thiddocumentum",
		    	align: "center",
		    	sortable: false,
		    	width: funcPercentage(10,y41bVarWidthTablaAdjuntarDocumentos),
		    	formatter: formateadorInfo
		    },
		    { 	name: "borrar", 
		    	index: "borrar",
		    	align: "center",
		    	sortable:false,
		    	formatter: y41bFunctionFormateadorPapelera,
		    	width: funcPercentage(10,y41bVarWidthTablaAdjuntarDocumentos) 
		    }		    
		]
	});
}



function y41bFunctionEliminarFilaTablaDocs(codigo){
	
	var urlEliminar = "/y41bVistaWar/"+nombreController+"/eliminarDocsTramite/" + codigo;
	
	$.rup_messages("msgConfirm",{
		   title:$.rup.i18n.app.msg.confirmacion,
		   message: $.rup.i18n.app.msg.confiramacioneliminar,
		   OKFunction : function () {
			   var jqxhr = $.ajax({
					type : 'DELETE',
					url : urlEliminar,
					error: function (jqXHR, textStatus, errorThrown){
						switch(jqXHR.status){		
							case 406:
								$("#"+nombreFeedBack).rup_feedback("option", "delay",null);
								$("#"+nombreFeedBack).rup_feedback("set",jqXHR.responseText, "error");
								break;
							case 409:
								controlY41bUDAException(jqXHR, nombreFeedBack);
								waitDialogStopIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
								break;									
							default:
								$("#"+nombreFeedBack).rup_feedback("option", "delay",null);
								$("#"+nombreFeedBack).rup_feedback("set",$.rup.i18n.app.msg.errorModifDatos, "error");
								break;
						}
					},
					success : function(data) {
								$("#"+nombreFeedBack).rup_feedback("option", "delay",800);
								$("#"+nombreFeedBack).rup_feedback("set", $.rup.i18n.app.msg.okModifDatos, "ok");
								// FORMCHANGED Ini
								y41bVar_FormChangedPopup = true;
								// FORMCHANGED Fin
								y41bFunctionReloadTablaDocs();
								
								// Ocultamos todos los tooltip ya que a veces el de la papelera de borrado visible
								$(".ui-tooltip").hide();
					}
				});
			}
	   });
}

function y41bFunctionFormateadorLink(cellvalue, options, rowObject) {
    return "<a href=/y41bVistaWar/"+nombreController+"/findDoc/"+ rowObject.thcodocumento+">" + cellvalue + "</a>";
}

function y41bFunctionFormateadorPapelera(cellvalue, options, rowObject) {
    return '<img src="'+$.rup.APP_STATICS+'/images/y41b-basura.png" id="'+nombreEmpieceBotones+'"BorrarDoc' + rowObject.thcodocumento + '" onclick="y41bFunctionEliminarFilaTablaDocs(\''+rowObject.thcodocumento+'\')" style="cursor: pointer;" class="y41b-cuboBasura"  />';
}

function y41bFunctionFormateadorPendienteFirma(cellvalue, options, rowObject) {
	if(rowObject.thestadodocumento=="P"){
		return '<img src="'+$.rup.APP_STATICS+'/images/y41b-editar.png" title="'+$.rup.i18n.app.y41bEstadoTramite.pendientefirma+'" alt="'+$.rup.i18n.app.y41bEstadoTramite.pendientefirma+'" width="16" height="16">';
	}else if(rowObject.thestadodocumento=="F"){
		return '<img src="'+$.rup.APP_STATICS+'/images/y41b-firmado.png" title="'+$.rup.i18n.app.y41bEstadoTramite.firmado+'" alt="'+$.rup.i18n.app.y41bEstadoTramite.firmado+'" width="16" height="16">';
	}else if(rowObject.thestadodocumento=="I"){
		return '<img src="'+$.rup.APP_STATICS+'/images/y41b-pendientelocalizacion.png"  title="'+$.rup.i18n.app.y41bEstadoTramite.pendientelocalizacion+'" alt="'+$.rup.i18n.app.y41bEstadoTramite.pendientelocalizacion+'" width="16" height="16">';
	}else if(rowObject.thestadodocumento=="L"){
		return '<img src="'+$.rup.APP_STATICS+'/images/y41b-localizado.png"  title="'+$.rup.i18n.app.y41bEstadoTramite.localizado+'" alt="'+$.rup.i18n.app.y41bEstadoTramite.localizado+'" width="16" height="16">';
	}else if(rowObject.thestadodocumento=="D"){
		return '<img src="'+$.rup.APP_STATICS+'/images/y41b-denegacionfirmado.png"  title="'+$.rup.i18n.app.y41bEstadoTramite.firmadenegada+'" alt="'+$.rup.i18n.app.y41bEstadoTramite.firmadenegada+'" width="16" height="16">';
	}else if(rowObject.thestadodocumento=="R"){
		return '<img src="'+$.rup.APP_STATICS+'/images/y41b-errorlocalizacion.png"  title="'+$.rup.i18n.app.y41bEstadoTramite.errorlocalizacion+'" alt="'+$.rup.i18n.app.y41bEstadoTramite.errorlocalizacion+'" width="16" height="16">';
	}else{
		return '';
	}
}

function formateadorInfo(cellvalue, options, rowObject) {
	if (typeof cellvalue == 'undefined' || cellvalue == null || cellvalue == '') {
	    return '<img src="'+$.rup.APP_STATICS+'/images/y41b-info.png" id="y41bDetalleDoc' + rowObject.thcodocumento + '" onclick="showModalRegistroDetalleAdjuntarDocumento(\''+rowObject.thcodocumento+'\', \''+rowObject.thidTramite+'\')" style="cursor: pointer;width:17px;height:17px" />';
	} else {
		return '';
	}
}

function showModalRegistroDetalleAdjuntarDocumento(thcodocumento, thidTramite) {
	$("#" + nombreEmpieceBotones + "ModalAdjuntarDocumento").rup_dialog("destroy");
	// Copiamos el formulario de Adjuntar documento y lo pegamos en una modal.
	$("#" + nombreEmpieceBotones + "ModalAdjuntarDocumento").html("<div id=\"" + nombreEmpieceBotones + "TablaDocumentosFeedback\"></div>");
	$("#" + nombreDiv + " #" + nombreEmpieceBotones + "Fileupload_form").clone().appendTo( '#' + nombreEmpieceBotones + 'ModalAdjuntarDocumento' );
	
	// Eliminamos el combobox.
	$('#' + nombreEmpieceBotones + 'ModalAdjuntarDocumento [id^="' + nombreEmpieceBotones + '"]').each(function() {
		var id = $(this).attr('id');
		if (id.endsWith("-button")) {
			$(this).remove();
		}
	});
	
	// Cambiamos los ids de todos los elementos del formulario copiado.
	$('#' + nombreEmpieceBotones + 'ModalAdjuntarDocumento [id^="' + nombreEmpieceBotones + '"]').each(function() {
	    var $this = $(this);
		var viejoId = $this.attr('id');
		var nuevoId = viejoId.replace(nombreEmpieceBotones, nombreEmpieceBotones + 'Detalle');
		$this.attr('id', nuevoId);
	});
	
	// Modificamos el formulario clonado con las opciones que queremos.
	$("#" + nombreEmpieceBotones + "DetalleDivPlantilla").hide();
	$("#" + nombreEmpieceBotones + "DetalleDocumentoObligatorio").hide();
	$("#" + nombreEmpieceBotones + "DetalleDocumentosAnyadir").html($.rup.i18n.app.comun.grabar);
	$("#" + nombreEmpieceBotones + "DetalleDocumentosCancelar").show();
	$("#" + nombreEmpieceBotones + "DetalleDocumento").show();
	$("#" + nombreEmpieceBotones + "DetalleDocumentosForm").attr('action', '/y41bVistaWar/adjuntardocs/actualizardoc');
	$("#" + nombreEmpieceBotones + "DetalleDocumentosForm").attr('method', 'POST');
	$("#" + nombreEmpieceBotones + "DetalleFileupload_form").show();
	
	
	// Cargamos los eventos de la modal.
	showModalRegistroDetalleAdjuntarDocumento_asignarEventos();
	
	// Cargamos los datos de la modal.
	waitDialogInitIdazki(nombreEmpieceBotones + "ModalAdjuntarDocumentoCapaCargando");
	waitDialogIdazki(nombreEmpieceBotones + "ModalAdjuntarDocumentoCapaCargando");
	showModalRegistroDetalleAdjuntarDocumento_cargarDatos(thcodocumento, thidTramite);
	
	// Mostramos la modal.
	$("#" + nombreEmpieceBotones + "ModalAdjuntarDocumento").rup_dialog({
		modal: true,
		autoOpen: true,
		width: "900",
		height: "auto",
		title: $.rup.i18n.app.y41bTablaAdjuntarDocumentos.modalAdjuntarDocumentoDetalle,
		type: $.rup.dialog.DIV,
		// FORMCHANGED Ini
		beforeclose: function() {
			if (y41bVar_FormChangedMaestros) {
				$.rup_messages("msgConfirm", {
					title: $.rup.i18n.app.comun.confirmacion,
					message: $.rup.i18n.app.msg.confirmacionperdidadatos,
					OKFunction: function () {
						y41bVar_FormChangedMaestros = false;
						$("#" + nombreEmpieceBotones + "ModalAdjuntarDocumento").rup_dialog("close");
						$("#"+nombreEmpieceBotones+"ModalAdjuntarDocumento").html("");
					}
				});
				y41bVar_Maestros = false;
				return false;
			} else {
				$("#"+nombreEmpieceBotones+"ModalAdjuntarDocumento").html("");
				y41bVar_Maestros = false;
				return true;
			}
		}
		// FORMCHANGED Fin
	});
}

function showModalRegistroDetalleAdjuntarDocumento_cargarDatos(thcodocumento, thidTramite) {
	$.ajax({
		type: "GET",
		url: "/y41bVistaWar/adjuntardocs/adjuntarDocumento/" + thcodocumento + "/" + thidTramite,
		dataType: "json",
		error: function(jqXHR, textStatus, errorThrown) {
			$("#" + nombreEmpieceBotones + "TablaDocumentosFeedback").rup_feedback("option", "delay", 800);
			$("#" + nombreEmpieceBotones + "TablaDocumentosFeedback").rup_feedback("set", $.rup.i18n.app.msg.errorModifDatos, "alert");
			waitDialogStopIdazki(nombreEmpieceBotones + "ModalAdjuntarDocumentoCapaCargando");
		},
		success: function(data, textStatus, jqXHR) {
			$("#" + nombreEmpieceBotones + "DetalleCoDocumento").val(data.thcodocumento);
			$("#" + nombreEmpieceBotones + "DetalleIdTramite").val(data.thidTramite);
			$("#" + nombreEmpieceBotones + "DetalleNombreDocumento").val(data.thtedesfile);
			$("#" + nombreEmpieceBotones + "DetalleNombreDocumento").val(data.thtedesfile);
			
			if (document.getElementById(nombreEmpieceBotones + "DetalleNombreDocumento") !== null) {
				$("#" + nombreEmpieceBotones + "DetalleNombreDocumento").val(data.thtedesfile);
			}
			
			if (document.getElementById(nombreEmpieceBotones + "DetalleComboDestinatario") !== null ) {
				if ((typeof codProcedimiento !== 'undefined' && codProcedimiento == 'ARB') ||
					(typeof idProcedimiento !== 'undefined' && idProcedimiento == 'ARB')) {
					listComboDestinatario = new Array();		
					listComboDestinatario[0]= {i18nCaption: "reclamante", value:cte_RECLAMANTE};
					listComboDestinatario[1]= {i18nCaption: "reclamado", value:cte_RECLAMADO};
					listComboDestinatario[2]= {i18nCaption: "otros", value:cte_OTROS};
					listComboDestinatario[3]= {i18nCaption: "todos", value:cte_TODOS};
					if(data.thdestino==null ||data.thdestino==""){
						data.thdestino=cte_TODOS;
					}
					y41bVarDestinatarioTramite=true;
				}	
								
				y41bFunctionPintarComboDestinatario(data.thdestino, listComboDestinatario, nombreEmpieceBotones + "Detalle");
			}
			
			if (document.getElementById(nombreEmpieceBotones + "DetalleComboTipoDocumento") !== null ) {
				y41bFunctionPintarComboTipoDocumentoDetalle(data.tipoDocumento.idTipodoc);
			}
			
			if (document.getElementById(nombreEmpieceBotones + "DetalleRequiereFirma") !== null && data.threquierefirma !== null && data.threquierefirma == "S") {
				$("#" + nombreEmpieceBotones + "DetalleRequiereFirma").prop("checked", true);
			} else {
				$("#" + nombreEmpieceBotones + "DetalleRequiereFirma").prop("checked", false);
			}
			
			if (document.getElementById(nombreEmpieceBotones + "DetalleRequiereFirma")) {
				y41bFunctionRecargarUpload(nombreEmpieceBotones + "Detalle");
				
				if($("#" + nombreEmpieceBotones + "DetalleRequiereFirma").is(":checked")) {
			    	$("#" + nombreEmpieceBotones + "DetalleRequiereFirma").attr("checked", true);
			    	$("#" + nombreEmpieceBotones + "DetalleRol").show();
			    } else {
			    	$("#" + nombreEmpieceBotones + "DetalleRequiereFirma").attr("checked", false);
			    	$("#" + nombreEmpieceBotones + "DetalleRol").hide();
			    }
			}
			
			if (document.getElementById(nombreEmpieceBotones + "DetalleComboRol") !== null) {
				if (data.perfil !== null && data.perfil.idPerfil !== "") {
					y41bFunctionPintarComboRol(data.perfil.idPerfil, nombreEmpieceBotones + "Detalle");
				} else {
					y41bFunctionPintarComboRol("", nombreEmpieceBotones + "Detalle");
				}
			}

			y41bFunctionRecargarAjaxForm(nombreEmpieceBotones + "Detalle");
			waitDialogStopIdazki(nombreEmpieceBotones + "ModalAdjuntarDocumentoCapaCargando");
			
			//FORMCHANGED ini
			y41bVar_Maestros = true;
			y41bVar_FormChangedMaestros = false;
			y41b_FunFormChangedMaestros();
			//FORMCHANGED fin
		}
	});
}

function showModalRegistroDetalleAdjuntarDocumento_asignarEventos() {
	//Feedback
	$("#" + nombreEmpieceBotones + "DetalleTablaDocumentosFeedback").rup_feedback({
		gotoTop : false,
		block : false,
		closeLink : true
	});

	$("#" + nombreEmpieceBotones + "DetalleRequiereFirma").click(function() {
		y41bFunctionRequiereFirma(nombreEmpieceBotones + "Detalle");
	});
	
	// Evento del boton anyadir/grabar.
	$("#" + nombreEmpieceBotones + "DetalleDocumentosAnyadir").click(function() {
		y41bFunctionAnyadirDocumento(nombreEmpieceBotones + "Detalle");
	});
	
	// Evento del boton cancelar.
	$("#" + nombreEmpieceBotones + "DetalleDocumentosCancelar").click(function() {
		$("#" + nombreEmpieceBotones + "ModalAdjuntarDocumento").rup_dialog("close");
	});
}

//Metodos de la Modal AdjuntarDocsTramite Ini
function y41bFunctionAdjuntarDocumentos(){
	waitDialog();
	$("#y41bModalAdjuntarDocsTramiteDiv").rup_dialog("destroy");
	$("#y41bModalAdjuntarDocsTramiteDiv").rup_dialog({
		position: "center",
		modal: true,
		autoOpen: true,
		width: "880",
		height: "auto",
		title: $.rup.i18n.app.y41bVistaWar_tramitecomunicacion.modaladjuntardocs,
		url: "/y41bVistaWar/adjuntardocstramite/maint/"+idProcedimiento+"/"+idExpediente+"/"+idTramite,
		type:$.rup.dialog.AJAX,
		close: function(event, ui) {
		}
	});
}

function y41bFunctionActualizarTablaAdjuntarDocsTramite(documentosExpediente){
	var datosAdjuntarDocsTramite = y41bFunctionSerializeAdjuntarDocsTramite(documentosExpediente);
	// En este caso no se usa el componente de Idazki para "Cargando" ya que da problemas con el dialog
	// Se superpone el dialog a la capa
	waitDialogIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
	var jqxhr = $.ajax({
		type : "POST",
		url : "/y41bVistaWar/"+nombreController+"/adjuntarDocsTramite",
		dataType : "json",
		data : JSON.stringify(datosAdjuntarDocsTramite),
		contentType : 'application/json',
		error: function (jqXHR, textStatus, errorThrown){
			switch(jqXHR.status){	
				case 406:
					$("#"+nombreFeedBack).rup_feedback("option", "delay",1000);
					$("#"+nombreFeedBack).rup_feedback("set",jqXHR.responseText, "error");
					waitDialogStopIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
					break;
				case 409:
					controlY41bUDAException(jqXHR, "y41bAdjuntarDocsTramiteFeedback");
					waitDialogStopIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
					break;								
				default:
					$("#"+nombreFeedBack).rup_feedback("option", "delay", 1000);
					$("#"+nombreFeedBack).rup_feedback("set",$.rup.i18n.app.msg.errorModifDatos, "error");
					waitDialogStopIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
					break;
			}
		},
		success : function(data) {
					$("#"+nombreFeedBack).rup_feedback("option", "delay",1000);
					$("#"+nombreFeedBack).rup_feedback("set", $.rup.i18n.app.comun.datosEnviadosTramite, "ok");
					$("#y41bModalAdjuntarDocsTramiteDiv").rup_dialog("close");
					// FORMCHANGED Ini
					y41bVar_FormChangedPopup = true;
					// FORMCHANGED Fin
					y41bFunctionReloadTablaDocs();

					waitDialogStopIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
		}
	});
}

function y41bFunctionSerializeAdjuntarDocsTramite(documentosExpediente){
	var tramite = new Object();
	tramite.documentosExpediente = documentosExpediente;
	return tramite;
}


function y41bFunctionRequiereFirma(prefijoCtrl) {
	if (typeof prefijoCtrl === "undefined")
		prefijoCtrl = nombreEmpieceBotones;
	
	if($("#"+prefijoCtrl+"RequiereFirma").is(':checked')) {
    	$("#"+prefijoCtrl+"RequiereFirma").attr('checked', true);
    	$("#"+prefijoCtrl+"Rol").css("display", "block");
    	$("#"+prefijoCtrl+"ComboRol").rup_combo("setRupValue",rolFirma);
    } else {
    	$("#"+prefijoCtrl+"RequiereFirma").attr('checked', false);
    	$("#"+prefijoCtrl+"Rol").css("display", "none");
    	$("#"+prefijoCtrl+"ComboRol").rup_combo("setRupValue","");
    }
}

function y41bFunctionPintarComboRol(rol, prefijoCtrl) {
	if (typeof prefijoCtrl === "undefined")
		prefijoCtrl = nombreEmpieceBotones;
	
	$("#"+prefijoCtrl+"ComboRol").rup_combo("destroy");
	$("#"+prefijoCtrl+"ComboRol").rup_combo({
		blank : "",
		width: "250",
		source : "/y41bVistaWar/perfil/conExpedientes",
		sourceParam : {
			label : "nombre"  + recuperarLetraIdiomaOrganismos(),
			value : "idPerfil"
		},
		onLoadSuccess: function() {
			y41bVar_FormChangedMaestros = false;
		}
	});
	if (rol!=null && rol!=""){
		$("#"+prefijoCtrl+"ComboRol").rup_combo("setRupValue",rol);		
	}else{
		$("#"+prefijoCtrl+"ComboRol").rup_combo("select","");
	}
	
	if($("#"+prefijoCtrl+"RequiereFirma")!=null && $("#"+prefijoCtrl+"RequiereFirma").is(':checked')) {  
    	$("#"+prefijoCtrl+"Rol").css("display", "block");    	
    } else {  
    	$("#"+prefijoCtrl+"Rol").css("display", "none");
    }
}

/* Combo tipo decision */
function y41bFunctionPintarComboTipoDecisionAlta(tipodecision){
	$("#"+nombreEmpieceBotones+"ComboTipoDecision").rup_combo("destroy");
	$("#"+nombreEmpieceBotones+"ComboTipoDecision").rup_combo({
		blank : "",
		source : "/y41bVistaWar/"+nombreController+"/finddecisionalta",
		width:"390",
		sourceParam : {
			label : "denombre"  + recuperarLetraIdioma(),
			value : "decodigo"
		},
		select:function(){
			y41bFunctionPintarComboPlantillaDecision($("#"+nombreEmpieceBotones+"ComboTipoDecision").val());
			y41bFunction_PintarContenidoEspecificoTipoDecision();
		},
		onLoadSuccess: function(){
			y41bFunctionPintarComboPlantillaDecision($("#"+nombreEmpieceBotones+"ComboTipoDecision").val());
			
			y41bFunction_PintarContenidoEspecificoTipoDecision();
		}
	});	
	if (tipodecision!="" && tipodecision!=null){
		$("#"+nombreEmpieceBotones+"ComboTipoDecision").rup_combo("setRupValue",tipodecision);
	}else{
		$("#"+nombreEmpieceBotones+"ComboTipoDecision").rup_combo("select", "");
	}
}

/* Combo tipo decision */
function y41bFunctionPintarComboTipoDecisionModificacion(tipodecision){
	$("#"+nombreEmpieceBotones+"ComboTipoDecision").rup_combo("destroy");
	$("#"+nombreEmpieceBotones+"ComboTipoDecision").rup_combo({
		blank : "",
		source : "/y41bVistaWar/"+nombreController+"/finddecisionmodificacion",
		width:"390",
		sourceParam : {
			label : "denombre"  + recuperarLetraIdioma(),
			value : "decodigo"
		},
		select:function(){
			y41bFunctionPintarComboPlantillaDecision($("#"+nombreEmpieceBotones+"ComboTipoDecision").val());
			y41bFunction_PintarContenidoEspecificoTipoDecision();
			
		},
		onLoadSuccess: function(){
			y41bFunctionPintarComboPlantillaDecision($("#"+nombreEmpieceBotones+"ComboTipoDecision").val());
			
			y41bFunction_PintarContenidoEspecificoTipoDecision();
		}	
	});	
	if (tipodecision!="" && tipodecision!=null){
		$("#"+nombreEmpieceBotones+"ComboTipoDecision").rup_combo("setRupValue",tipodecision);
	}else{
		$("#"+nombreEmpieceBotones+"ComboTipoDecision").rup_combo("select", "");
	}
}

function y41bFunction_PintarContenidoEspecificoTipoDecision(){
	var tipoDecisionSeleccionada = $("#"+nombreEmpieceBotones+"ComboTipoDecision").val();

	//inhibicion otros
	if (tipoDecisionSeleccionada == cteDecisionInhibicionOtrosDenuncia 				//KB-1
			||	tipoDecisionSeleccionada == cteDecisionInhibicionOtrosQueja 		//KB-2
			||  tipoDecisionSeleccionada == cteDecisionInhibicionOtrosReclamacion){ //KB-3
			y41bVarModalOrganismos = "y41bTramiteRegistroDecisionInhibicion";
		//visualizar capa organismo
			$("#y41bTramiteRegistroDecision_DivOrganismo").show();
			$("#y41bTramiteRegistroDecision_DivTablaReqNorm").hide();
	}else 
	//no avenencia propuesta sancion
	if (tipoDecisionSeleccionada == cteDecisionPropuestaSancionDenuncia 			//KF-1
			||	tipoDecisionSeleccionada == cteDecisionPropuestaSancionQueja		//KF-2
			||  tipoDecisionSeleccionada == cteDecisionPropuestaSancionReclamacion){//KF-3
		//visualizar capa tabla
		$("#y41bTramiteRegistroDecision_DivTablaReqNorm").show();
		$("#y41bTramiteRegistroDecision_DivOrganismo").hide();
		
		$("#y41bTramiteRegistroDecision_TablaInfracciones").jqGrid('GridUnload');
		y41bTramiteRegistroDecision_PintarTablaInfracciones();
	}
	//traslado
	else if (tipoDecisionSeleccionada == cteDecisionTrasladoDenuncia 				//KL-1
			||	tipoDecisionSeleccionada == cteDecisionTrasladoQueja				//KL-2
			||  tipoDecisionSeleccionada == cteDecisionTrasladoReclamacion			//KL-3
	){
		y41bVarModalOrganismos = "y41bTramiteRegistroDecisionTraslado";
		//visualizar capa organismo
		$("#y41bTramiteRegistroDecision_DivOrganismo").show();
		$("#y41bTramiteRegistroDecision_DivTablaReqNorm").hide();
	}
	// InspeccionesTraslado
	else if (tipoDecisionSeleccionada == cteDecisionInspeccionesTraslado ){					//IN1
		y41bVarModalOrganismos = "y41bTramiteRegistroDecisionTraslado";
		$("#y41bTramiteRegistroDecision_DivActa").show();
		$("#y41bTramiteRegistroDecision_DivOrganismo").show();
		$("#y41bTramiteRegistroDecision_DivTablaReqNorm").hide();
	}		
	// InspeccionesSinInfraccion
	else if (tipoDecisionSeleccionada == cteDecisionInspeccionesSinInfraccion ){			//IN2
		$("#y41bTramiteRegistroDecision_DivActa").hide();
		$("#y41bTramiteRegistroDecision_DivOrganismo").hide();
		$("#y41bTramiteRegistroDecision_DivTablaReqNorm").hide();
	}		
	// InspeccionesConApercibimiento
	else if ( tipoDecisionSeleccionada == cteDecisionInspeccionesConApercibimiento){		//IN4
		//visualizar capa tabla
		$("#y41bTramiteRegistroDecision_DivActa").show();
		$("#y41bTramiteRegistroDecision_DivTablaReqNorm").hide();
		$("#y41bTramiteRegistroDecision_DivOrganismo").hide();
	}
	// InspeccionesConPropuestaSancion
	else if (tipoDecisionSeleccionada == cteDecisionInspeccionesConPropuestaSancion	){		//IN5

		$("#y41bTramiteRegistroDecision_DivActa").hide();
		//visualizar capa tabla
		$("#y41bTramiteRegistroDecision_DivTablaReqNorm").show();
		$("#y41bTramiteRegistroDecision_DivOrganismo").hide();
		
		$("#y41bTramiteRegistroDecision_TablaInfracciones").jqGrid('GridUnload');
		y41bTramiteRegistroDecision_PintarTablaInfracciones();
	}else{
		$("#y41bTramiteRegistroDecision_DivOrganismo").hide();
		$("#y41bTramiteRegistroDecision_DivTablaReqNorm").hide();
		$("#y41bTramiteRegistroDecision_DivActa").hide();
	}	
}

function  y41bFunctionCargarDatosCabecera(data){
	$("#"+nombreEmpieceBotones+"FechaInicio").val(data.fechaInicio);
	$("#"+nombreEmpieceBotones+"FechaFin").val(data.fechaFin);			
	$("#"+nombreEmpieceBotones+"InstructorAsignado").val(data.instructorAsignado.monombre);
	$("#"+nombreEmpieceBotones+"MocodigoInstructorAsignado").val(data.instructorAsignado.mocodigo);			
	$("#"+nombreEmpieceBotones+"InstructorEjecucion").val(data.instructorEjecucion.monombre);
	$("#"+nombreEmpieceBotones+"MocodigoInstructorEjecucion").val(data.instructorEjecucion.mocodigo);			
	$("#"+nombreEmpieceBotones+"Comentario").val(data.comentario);
	$("#"+nombreEmpieceBotones+"Accodigo").val(data.accodigo);
}


function y41bFunctionPintarComboDestinatario(destinatario, list, prefijoCtrl) {
	if (typeof prefijoCtrl === "undefined")
		prefijoCtrl = nombreEmpieceBotones;
	
	//Transformo en JSON la lista
	$.toJSON(list);	
	$("#" + prefijoCtrl + "ComboDestinatario").rup_combo({
		blank: "",
		source: list,
		width:"250",
		blank: "",
		select: function() {
			if (prefijoCtrl.indexOf("y41bTramiteRegistroDecision") != -1) {
				$("#" + prefijoCtrl + "ComboRol").rup_combo("setRupValue", "");
				$("#" + prefijoCtrl + "RequiereFirma").attr("checked", true);
		    	$("#" + prefijoCtrl + "Rol").css("display", "block");
			}
		}
	});
	
	if (destinatario != null && destinatario != ""){
		$("#" + prefijoCtrl + "ComboDestinatario").rup_combo("setRupValue", destinatario);		
	}else{
		$("#" + prefijoCtrl + "ComboDestinatario").rup_combo("select", "");
	}
}

function y41bFunctionINSActualizarTablaAdjuntarDocsTramite(documentosExpediente){
	var datosAdjuntarDocsTramite = y41bFunctionINSSerializeAdjuntarDocsTramite(documentosExpediente);
	// En este caso no se usa el componente de Idazki para "Cargando" ya que da problemas con el dialog
	// Se superpone el dialog a la capa
	waitDialogIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
	var jqxhr = $.ajax({
		type: "POST",
		url: "/y41bVistaWar/"+nombreController+"/adjuntarDocsTramite",
		dataType: "json",
		data: JSON.stringify(datosAdjuntarDocsTramite),
		contentType: 'application/json',
		error: function (jqXHR, textStatus, errorThrown){
			switch(jqXHR.status){	
				case 406:
					$("#"+nombreFeedBack).rup_feedback("option", "delay",1000);
					$("#"+nombreFeedBack).rup_feedback("set",jqXHR.responseText, "error");
					waitDialogStopIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
					break;
				case 409:
					controlY41bUDAException(jqXHR, "y41bAdjuntarDocsTramiteFeedback");
					waitDialogStopIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
					break;								
				default:
					$("#"+nombreFeedBack).rup_feedback("option", "delay", 1000);
					$("#"+nombreFeedBack).rup_feedback("set",$.rup.i18n.app.msg.errorModifDatos, "error");
					waitDialogStopIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
					break;
			}
		},
		success: function(data) {
			$("#"+nombreFeedBack).rup_feedback("option", "delay",1000);
			$("#"+nombreFeedBack).rup_feedback("set", $.rup.i18n.app.comun.datosEnviadosTramite, "ok");
			$("#y41bModalAdjuntarDocsTramiteDiv").rup_dialog("close");
			// FORMCHANGED Ini
			y41bVar_FormChangedPopup = true;
			// FORMCHANGED Fin
			y41bFunctionINSReloadTablaDocs();
			waitDialogStopIdazki(nombreEmpieceBotones+"CapaCargandoIdazki");
		}
	});
}

function y41bFunctionINSSerializeAdjuntarDocsTramite(documentosExpediente) {
	var tramiteINS = new Object();
	tramiteINS.documentosExpediente = documentosExpediente;
	return tramiteINS;
}

function  y41bFunctionINSReloadTablaDocs() {
	$("#"+nombreEmpieceBotones+"Documentos").rup_grid("clearGridData");
	$("#"+nombreEmpieceBotones+"Documentos").rup_grid("setGridParam", {url : "/y41bVistaWar/"+nombreController+"/findAllDocsTramite"});
	$("#"+nombreEmpieceBotones+"Documentos").rup_grid("reloadGrid");
}


/* Combo tipo documento */
function y41bFunctionResetearComboTipoDocumento(){
	$("#"+nombreEmpieceBotones+"ComboTipoDocumento-button").remove();
	$("#"+nombreEmpieceBotones+"ComboTipoDocumento-menu").remove();
	$('<select id="'+nombreEmpieceBotones+'ComboTipoDocumento" name="idTipodoc"></select>').replaceAll("#"+nombreEmpieceBotones+"ComboTipoDocumento");
}

function y41bFunctionPintarComboTipoDocumento(){
	y41bFunctionResetearComboTipoDocumento();
	
	$("#" + nombreEmpieceBotones + "ComboTipoDocumento").rup_combo({
		blank : "",
		source : "/y41bVistaWar/"+nombreController+"/findAllTipoDocumento",
		width:"255",
		sourceParam : {
			label : "tdnombre"  + recuperarLetraIdioma(),
			value : "idTipodoc"
		}
	});	
}

/* Combo tipo documento */
function y41bFunctionResetearComboTipoDocumentoDetalle(){
	$("#"+nombreEmpieceBotones+"DetalleComboTipoDocumento-button").remove();
	$("#"+nombreEmpieceBotones+"DetalleComboTipoDocumento-menu").remove();
	$('<select id="'+nombreEmpieceBotones+'DetalleComboTipoDocumento" name="idTipodoc"></select>').replaceAll("#"+nombreEmpieceBotones+"DetalleComboTipoDocumento");
}

function y41bFunctionPintarComboTipoDocumentoDetalle(idTipodoc){
	y41bFunctionResetearComboTipoDocumentoDetalle();
	
	$("#" + nombreEmpieceBotones + "DetalleComboTipoDocumento").rup_combo({
		blank : "",
		source : "/y41bVistaWar/"+nombreController+"/findAllTipoDocumento",
		width:"255",
		sourceParam : {
			label : "tdnombre"  + recuperarLetraIdioma(),
			value : "idTipodoc"
		}
	});	
	
	if (idTipodoc!=null && idTipodoc!=""){
		$("#"+nombreEmpieceBotones+"DetalleComboTipoDocumento").rup_combo("setRupValue",idTipodoc);		
	}else{
		$("#"+nombreEmpieceBotones+"DetalleComboTipoDocumento").rup_combo("select","");
	}
}
