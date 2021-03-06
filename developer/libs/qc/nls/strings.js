﻿define({
    root: {
        prompt: "Prompt",
        patient: "Patient",
        sources: "Sources",
        orders: "Orders",
        favorites: "Favorites",
        search: "Search",
        browse: "Browse",
        view: "View",
        tools: "Tools",
        currentencounter: "Current Encounter",
        small: "Small",
        medium: "Medium",
        large: "Large",
        dxprompt: "DX Prompt",
        nursingprompt: "Nursing Prompt",
        fuprompt: 'Follow Up Prompt',
        concise: "Concise",
        expanded: "Entry",
        outline: "Outline",
        design: "Design",
        flowsheet: "Flowsheet",
        details: "Details",
        duplicate: "Duplicate",
        order: "Order",
        addtofavorites: "Add to Favorites",
        //delete: "Delete", //'delete' may be a reserved word disrupting the build process
        deleteItem: "Delete",
        addtonote: "Add to Note",
        merge: "Merge",
        otherwisenormal: "Otherwise Normal",
        undootherwisenormal: "Undo Otherwise Normal",
        clearnonentered: "Clear Non-Entered Findings",
        clearall: "Clear All Findings",
        addfreetext: "Add Free Text",
        none: "None",
        bulletsbefore: "Bullets Before",
        semicolonsafter: "Semicolons After",
        contentlibrarymanager: "Content Library Manager",
        emcalculator: "E&M Calculator",
        account: "Account",
        options: "Options",
        adminconsole: "Admin Console",
        medcinviewer: "Medcin Viewer",
        webservicetester: "Web Service Tester",
        quippeusersguide: "Quippe User's Guide",
        newencounter: "New Encounter",
        openencounter: "Open Encounter",
        savedraft: "Save Draft",
        savefinalnote: "Save Final Note",
        saveencounter: "Save Encounter",
        printableview: "Printable View",
        logoff: "Log Off",
        applicationmenu: "Application Menu",
        deletefreetext: "Delete Free Text",
        //es-ES done up to here
        phrasing: "Phrasing",
        emanalysis: "E&M Analysis",
        orderprocessor: "Order Processor",
        mergeprompt: "Merge Prompt",
        concepts: "Concepts",
        samplecustomcontent: "Sample Custom Content",
        more: "More",
        loading: "Loading",
        //menuitem: "Menu Item",
        contentlibrary: "Content Library",
        personalcontent: "Personal Content",
        years: "Years",//DateUtil still needs work
        months: "Months",
        weeks: "Weeks",
        day: "Day",
        uploadcontent: "Upload Content",//not working
        savecontent: "Save Content",
        aboutquippe: "About Quippe",
        hpi: "HPI",
        embrief: "Brief",
        emextended: "Extended",
        empertinent: "Pertinent",
        emcomplete: "Complete",
        emdetailed: "Detailed",
        emcomprehensive: "Comprehensive",
        emstraight: "Straight",
        emlow: "Low",
        emmoderate: "Moderate",
        emhigh: "High",
        emminimal: "Minimal",
        emlimited: "Limited",
        emmultiple: "Multiple",
        emextensive: "Extensive",
        emfocused: "Focused",
        emexpanded: "Expanded",
        yes: 'Yes',
        no: 'No',
        confirmdeletedialogtitle: 'Confirm Delete',
        confirmdeletecontentfolder: 'Are you sure you want to delete the folder "{0}" and all of its contents?',
        confirmdeletecontentitem: 'Are you sure you want to delete the item "{0}"?',

        //Finding details tab
        prefix: "Prefix",
        modifier: "Modifier",
        status: "Status",
        value: "Value",
        unit: "Unit",
        note: "Note",
        onset: "Onset",
        duration: "Duration",
        episodes: "Episodes",
        overridetext: "Override text",
        result: "Result",

        //Finding phrasing tab
        positive: "Positive",
        negative: "Negative",
        independent: "Independent",
        dependent: "Dependent",
        useasdefault: "Use as default",
        addnewphrasing: "Add New Phrasing",
        savechanges: "Save Changes",
        deletephrasing: "Delete",

        //Content Save Dialog
        location: "Location",
        type: "Type",
        includeentrydetails: "Include entry details",
        includesectiongroupplacement: "Include section/group placement",
        makethismydefaulttemplate: "Make this my default template",
        list: "List",
        template: "Template",
        name: "Name",
        filename: "File Name",
        keywords: "Key Words",

        cmdOK: "OK",
        cmdCancel: "Cancel",
        cmdUpload: "Upload File",

        tbNewFolder: "New Folder",
        tbUpload: "Upload",
        tbDownload: "Download",
        tbRename: "Rename",
        tbDelete: "Delete",
        tbClose: "Close",

        nePatient: "Patient",
        neEncounterTime: "Encounter Time",
        neTemplate: "Template",
        oePatient: "Patient",
        oeEncounters: "Encounters",
        ppPrint: "Print",
        ppClose: "Close",

        uadFirstName: "First Name",
        uadLastName: "Last Name",
        uadEmail: "Email",
        uadOrganization: "Organization",
        uadAddress: "Address",
        uadCity: "City",
        uadState: "State",
        uadPostalCode: "Postal Code",
        uadCurrentPassword: "Current Password",
        uadNewPassword: "New Password",
        uadConfirm: "Confirm",
        uadAccount: "Account",
        uadContactInfo: "Contact Info",
        uadPassword: "Password",

        //Property Grid Tool Tips
        tooltipAddFindingsBy: "Specifies whether adding findings to table is done by row or column.",
        tooltipApplyPrefix: "Sets the specified prefix on any finding that is dropped in the Container if it does not have one and the applied prefix makes sense for that term type. Enter one Prefix Code.",
        tooltipAutoExpandBy: "Specifies whether to auto-expand the table by row or by column.",
        tooltipAutoPrompt: "Turns on auto-prompt so a prompt is automatically run with the selection of a finding; generated list is based on either physician or nurse content.",
        tooltipCellStyle: "Specifies a CSS style class to be applied to cells of the table.",
        tooltipCellValue: "Identifies the value stored in the table. Frequently used for the text label of a cell if the Entry Type is Label.",
        tooltipCheckStyle: "Sets the format for the checkboxes.",
        tooltipCheckedValue: "Determines the result if the finding when the single check box is selected. A: abnormal; N: normal.",
        tooltipColType: "Specifies whether the column will be used as a header, footer, or for containing data. Default setting is blank, meaning the column is used for data.",
        tooltipCols: "Specifies the number of columns in the table.",
        tooltipColumnStyle: "Specifies a CSS style class to be applied to columns of the table.",
        tooltipColumns: "Specifies the number of columns used to display findings within the container. Default  is 0. ",
        tooltipComponentSettings: "Configures advanced element property settings when the Custom Component option is selected.",
        tooltipComponents: "Sets the status of the components:  Custom: allows for advanced configuration of element properties related to styling, presentation and user interaction.  Inherited: uses default settings from the parent element.",
        tooltipConditionalStyles: "Allows for entry of conditional rules for styling an element. Rule must be a default (ex: hidden) or defined in the Document Styles.",
        tooltipDateCell: "Cell that sets the date reference for the time drop down",
        tooltipDocumentStyles: "Allows entry of CSS styling commands to create style classes to be used in the Document Template.",
        tooltipDuration: "Sets the Duration of the Finding. Enter 3w, 3 weeks, 3 weeks ago.",
        tooltipFreeTextEMLevel: "Pre-sets the detail level for the text in this box for use in calculating an E&M code.  Enter 1 for Brief, 2 for Extended", 
        tooltipEntryType: "Specifies the entry type for cells such as label, textbox, single check, double check, etc.",
        tooltipEpisode: "Allows free text to describe the episodic nature of the Finding. Enter a free text description.",
        tooltipFindingProperty: "Specifies the Finding Property such as text, result, onset, etc. of a finding that is bound to the table element.",
        tooltipFindingRange: "Applies the Finding Property of one table element to a range of other table elements. Ex. Onset Date is applied to multiple cells that contain findings. Enter the range as: B3:B5.",
        tooltipFindingRef: "Assigns a MEDCIN finding to the cell or group of cells.",
        tooltipForcePrefix: "Sets the prefix on any finding dropped in the Container regardless of whether or not the finding already has a prefix. Enter one Prefix Code.",
        tooltipFormat: "Sets the display format for numbers and date-time types.",
        tooltipFormula: "Specifies an expression using functions that evaluates to a T/F condition or value.",
        tooltipFreeTextMedcinId: "The unique MEDCIN identifier for the free text area of the container element.",
        tooltipGroupKeys: "Allows for the inclusion of findings in the Container based on their Group Id. Enter Group ids : G2901, G2902.",
        tooltipGroupingRule: "Allows for specific findings to be included in the Container. Enter any property of a finding - MEDCIN ids: medcinId==19513; prefix=='AL'.",
        tooltipHeading: "Specifies the label of the element that is displayed in the note.",
        tooltipHideLabel: "Shows or hides the text label of a cell.",
        tooltipImpliedPrefixes: "Alerts the transcriber that the meaning of a particular prefix code is already implied by the text of the section and should not be rendered on any finding that has that prefix. Enter one or more Prefix Codes.",
        tooltipLabel: "Sets the text label for the cell/s.",
        tooltipLevel: "Specifies the type of container and its hierarchical position within the template, i.e. Chapter, Section, or Group.",
        tooltipMedcinId: "Sets the unique identifier assigned to a finding by the MEDCIN Knowledge Base.",
        tooltipModifier: "Sets the Modifier for the Finding in this element. Enter one Modifier Code.",
        tooltipMultiline: "Allows for text to wrap and create multiple lines within the cell.",
        tooltipName: "Specifies the Name of the element that is used when referencing this element. Not required and must start with capital letter.",
        tooltipNavLink: "Specifies the text used for the navigation link (bookmark) at the bottom of the page for the element.",
        tooltipNote: "Allows for the appending of text to the end of a finding.",
        tooltipOnset: "Sets the Onset of a Finding. Enter 3d, 3 days, 3 days ago.",
        tooltipOptionGroup: "Defines a group of Findings where only one checkbox can be selected. Enter the same group number for the grouped Findings.",
        tooltipOverrideTranscription: "Sets the override status for the Finding text. True: uses custom text in the Text field; False: uses default MEDCIN text for the Finding.",
        tooltipPlaceAt: "Indicates where the element should be placed when merged. Enter a Group Key or Container Name.",
        tooltipPlaceFindings: "Specifies the placement order of findings within a container.",
        tooltipPosition: "Specifies where the content should be placed relative to the element Name specified in the Place At property – first or last: the first or last child of the selected element; before or after: a sibling either before or after the selected element; default is last.",
        tooltipPrefix: "Sets the Prefix for the Finding in this element. Enter one Prefix Code.",
        tooltipPropertyBindings: "Allows for manipulating element properties. Enter the property (result, value, …) and the associated formula to calculate the property.",
        tooltipProviderRole: "Communicates the audience for the element as well as the default prompt. Provider: Dx Prompt; Nurse: Nurse Prompt.",
        tooltipResult: "Sets the Result property of the Finding. When used in Entry mode, the Result will default to this state. Enter A: abnormal; N: normal.",
        tooltipResultSequence: "Specifies the visible states and the result sequence when clicking on the Finding.",
        tooltipRowStyle: "Specifies a CSS style class to be applied to rows of the table.",
        tooltipRowType: "Specifies whether the row will be used as a header, footer, or for containing data. Default setting is blank, meaning the row is used for data.",
        tooltipRows: "Specifies the number of rows in the table.",
        tooltipShowEmpty: "Specifies whether a container element that is empty (contains no findings) is displayed or hidden in the Entry and Outline views.",
        tooltipStatus: "Sets the Status for the Finding in this element. Enter one Status Code.",
        tooltipStyleClass: "Allows entry of a CSS style class created via the Document Styles property that is applied to the element. ",
        tooltipTableStyle: "Specifies a CSS style class to be applied to the table.",
        tooltipText: "Displays the current text of the Finding. Can be customized when Override Transcription=True.",
        tooltipTheme: "Specifies a predefined styling theme ( font style, colors, and other display settings) to apply to the Document Template.",
        tooltipTiming: "Allows the entry of an expression of a time schedule. Enter free text; ex: once per hour for two days.",
        tooltipToggleResult: "Specifies whether or not the text of the Finding result toggles between the positive text and the negative text upon clicking.",
        tooltipUnit: "Sets the Unit for the Finding in this element. Enter one of the units associated with the Finding.",
        tooltipValue: "Determines the Value property of the Finding.",
        tooltipValueList: "Specifies the contents of the drop down list. Click the ellipses to create the list.",
        tooltipValueType: "Specifies whether a value is text, numeric, or date-time.",

        tooltipHyperlinkContentId: "Id of the Form or Content, or URL for navigation.",
        tooltipHyperlinkTargetName: "Window name for the hyperlink target",

        tooltipPrefixAction: "Determines how a finding's prefix will be modified when added to this section.",
        tooltipPrefixValue: "The prefix code that will applied to findings added to this section.",
        tooltipPrefixRule: "An expression used to set the prefix code for findings added to this section.",
        tooltipContextMedcinId: "Identifies the concept that supplies the transcription context for this container",

        //User Settings Dialog
        restartRequiredTitle: "Reload Required",
        restartRequiredMessage: "The application needs to be reloaded in order for your changes to take effect.  Please save your work, then click your browser's refresh button"
    },
    "es-es": true,
    "th-th": true
});
