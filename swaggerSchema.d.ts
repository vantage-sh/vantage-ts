export interface paths {
    "/access_grants": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all access grants
         * @description Return all Access Grants that the current API token has access to.
         */
        get: operations["getAccessGrants"];
        put?: never;
        /**
         * Create access grant
         * @description Create an Access Grant.
         */
        post: operations["createAccessGrant"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/access_grants/{access_grant_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get access grant by token
         * @description Return a specific Access Grant.
         */
        get: operations["getAccessGrant"];
        /**
         * Update access grant
         * @description Update an AccessGrant.
         */
        put: operations["updateAccessGrant"];
        post?: never;
        /**
         * Delete access grant
         * @description Delete an Access Grant.
         */
        delete: operations["deleteAccessGrant"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/anomaly_alerts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all anomaly alerts
         * @description Return all Anomaly Alerts that the current API token has access to.
         */
        get: operations["getAnomalyAlerts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/anomaly_alerts/{anomaly_alert_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get anomaly alert by token
         * @description Return an AnomalyAlert that the current API token has access to.
         */
        get: operations["getAnomalyAlert"];
        /**
         * Update anomaly alert
         * @description Update an AnomalyAlert.
         */
        put: operations["updateAnomalyAlert"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/anomaly_notifications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all anomaly notifications
         * @description Return all Anomaly Notifications.
         */
        get: operations["getAnomalyNotifications"];
        put?: never;
        /**
         * Create anomaly notification
         * @description Create an Anomaly Notification for a Cost Report.
         */
        post: operations["createAnomalyNotification"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/anomaly_notifications/{anomaly_notification_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get anomaly notification by token
         * @description Return an Anomaly Notification that the current API token has access to.
         */
        get: operations["getAnomalyNotification"];
        /**
         * Update anomaly notification
         * @description Update an Anomaly Notification.
         */
        put: operations["updateAnomalyNotification"];
        post?: never;
        /**
         * Delete anomaly notification
         * @description Delete an Anomaly Notification.
         */
        delete: operations["deleteAnomalyNotification"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/audit_logs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all audit logs
         * @description Return all AuditLogs.
         */
        get: operations["getAuditLogs"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/audit_logs/{audit_log_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get audit log by token
         * @description Return a specific AuditLog.
         */
        get: operations["getAuditLog"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/billing_profiles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all billing profiles
         * @description Returns a list of billing profiles (MSP invoicing required).
         */
        get: operations["getBillingProfiles"];
        put?: never;
        /**
         * Create billing profile
         * @description Create a billing profile (MSP invoicing required).
         */
        post: operations["createBillingProfile"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/billing_profiles/{billing_profile_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get billing profile by token
         * @description Requires MSP invoicing to be enabled on the account.
         */
        get: operations["getBillingProfile"];
        /**
         * Update billing profile
         * @description Requires MSP invoicing to be enabled on the account.
         */
        put: operations["updateBillingProfile"];
        post?: never;
        /**
         * Delete billing profile
         * @description Requires MSP invoicing to be enabled on the account.
         */
        delete: operations["deleteBillingProfile"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/billing_rules": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all billing rules
         * @description Returns a list of billing rules.
         */
        get: operations["getBillingRules"];
        put?: never;
        /**
         * Create billing rule
         * @description Create a BillingRule.
         */
        post: operations["createBillingRule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/billing_rules/{billing_rule_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get billing rule by token
         * @description Return a BillingRule.
         */
        get: operations["getBillingRule"];
        /**
         * Update billing rule
         * @description Update a BillingRule.
         */
        put: operations["updateBillingRule"];
        post?: never;
        /**
         * Delete billing rule
         * @description Delete a BillingRule.
         */
        delete: operations["deleteBillingRule"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/budget_alerts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all budget alerts
         * @description Return all BudgetAlerts.
         */
        get: operations["getBudgetAlerts"];
        put?: never;
        /**
         * Create budget alert
         * @description Create a Budget Alert.
         */
        post: operations["createBudgetAlert"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/budget_alerts/{budget_alert_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get budget alert by token
         * @description Return a BudgetAlert.
         */
        get: operations["getBudgetAlert"];
        /**
         * Update budget alert
         * @description Updates an existing BudgetAlert.
         */
        put: operations["updateBudgetAlert"];
        post?: never;
        /**
         * Delete budget alert
         * @description Delete a BudgetAlert.
         */
        delete: operations["deleteBudgetAlert"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/budgets": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all budgets
         * @description Return all Budgets.
         */
        get: operations["getBudgets"];
        put?: never;
        /**
         * Create budget
         * @description Create a Budget.
         */
        post: operations["createBudget"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/budgets/{budget_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get budget by token
         * @description Return a Budget.
         */
        get: operations["getBudget"];
        /**
         * Update budget
         * @description Update a Budget.
         */
        put: operations["updateBudget"];
        post?: never;
        /**
         * Delete budget
         * @description Delete a Budget.
         */
        delete: operations["deleteBudget"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/business_metrics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all business metrics
         * @description Return all BusinessMetrics that the current API token has access to.
         */
        get: operations["getBusinessMetrics"];
        put?: never;
        /**
         * Create business metric
         * @description Create a new BusinessMetric.
         */
        post: operations["createBusinessMetric"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/business_metrics/{business_metric_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get business metric by token
         * @description Return a BusinessMetric.
         */
        get: operations["getBusinessMetric"];
        /**
         * Update business metric
         * @description Updates an existing BusinessMetric.
         */
        put: operations["updateBusinessMetric"];
        post?: never;
        /**
         * Delete business metric
         * @description Deletes an existing BusinessMetric.
         */
        delete: operations["deleteBusinessMetric"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/business_metrics/{business_metric_token}/values": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get business metric values
         * @description Return values of a BusinessMetric
         */
        get: operations["getBusinessMetricValues"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/business_metrics/{business_metric_token}/forecasted_values": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get business metric forecasted values
         * @description Return forecasted values of a BusinessMetric
         */
        get: operations["getBusinessMetricForecastedValues"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/business_metrics/{business_metric_token}/values.csv": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update business metric values from CSV
         * @description Updates the values for an existing BusinessMetric from a CSV file.
         */
        put: operations["updateBusinessMetricValuesCSV"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cost_alerts/{cost_alert_token}/events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all cost alert events
         * @description Get all CostAlertEvents
         */
        get: operations["getCostAlertEvents"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cost_alerts/{cost_alert_token}/events/{event_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get cost alert event by token
         * @description Get a CostAlertEvent
         */
        get: operations["getCostAlertEvent"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cost_alerts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all cost alerts
         * @description List all Cost Alerts
         */
        get: operations["getCostAlerts"];
        put?: never;
        /**
         * Create cost alert
         * @description Create a new Cost Alert
         */
        post: operations["createCostAlert"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cost_alerts/{cost_alert_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get cost alert by token
         * @description Get a Cost Alert
         */
        get: operations["getCostAlert"];
        /**
         * Update cost alert
         * @description Update a Cost Alert
         */
        put: operations["updateCostAlert"];
        post?: never;
        /**
         * Delete cost alert
         * @description Delete a Cost Alert
         */
        delete: operations["deleteCostAlert"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cost_provider_accounts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all cost provider accounts
         * @description List CostProviderAccounts available in a given Workspace.
         */
        get: operations["getCostProviderAccounts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cost_reports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all cost reports
         * @description Return all CostReports.
         */
        get: operations["getCostReports"];
        put?: never;
        /**
         * Create cost report
         * @description Create a CostReport.
         */
        post: operations["createCostReport"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cost_reports/{cost_report_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get cost report by token
         * @description Return a CostReport.
         */
        get: operations["getCostReport"];
        /**
         * Update cost report
         * @description Update a CostReport.
         */
        put: operations["updateCostReport"];
        post?: never;
        /**
         * Delete cost report
         * @description Delete a CostReport.
         */
        delete: operations["deleteCostReport"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cost_reports/{cost_report_token}/forecasted_costs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get forecasted costs for a cost report
         * @description Return all ForecastedCosts.
         */
        get: operations["getForecastedCosts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/costs/data_exports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Generate cost data export
         * @description Generate a DataExport of costs.
         */
        post: operations["createCostExport"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/costs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get costs for cost report or VQL filter
         * @description Return all Costs for a CostReport or VQL filter.
         */
        get: operations["getCosts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dashboards": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all dashboards
         * @description Return all Dashboards.
         */
        get: operations["getDashboards"];
        put?: never;
        /**
         * Create dashboard
         * @description Create a Dashboard.
         */
        post: operations["createDashboard"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dashboards/{dashboard_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get dashboard by token
         * @description Return a specific Dashboard.
         */
        get: operations["getDashboard"];
        /**
         * Update dashboard
         * @description Update a Dashboard.
         */
        put: operations["updateDashboard"];
        post?: never;
        /**
         * Delete dashboard
         * @description Delete a Dashboard.
         */
        delete: operations["deleteDashboard"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/data_exports/{data_export_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get status of data export
         * @description Get the status of a data export.
         */
        get: operations["getDataExport"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/exchange_rates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all exchange rates
         * @description Return all Exchange Rates.
         */
        get: operations["getExchangeRates"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/exchange_rates/csv": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Upload exchange rates via CSV
         * @description Upload Exchange Rates via CSV.
         */
        post: operations["createExchangeRatesViaCsv"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/financial_commitment_reports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all financial commitment reports
         * @description Return all FinancialCommitmentReports.
         */
        get: operations["getFinancialCommitmentReports"];
        put?: never;
        /**
         * Create financial commitment report
         * @description Create a FinancialCommitmentReport.
         */
        post: operations["createFinancialCommitmentReport"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/financial_commitment_reports/{financial_commitment_report_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get financial commitment report by token
         * @description Return a FinancialCommitmentReport.
         */
        get: operations["getFinancialCommitmentReport"];
        /**
         * Update financial commitment report
         * @description Update a FinancialCommitmentReport.
         */
        put: operations["updateFinancialCommitmentReport"];
        post?: never;
        /**
         * Delete financial commitment report
         * @description Delete a FinancialCommitmentReport.
         */
        delete: operations["deleteFinancialCommitmentReport"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/financial_commitments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all financial commitments
         * @description Return all FinancialCommitments.
         */
        get: operations["getFinancialCommitments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/folders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all folders
         * @description Return all Folders for CostReports.
         */
        get: operations["getFolders"];
        put?: never;
        /**
         * Create folder
         * @description Create a Folder for CostReports.
         */
        post: operations["createFolder"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/folders/{folder_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get folder by token
         * @description Return a specific Folder for CostReports.
         */
        get: operations["getFolder"];
        /**
         * Update folder
         * @description Update a Folder for CostReports.
         */
        put: operations["updateFolder"];
        post?: never;
        /**
         * Delete folder
         * @description Delete a Folder for CostReports.
         */
        delete: operations["deleteFolder"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/integrations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all integrations
         * @description Return all Integrations.
         */
        get: operations["getIntegrations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/integrations/{integration_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get integration by token
         * @description Return an Integration.
         */
        get: operations["getIntegration"];
        /**
         * Update integration
         * @description Update an Integration.
         */
        put: operations["updateIntegration"];
        post?: never;
        /**
         * Delete integration
         * @description Delete an Integration.
         */
        delete: operations["deleteIntegration"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/integrations/custom_provider": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create custom provider integration
         * @description Create a Custom Provider Integration
         */
        post: operations["createCustomProviderIntegration"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/integrations/{integration_token}/costs.csv": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Upload custom provider costs
         * @description Create UserCostsUpload via CSV for a Custom Provider Integration.
         */
        post: operations["createUserCostsUploadViaCsv"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/integrations/{integration_token}/costs/{user_costs_upload_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete user costs upload
         * @description Delete a UserCostsUpload.
         */
        delete: operations["deleteUserCostsUpload"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/integrations/{integration_token}/costs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all user costs uploads
         * @description List UserCostUploads.
         */
        get: operations["getUserCostsUploads"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/integrations/gcp": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create GCP integration
         * @description Create a GCP Integration
         */
        post: operations["createGCPIntegration"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/integrations/azure": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create Azure integration
         * @description Create an Azure Integration
         */
        post: operations["createAzureIntegration"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/invoices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all invoices
         * @description Returns a list of invoices (MSP invoicing required).
         */
        get: operations["getInvoices"];
        put?: never;
        /**
         * Create invoice
         * @description Create an invoice (MSP accounts only).
         */
        post: operations["createInvoice"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/invoices/{invoice_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get invoice by token
         * @description Return an invoice.
         */
        get: operations["getInvoice"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/invoices/{invoice_token}/download": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get invoice file
         * @description Download invoice file (PDF or CSV).
         */
        post: operations["downloadInvoice"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/invoices/{invoice_token}/send": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send invoice
         * @description Send invoice via email.
         */
        post: operations["sendInvoice"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/invoices/{invoice_token}/send_and_approve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send and approve invoice
         * @description Send and approve invoice via email (MSP accounts only).
         */
        post: operations["sendAndApproveInvoice"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/invoices/{invoice_token}/cost_report": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get cost report URL
         * @description Get cost report URL for invoice period.
         */
        get: operations["getInvoiceCostReport"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/invoices/{invoice_token}/regenerate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Regenerate invoice
         * @description Regenerate an existing invoice (MSP accounts only).
         */
        post: operations["regenerateInvoice"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/kubernetes_efficiency_reports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all Kubernetes efficiency reports
         * @description Return all KubernetesEfficiencyReports.
         */
        get: operations["getKubernetesEfficiencyReports"];
        put?: never;
        /**
         * Create Kubernetes efficiency report
         * @description Create a KubernetesEfficiencyReport.
         */
        post: operations["createKubernetesEfficiencyReport"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/kubernetes_efficiency_reports/data_exports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Generate Kubernetes efficiency data export
         * @description Generate a DataExport of Kubernetes efficiency data.
         */
        post: operations["createKubernetesEfficiencyReportExport"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/kubernetes_efficiency_reports/{kubernetes_efficiency_report_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Kubernetes efficiency report by token
         * @description Return a KubernetesEfficiencyReport.
         */
        get: operations["getKubernetesEfficiencyReport"];
        /**
         * Update Kubernetes efficiency report
         * @description Update a KubernetesEfficiencyReport.
         */
        put: operations["updateKubernetesEfficiencyReport"];
        post?: never;
        /**
         * Delete Kubernetes efficiency report
         * @description Delete a KubernetesEfficiencyReport.
         */
        delete: operations["deleteKubernetesEfficiencyReport"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/managed_accounts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all managed accounts
         * @description Returns a list of managed accounts.
         */
        get: operations["getManagedAccounts"];
        put?: never;
        /**
         * Create managed account
         * @description Create a Managed Account.
         */
        post: operations["createManagedAccount"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/managed_accounts/{managed_account_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get managed account by token
         * @description Return a Managed Account.
         */
        get: operations["getManagedAccount"];
        /**
         * Update managed account
         * @description Update a Managed Account.
         */
        put: operations["updateManagedAccount"];
        post?: never;
        /**
         * Delete managed account
         * @description Delete a Managed Account.
         */
        delete: operations["deleteManagedAccount"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/managed_accounts/{managed_account_token}/sso_connection": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update SSO configuration for managed account
         * @description Update SSO configuration for a Managed Account.
         */
        put: operations["updateSsoConnectionForManagedAccount"];
        /**
         * Configure SSO for managed account
         * @description Configure SSO for a Managed Account.
         */
        post: operations["createSsoConnectionForManagedAccount"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get authenticated user info
         * @description Get information about the authenticated BearerToken.
         */
        get: operations["getMe"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cost_providers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get cost providers
         * @description List CostProviders available to query in a given Workspace.
         */
        get: operations["getCostProviders"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cost_services": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get cost services
         * @description List CostServices available to query in a given Workspace.
         */
        get: operations["getCostServices"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/user_feedback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Submit user feedback
         * @description Provide UserFeedback for our product and features.
         */
        post: operations["createUserFeedback"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/network_flow_reports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all network flow reports
         * @description Return all NetworkFlowReports.
         */
        get: operations["getNetworkFlowReports"];
        put?: never;
        /**
         * Create network flow report
         * @description Create a NetworkFlowReport.
         */
        post: operations["createNetworkFlowReport"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/network_flow_reports/{network_flow_report_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get network flow report by token
         * @description Return a NetworkFlowReport.
         */
        get: operations["getNetworkFlowReport"];
        /**
         * Update network flow report
         * @description Update a NetworkFlowReport.
         */
        put: operations["updateNetworkFlowReport"];
        post?: never;
        /**
         * Delete network flow report
         * @description Delete a NetworkFlowReport.
         */
        delete: operations["deleteNetworkFlowReport"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/products/{product_id}/prices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get prices for a product
         * @description Return available Prices across all Regions for a Product.
         */
        get: operations["getPrices"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/products/{product_id}/prices/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get price by ID
         * @description Returns a price
         */
        get: operations["getPrice"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/products": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all products
         * @description Return available Products for a Service. For example, with a Provider of AWS and a Service of EC2, Products will be a list of all EC2 Instances. By default, this endpoint returns all Products across all Services and Providers but has optional query parameters for filtering listed below.
         */
        get: operations["getProducts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/products/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get product by ID
         * @description Return a product
         */
        get: operations["getProduct"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/recommendations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all recommendations
         * @description Return all Recommendations. Use the `type` query parameter with a fuzzy fragment to filter recommendation type case-insensitively (for example: aws, aws:ec2, aws:ec2:rightsizing).
         */
        get: operations["getRecommendations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/recommendations/{recommendation_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get recommendation by token
         * @description Return a Recommendation.
         */
        get: operations["getRecommendation"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/recommendations/{recommendation_token}/resources": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all resources for a recommendation
         * @description Return all Active Resources, including Recommendation Actions, referenced in this Recommendation.
         */
        get: operations["getRecommendationResources"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/recommendations/{recommendation_token}/resources/{resource_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get specific resource for a recommendation
         * @description Return an Active Resource, including Recommendation Actions, referenced in this Recommendation.
         */
        get: operations["getRecommendationResource"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/recommendations/by_type/{type}/resources": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all resources for a recommendation type
         * @description Return all Active Resources associated with recommendations of the specified type.
         */
        get: operations["getRecommendationTypeResources"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/recommendation_views": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all recommendation views
         * @description Return all RecommendationViews.
         */
        get: operations["getRecommendationViews"];
        put?: never;
        /**
         * Create recommendation view
         * @description Create a RecommendationView.
         */
        post: operations["createRecommendationView"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/recommendation_views/{recommendation_view_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get recommendation view by token
         * @description Return a specific RecommendationView.
         */
        get: operations["getRecommendationView"];
        /**
         * Update recommendation view
         * @description Update a RecommendationView.
         */
        put: operations["updateRecommendationView"];
        post?: never;
        /**
         * Delete recommendation view
         * @description Delete a RecommendationView.
         */
        delete: operations["deleteRecommendationView"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/report_notifications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all report notifications
         * @description Return all ReportNotifications.
         */
        get: operations["getReportNotifications"];
        put?: never;
        /**
         * Create report notification
         * @description Create a ReportNotification.
         */
        post: operations["createReportNotification"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/report_notifications/{report_notification_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get report notification by token
         * @description Return a ReportNotification.
         */
        get: operations["getReportNotification"];
        /**
         * Update report notification
         * @description Update a ReportNotification.
         */
        put: operations["updateReportNotification"];
        post?: never;
        /**
         * Delete report notification
         * @description Delete a ReportNotification.
         */
        delete: operations["deleteReportNotification"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/resource_reports/columns": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get resource report columns
         * @description List available columns for a resource type.
         */
        get: operations["getResourceReportColumns"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/resource_reports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all resource reports
         * @description Return all ResourceReports.
         */
        get: operations["getResourceReports"];
        put?: never;
        /**
         * Create resource report
         * @description Create a ResourceReport.
         */
        post: operations["createResourceReport"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/resource_reports/{resource_report_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get resource report by token
         * @description Return a ResourceReport.
         */
        get: operations["getResourceReport"];
        /**
         * Update resource report
         * @description Update a ResourceReport.
         */
        put: operations["updateResourceReport"];
        post?: never;
        /**
         * Delete resource report
         * @description Delete a ResourceReport.
         */
        delete: operations["deleteResourceReport"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/resources": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get resources
         * @description Return Resources contained in a ResourceReport
         */
        get: operations["getReportResources"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/resources/{resource_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get resource by token
         * @description Return a single Resource
         */
        get: operations["getResource"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/saved_filters": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all saved filters
         * @description Return all SavedFilters that can be applied to a CostReport.
         */
        get: operations["getSavedFilters"];
        put?: never;
        /**
         * Create saved filter
         * @description Create a SavedFilter for CostReports.
         */
        post: operations["createSavedFilter"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/saved_filters/{saved_filter_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get saved filter by token
         * @description Return a specific SavedFilter.
         */
        get: operations["getSavedFilter"];
        /**
         * Update saved filter
         * @description Update a SavedFilter for CostReports.
         */
        put: operations["updateSavedFilter"];
        post?: never;
        /**
         * Delete saved filter
         * @description Delete a SavedFilter for CostReports.
         */
        delete: operations["deleteSavedFilter"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/segments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all segments
         * @description Return all Segments.
         */
        get: operations["getSegments"];
        put?: never;
        /**
         * Create segment
         * @description Create a Segment.
         */
        post: operations["createSegment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/segments/{segment_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get segment by token
         * @description Return a Segment.
         */
        get: operations["getSegment"];
        /**
         * Update segment
         * @description Update a Segment.
         */
        put: operations["updateSegment"];
        post?: never;
        /**
         * Delete segment
         * @description Delete a Segment.
         */
        delete: operations["deleteSegment"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tags": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all tags
         * @description Return all Tags that the current API token has access to.
         */
        get: operations["getTags"];
        /**
         * Update tag
         * @description Updates an existing Tag.
         */
        put: operations["updateTag"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tags/{key}/values": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get tag values
         * @description Returns corresponding TagValues for a given Tag.
         */
        get: operations["getTagValues"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/teams": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all teams
         * @description Return all Teams that the current API token has access to.
         */
        get: operations["getTeams"];
        put?: never;
        /**
         * Create team
         * @description Create a new Team.
         */
        post: operations["createTeam"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/teams/{team_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get team by token
         * @description Return a specific Team.
         */
        get: operations["getTeam"];
        /**
         * Update team
         * @description Update a Team.
         */
        put: operations["updateTeam"];
        post?: never;
        /**
         * Delete team
         * @description Delete a Team.
         */
        delete: operations["deleteTeam"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/teams/{team_token}/members": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get team members
         * @description Return all members of a Team.
         */
        get: operations["getTeamMembers"];
        put?: never;
        /**
         * Add team member
         * @description Add a member to a Team.
         */
        post: operations["addTeamMember"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/teams/{team_token}/members/{user_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Remove team member
         * @description Remove a member from a Team.
         */
        delete: operations["removeTeamMember"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/unit_costs/data_exports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Generate data export of unit costs
         * @description Generate a DataExport of unit costs.
         */
        post: operations["createUnitCostsExport"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/unit_costs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all unit costs for a cost report
         * @description Return all UnitCosts for a CostReport.
         */
        get: operations["getUnitCosts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all users
         * @description Return all Users that the current API token has access to.
         */
        get: operations["getUsers"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{user_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get user by token
         * @description Return a specific User.
         */
        get: operations["getUser"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/virtual_tag_configs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all virtual tag configs
         * @description Return all VirtualTagConfigs that the current API token has access to.
         */
        get: operations["getVirtualTagConfigs"];
        put?: never;
        /**
         * Create virtual tag config
         * @description Create a new VirtualTagConfig.
         */
        post: operations["createVirtualTagConfig"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/virtual_tag_configs/{token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get virtual tag config by token
         * @description Return a specific VirtualTagConfig.
         */
        get: operations["getVirtualTagConfig"];
        /**
         * Update virtual tag config
         * @description Updates an existing VirtualTagConfig.
         */
        put: operations["updateVirtualTagConfig"];
        post?: never;
        /**
         * Delete virtual tag config
         * @description Deletes an existing VirtualTagConfig.
         */
        delete: operations["deleteVirtualTagConfig"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/virtual_tag_configs/{token}/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get virtual tag config processing status
         * @description Return the processing status of a specific VirtualTagConfig.
         */
        get: operations["getVirtualTagConfigStatus"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/virtual_tag_configs/{token}/async": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update virtual tag config asynchronously
         * @description Asynchronously updates an existing VirtualTagConfig.
         */
        put: operations["updateAsyncVirtualTagConfig"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/virtual_tag_configs/async/{request_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get async virtual tag config update status
         * @description Check the status of an async VirtualTagConfig update.
         */
        get: operations["getAsyncVirtualTagConfigStatus"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workspaces": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all workspaces
         * @description Return all Workspaces that the current API token has access to.
         */
        get: operations["getWorkspaces"];
        put?: never;
        /**
         * Create workspace
         * @description Create a workspace
         */
        post: operations["createWorkspace"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workspaces/{workspace_token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get workspace by token
         * @description Return a specific Workspace.
         */
        get: operations["getWorkspace"];
        /**
         * Update workspace
         * @description Update a workspace
         */
        put: operations["updateWorkspace"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ping": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description This is a health check endpoint that can be used to determine Vantage API healthiness. It will return 200 if everything is running smoothly. */
        get: operations["ping"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, any>;
export interface components {
    schemas: {
        /** @description AccessGrants model */
        AccessGrants: {
            links?: components["schemas"]["Links"];
            access_grants: components["schemas"]["AccessGrant"][];
        };
        Links: {
            /** @description The URL of the current page of results. */
            self?: string | null;
            /** @description The URL of the first page of results. */
            first?: string | null;
            /** @description The URL of the next page of results, if one exists. */
            next?: string | null;
            /** @description The URL of the last page of results, if one exists. */
            last?: string | null;
            /** @description The URL of the previous page of results, if one exists. */
            prev?: string | null;
        };
        /** @description AccessGrant model */
        AccessGrant: {
            token: string;
            /**
             * @description The token for any resource the AccessGrant is applied to.
             * @example rprt_abcd1234
             */
            resource_token: string;
            /** @description The access status of the AccessGrant. */
            access: string;
            /** @description The Team token for which an AccessGrant is applied to. */
            team_token: string | null;
            /**
             * @description The date and time, in UTC, the AccessGrant was created. ISO 8601 Formatted.
             * @example 2023-08-04T00:00:00Z
             */
            created_at: string;
            /** @description The token for the User who created the AccessGrant. */
            created_by: string | null;
        };
        /** @description Errors model */
        Errors: {
            links?: components["schemas"]["Links"];
            errors: string[];
        };
        /** @description Create an Access Grant. */
        createAccessGrant: {
            /** @description The token of the resource for which you are granting access. */
            resource_token: string;
            /** @description The token of the Team you want to grant access to. */
            team_token: string;
            /**
             * @description The access level you want to grant. Defaults to 'allowed'.
             * @enum {string}
             */
            access?: "denied" | "allowed";
        };
        /** @description Update an AccessGrant. */
        updateAccessGrant: {
            /**
             * @description Allowed or denied access to resource.
             * @enum {string}
             */
            access: "denied" | "allowed";
        };
        /** @description AnomalyAlerts model */
        AnomalyAlerts: {
            links?: components["schemas"]["Links"];
            anomaly_alerts: components["schemas"]["AnomalyAlert"][];
        };
        /** @description AnomalyAlert model */
        AnomalyAlert: {
            token: string;
            /**
             * @description The date and time, in UTC, the AnomalyAlert was created. ISO 8601 Formatted.
             * @example 2021-07-09T00:00:00Z
             */
            created_at: string;
            /**
             * @description The date and time, in UTC, the AnomalyAlert is sent. ISO 8601 Formatted.
             * @example 2021-07-09T00:00:00Z
             */
            alerted_at?: string | null;
            /** @description The category of the AnomalyAlert. */
            category: string | null;
            /** @description The provider service causing the AnomalyAlert. */
            service: string;
            /** @description The provider of the service causing the AnomalyAlert. */
            provider: string;
            /** @description The amount observed. */
            amount: string;
            /** @description The previous amount observed. */
            previous_amount: string;
            /** @description The seven day average of the amount observed. */
            seven_day_average: string;
            /** @description The status of the AnomalyAlert. */
            status: string;
            /** @description The user-provided feedback of why alert was ignored/archived. */
            feedback?: string | null;
            /** @description The names of the resources the AnomalyAlert was attributed to. */
            resources: string[];
            /** @description The tokens of the Resources the AnomalyAlert was attributed to. */
            resource_tokens: string[];
            /** @description The token of the Report associated with the AnomalyAlert. */
            cost_report_token: string;
        };
        /** @description Update an AnomalyAlert. */
        updateAnomalyAlert: {
            /** @description The status of the Anomaly Alert. */
            status: string;
            /** @description Optional additional comments for why this alert is ignored. */
            feedback?: string;
        };
        /** @description AnomalyNotifications model */
        AnomalyNotifications: {
            links?: components["schemas"]["Links"];
            anomaly_notifications: components["schemas"]["AnomalyNotification"][];
        };
        /** @description AnomalyNotification model */
        AnomalyNotification: {
            token: string;
            /** @description The token for the CostReport the AnomalyNotification is associated with. */
            cost_report_token: string;
            /**
             * @description The date and time, in UTC, the AnomalyNotification was created. ISO 8601 Formatted.
             * @example 2023-08-04T00:00:00Z
             */
            created_at: string;
            /**
             * @description The date and time, in UTC, the AnomalyNotification was last updated at. ISO 8601 Formatted.
             * @example 2023-08-04T00:00:00Z
             */
            updated_at: string;
            /**
             * Format: int32
             * @description The threshold amount that must be met for the notification to fire.
             */
            threshold: number;
            /** @description The tokens of the users that receive the notification. */
            user_tokens: string[];
            /** @description The channels that the notification is sent to. */
            recipient_channels: string[];
        };
        /** @description Create an Anomaly Notification for a Cost Report. */
        createAnomalyNotification: {
            /** @description The token of the Cost Report that has the notification. */
            cost_report_token: string;
            /**
             * Format: int32
             * @description The threshold amount that must be met for the notification to fire.
             */
            threshold?: number;
            /** @description The tokens of the Users that receive the notification. */
            user_tokens?: string[];
            /** @description The Slack/MS Teams channels that receive the notification. */
            recipient_channels?: string[];
        };
        /** @description Update an Anomaly Notification. */
        updateAnomalyNotification: {
            /**
             * Format: int32
             * @description The threshold amount that must be met for the notification to fire.
             */
            threshold?: number;
            /** @description The tokens of the users that receive the notification. */
            user_tokens?: string[];
            /** @description The Slack/MS Teams channels that receive the notification. */
            recipient_channels?: string[];
        };
        /** @description AuditLogs model */
        AuditLogs: {
            links?: components["schemas"]["Links"];
            audit_logs: components["schemas"]["AuditLog"][];
        };
        /** @description AuditLog model */
        AuditLog: {
            /**
             * @description The unique token identifying the audit log.
             * @example adt_lg_1234567890abcdef
             */
            token: string;
            /**
             * @description The token of the audited object.
             * @example rpt_1234567890abcdef
             */
            object_token: string | null;
            /**
             * @description The type of the audited object.
             * @example Report
             */
            object_type: string;
            /**
             * @description The title of the audited object.
             * @example Production Cost Report
             */
            object_title: string | null;
            /**
             * @description The event type of the audit log.
             * @example record_created
             */
            event: string;
            /**
             * @description The source of the action (console, api, developer).
             * @example console
             */
            source: string;
            /** @description The name of the user who performed the action. */
            user?: string | null;
            /** @description The name of the workspace associated with the audit log. */
            workspace_title?: string | null;
            /**
             * @description The token of the workspace associated with the audit log.
             * @example wrkspc_1234567890abcdef
             */
            workspace_token?: string | null;
            /**
             * @description The date and time, in UTC, the audit log was created. ISO 8601 Formatted.
             * @example 2021-07-09T00:00:00Z
             */
            created_at: string;
            /** @description The changed values of the object. */
            changed_values: Record<string, any>;
            /** @description The unchanged values of the object. */
            unchanged_values: Record<string, any>;
        };
        /** @description BillingProfiles model */
        BillingProfiles: {
            links?: components["schemas"]["Links"];
            billing_profiles: components["schemas"]["BillingProfile"][];
        };
        /** @description BillingProfile model */
        BillingProfile: {
            token: string;
            /** @description Display name for the billing profile */
            nickname: string;
            /**
             * @description The date and time, in UTC, the billing profile was created. ISO 8601 formatted.
             * @example 2023-08-04T00:00:00Z
             */
            created_at: string;
            /**
             * @description The date and time, in UTC, the billing profile was last updated. ISO 8601 formatted.
             * @example 2023-08-04T00:00:00Z
             */
            updated_at: string;
            billing_information_attributes: components["schemas"]["BillingInformation"];
            business_information_attributes: components["schemas"]["BusinessInformation"];
            banking_information_attributes?: components["schemas"]["BankingInformation"];
            invoice_adjustment_attributes: components["schemas"]["InvoiceAdjustment"];
            /** @description Number of managed accounts using this billing profile */
            managed_accounts_count: string;
        };
        BillingInformation: {
            token: string;
            /** @description Company name for billing */
            company_name: string | null;
            /** @description ISO country code */
            country_code: string | null;
            /** @description First line of billing address */
            address_line_1: string | null;
            /** @description Second line of billing address */
            address_line_2: string | null;
            /** @description City for billing address */
            city: string | null;
            /** @description State or province for billing address */
            state: string | null;
            /** @description Postal or ZIP code */
            postal_code: string | null;
            /** @description Array of billing email addresses */
            billing_email: string[] | null;
        };
        BusinessInformation: {
            token: string;
            metadata?: components["schemas"]["BusinessInformationMetadata"];
        };
        BusinessInformationMetadata: {
            /** @description Array of custom field objects */
            custom_fields?: components["schemas"]["BusinessInformationCustomField"][];
        };
        BusinessInformationCustomField: {
            /** @description Custom field name */
            name: string;
            /** @description Custom field value */
            value: string | null;
        };
        BankingInformation: {
            token: string;
            /** @description Name of the bank */
            bank_name: string | null;
            /** @description Name of the account beneficiary */
            beneficiary_name: string | null;
            /** @description Tax identification number */
            tax_id: string | null;
            secure_data?: components["schemas"]["BankingInformationSecureData"];
        };
        BankingInformationSecureData: {
            /** @description Bank account number (US) */
            account_number: string | null;
            /** @description Bank routing number (US) */
            routing_number: string | null;
            /** @description International Bank Account Number (EU) */
            iban: string | null;
            /** @description SWIFT/BIC code (EU) */
            swift_bic: string | null;
        };
        InvoiceAdjustment: {
            token: string;
            /** @description Array of adjustment items (taxes, fees, etc.) */
            adjustment_items: components["schemas"]["AdjustmentItem"][];
        };
        AdjustmentItem: {
            /** @description Name of the adjustment (e.g., 'State Tax', 'Processing Fee') */
            name: string;
            /**
             * @description Type of adjustment
             * @enum {string}
             */
            adjustment_type: "charge" | "credit" | "discount";
            /**
             * @description How the adjustment is calculated
             * @enum {string}
             */
            calculation_type: "fixed" | "percentage";
            /** @description Amount or percentage value for the adjustment */
            amount: string;
        };
        /** @description Create a billing profile (MSP invoicing required). */
        createBillingProfile: {
            /** @description Display name for the billing profile */
            nickname: string;
            /** @description Billing address and contact information */
            billing_information_attributes?: {
                token?: string;
                /** @description Company name for billing */
                company_name?: string;
                /** @description ISO country code */
                country_code?: string;
                /** @description First line of billing address */
                address_line_1?: string;
                /** @description Second line of billing address */
                address_line_2?: string;
                /** @description City for billing address */
                city?: string;
                /** @description State or province for billing address */
                state?: string;
                /** @description Postal or ZIP code */
                postal_code?: string;
                /** @description Array of billing email addresses */
                billing_email?: string[];
            };
            /** @description Business information and custom fields */
            business_information_attributes?: {
                token?: string;
                /** @description Business metadata including custom fields */
                metadata?: {
                    /** @description Array of custom field objects */
                    custom_fields?: {
                        /** @description Custom field name */
                        name?: string;
                        /** @description Custom field value */
                        value?: string;
                    }[];
                };
            };
            /** @description Banking details (MSP accounts only) */
            banking_information_attributes?: {
                token?: string;
                /** @description Name of the bank */
                bank_name?: string;
                /** @description Name of the account beneficiary */
                beneficiary_name?: string;
                /** @description Tax identification number */
                tax_id?: string;
                /** @description Encrypted banking details */
                secure_data?: {
                    /** @description Bank account number (US) */
                    account_number?: string;
                    /** @description Bank routing number (US) */
                    routing_number?: string;
                    /** @description International Bank Account Number (EU) */
                    iban?: string;
                    /** @description SWIFT/BIC code (EU) */
                    swift_bic?: string;
                };
            };
            /** @description Invoice adjustments (taxes, fees, etc.) */
            invoice_adjustment_attributes?: {
                token?: string;
                /** @description Array of adjustment items */
                adjustment_items?: {
                    /** @description Name of the adjustment */
                    name: string;
                    /**
                     * @description Type of adjustment
                     * @default charge
                     * @enum {string}
                     */
                    adjustment_type?: "charge" | "credit" | "discount";
                    /**
                     * @description How the adjustment is calculated
                     * @enum {string}
                     */
                    calculation_type: "fixed" | "percentage";
                    /**
                     * Format: double
                     * @description Amount or percentage value
                     */
                    amount: number;
                }[];
            };
        };
        /** @description Update a billing profile (MSP invoicing required). */
        updateBillingProfile: {
            /** @description Display name for the billing profile */
            nickname?: string;
            /** @description Billing address and contact information */
            billing_information_attributes?: {
                token?: string;
                /** @description Company name for billing */
                company_name?: string;
                /** @description ISO country code */
                country_code?: string;
                /** @description First line of billing address */
                address_line_1?: string;
                /** @description Second line of billing address */
                address_line_2?: string;
                /** @description City for billing address */
                city?: string;
                /** @description State or province for billing address */
                state?: string;
                /** @description Postal or ZIP code */
                postal_code?: string;
                /** @description Array of billing email addresses */
                billing_email?: string[];
            };
            /** @description Business information and custom fields */
            business_information_attributes?: {
                token?: string;
                /** @description Business metadata including custom fields */
                metadata?: {
                    /** @description Array of custom field objects */
                    custom_fields?: {
                        /** @description Custom field name */
                        name?: string;
                        /** @description Custom field value */
                        value?: string;
                    }[];
                };
            };
            /** @description Banking details (MSP accounts only) */
            banking_information_attributes?: {
                token?: string;
                /** @description Name of the bank */
                bank_name?: string;
                /** @description Name of the account beneficiary */
                beneficiary_name?: string;
                /** @description Tax identification number */
                tax_id?: string;
                /** @description Encrypted banking details */
                secure_data?: {
                    /** @description Bank account number (US) */
                    account_number?: string;
                    /** @description Bank routing number (US) */
                    routing_number?: string;
                    /** @description International Bank Account Number (EU) */
                    iban?: string;
                    /** @description SWIFT/BIC code (EU) */
                    swift_bic?: string;
                };
            };
            /** @description Invoice adjustments (taxes, fees, etc.) */
            invoice_adjustment_attributes?: {
                token?: string;
                /** @description Array of adjustment items */
                adjustment_items?: {
                    /** @description Name of the adjustment */
                    name: string;
                    /**
                     * @description Type of adjustment
                     * @default charge
                     * @enum {string}
                     */
                    adjustment_type?: "charge" | "credit" | "discount";
                    /**
                     * @description How the adjustment is calculated
                     * @enum {string}
                     */
                    calculation_type: "fixed" | "percentage";
                    /**
                     * Format: double
                     * @description Amount or percentage value
                     */
                    amount: number;
                }[];
            };
        };
        /** @description BillingRules model */
        BillingRules: {
            links?: components["schemas"]["Links"];
            billing_rules: components["schemas"]["BillingRule"][];
        };
        /** @description BillingRule model */
        BillingRule: {
            token: string;
            /**
             * @description The title of the BillingRule.
             * @example Credit for Unused EC2 Instances
             */
            title: string;
            /**
             * @description The type of the BillingRule.
             * @example credit
             */
            type: string;
            /**
             * @description The start date of the BillingRule.
             * @example 2024-06-28T00:00:00Z
             */
            start_date?: string | null;
            /**
             * @description The end date of the BillingRule.
             * @example 2024-06-28T00:00:00Z
             */
            end_date?: string | null;
            /**
             * @description Whether the BillingRule applies to all future managed accounts.
             * @example true
             */
            apply_to_all: boolean | null;
            /**
             * @description The token of the Creator of the BillingRule.
             * @example usr_1234
             */
            created_by_token: string;
            /**
             * @description The date and time, in UTC, the BillingRule was created. ISO 8601 Formatted.
             * @example 2024-06-28T00:00:00Z
             */
            created_at: string;
            /**
             * @description The service for the BillingRule (Charge).
             * @example AWS Cloudfront
             */
            service?: string | null;
            /**
             * @description The category for the BillingRule (Charge).
             * @example MSP Fee
             */
            category?: string | null;
            /**
             * @description The percentage of the cost shown for the BillingRule (Adjustment).
             * @example 75.0
             */
            percentage?: string | null;
            /**
             * @description The charge type for the BillingRule.
             * @example RIFee
             */
            charge_type?: string | null;
            /**
             * @description The subcategory for the BillingRule (Charge).
             * @example One-time
             */
            sub_category?: string | null;
            /**
             * @description The start period for the BillingRule (Charge).
             * @example 2024-05-01
             */
            start_period?: string | null;
            /**
             * @description The amount for the BillingRule (Charge).
             * @example 5000.25
             */
            amount?: string | null;
            /**
             * @description The SQL query for the BillingRule (Custom).
             * @example UPDATE costs SET costs.amount = costs.amount * 0.95
             */
            sql_query?: string | null;
        };
        /** @description Create a BillingRule. */
        createBillingRule: {
            /**
             * @description The type of the BillingRule. Note: the values are case insensitive.
             * @enum {string}
             */
            type: "exclusion" | "adjustment" | "credit" | "charge" | "custom";
            /** @description The title of the BillingRule. */
            title: string;
            /** @description The start period of the BillingRule. DEPRECATED: use start_date instead. */
            start_period?: string;
            /** @description The start date of the BillingRule. ISO 8601 formatted. */
            start_date?: string;
            /** @description The end date of the BillingRule. ISO 8601 formatted. */
            end_date?: string;
            /** @description Determines if the BillingRule applies to all current and future managed accounts. */
            apply_to_all?: boolean;
            /** @description The charge type of the BillingRule. Required for Exclusion rules. */
            charge_type?: string;
            /**
             * Format: double
             * @description The percentage of the cost shown. Required for Adjustment rules. Example value: 75.0
             */
            percentage?: number;
            /** @description The service of the BillingRule. Required for Charge and Credit rules. */
            service?: string;
            /** @description The category of the BillingRule. Required for Charge and Credit rules. */
            category?: string;
            /** @description The subcategory of the BillingRule. Required for Charge and Credit rules. */
            sub_category?: string;
            /**
             * Format: double
             * @description The amount for the BillingRule. Required for Charge and Credit rules. Example value: 300
             */
            amount?: number;
            /** @description The SQL query for the BillingRule. Required for Custom rules. Example value: UPDATE costs SET costs.amount = costs.amount * 0.95 */
            sql_query?: string;
        };
        /** @description Update a BillingRule. */
        updateBillingRule: {
            /** @description The title of the BillingRule. */
            title?: string;
            /** @description The charge type of the BillingRule. */
            charge_type?: string;
            /**
             * Format: double
             * @description The percentage of the cost shown. Example value: 75.0
             */
            percentage?: number;
            /** @description The service of the BillingRule. */
            service?: string;
            /** @description The category of the BillingRule. */
            category?: string;
            /** @description The subcategory of the BillingRule. */
            sub_category?: string;
            /** @description The start period of the BillingRule. */
            start_period?: string;
            /**
             * Format: double
             * @description The credit amount for the BillingRule. Example value: 300
             */
            amount?: number;
            /** @description The start date of the BillingRule. ISO 8601 formatted. */
            start_date?: string;
            /** @description The end date of the BillingRule. ISO 8601 formatted. */
            end_date?: string;
            /** @description Determines if the BillingRule applies to all current and future managed accounts. */
            apply_to_all?: boolean;
            /** @description The SQL query of the BillingRule. */
            sql_query?: string;
        };
        /** @description BudgetAlerts model */
        BudgetAlerts: {
            links?: components["schemas"]["Links"];
            budget_alerts: components["schemas"]["BudgetAlert"][];
        };
        /** @description BudgetAlert model */
        BudgetAlert: {
            token: string;
            /** @description The tokens for the Budgets that the Budget Alert is monitoring to trigger alerts on. */
            budget_tokens: string[];
            /**
             * @description The date and time, in UTC, the Budget Alert was created. ISO 8601 Formatted.
             * @example 2024-03-19T00:00:00Z
             */
            created_at: string;
            /** @description The token for the Workspace the ResourceReport is a part of. */
            workspace_token: string;
            /** @description The token for the User who created this BudgetAlert. */
            user_token?: string | null;
            /** @description The Users that receive the alert. */
            user_tokens: string[];
            /**
             * Format: int32
             * @description The number of days from the start or end of the month to trigger the alert if the threshold is reached.
             */
            duration_in_days: number | null;
            /**
             * Format: int32
             * @description Alerts only send if they reach this number (as a percentage). When threshold is 100, that means alerts are triggered once costs reach 100% of the budget.
             * @example 75
             */
            threshold: number;
            /**
             * @description The period tracked on the alert. Used with duration_in_days to determine the time window of the alert. Possible values: start_of_the_month, end_of_the_month.
             * @example start_of_the_month
             */
            period_to_track: string | null;
            /**
             * @description The provider used for sending alerts. This must be configured in the console. Possible values are: slack, microsoft_graph.
             * @example slack
             */
            integration_provider?: string | null;
            /** @description The channels receiving the alerts. Requires an integration provider to be connected. */
            recipient_channels: string[] | null;
        };
        /** @description Create a Budget Alert. */
        createBudgetAlert: {
            /** @description The tokens of the Budget that has the alert. */
            budget_tokens: string[];
            /**
             * Format: int32
             * @description The threshold amount that must be met for the alert to fire.
             */
            threshold: number;
            /** @description The tokens of the users that receive the alert. */
            user_tokens?: string[];
            /** @description The number of days from the start or end of the month to trigger the alert if the threshold is reached.  For the full month, pass an empty value. */
            duration_in_days: string;
            /** @description The period tracked on the alert. Used with duration_in_days to determine the time window of the alert. Defaults to start_of_the_month if not passed. Possible values: start_of_the_month, end_of_the_month. */
            period_to_track?: string;
            /** @description The channels receiving the alerts. Requires an integration provider to be connected. */
            recipient_channels?: string[];
        };
        /** @description Updates an existing BudgetAlert. */
        updateBudgetAlert: {
            /** @description The tokens of the Budget that has the alert. */
            budget_tokens?: string[];
            /**
             * Format: int32
             * @description The threshold amount that must be met for the alert to fire.
             */
            threshold?: number;
            /** @description The tokens of the users that receive the alert. */
            user_tokens?: string[];
            /** @description The number of days from the start or end of the month to trigger the alert if the threshold is reached. For the full month, pass an empty value. */
            duration_in_days?: string;
            /** @description The period tracked on the alert. Used with duration_in_days to determine the time window of the alert. Defaults to start_of_the_month if not passed. Possible values: start_of_the_month, end_of_the_month. */
            period_to_track?: string;
            /** @description The channels receiving the alerts. Requires an integration provider to be connected. */
            recipient_channels?: string[];
        };
        /** @description Budgets model */
        Budgets: {
            links?: components["schemas"]["Links"];
            budgets: components["schemas"]["Budget"][];
        };
        /** @description Budget model */
        Budget: {
            token: string;
            /**
             * @description The name of the Budget.
             * @example Acme123 Budget
             */
            name: string | null;
            /** @description The token for the Workspace the Budget is a part of. */
            workspace_token: string;
            /** @description The token for the User who created this Budget. */
            user_token?: string | null;
            /** @description The token of the Creator of the Budget. */
            created_by_token?: string | null;
            /** @description The token of the Report associated with the Budget. */
            cost_report_token?: string | null;
            /**
             * @description The date and time, in UTC, the Budget was created. ISO 8601 Formatted.
             * @example 2024-03-19T00:00:00Z
             */
            created_at: string;
            /** @description The tokens of the BudgetAlerts associated with the Budget. */
            budget_alert_tokens: string[];
            /** @description The tokens of the child Budgets associated with the hierarchical Budget. */
            child_budget_tokens: string[];
            /** @description The budget periods associated with the Budget. */
            periods: components["schemas"]["BudgetPeriod"][];
            /** @description The historical performance of the Budget. */
            performance?: components["schemas"]["BudgetPerformance"][];
        };
        BudgetPeriod: {
            /**
             * @description The date and time, in UTC, the Budget was created. ISO 8601 Formatted.
             * @example 2024-03-19T00:00:00Z
             */
            start_at: string;
            /**
             * @description The date and time, in UTC, the Budget was created. ISO 8601 Formatted.
             * @example 2024-03-19T00:00:00Z
             */
            end_at: string;
            /**
             * @description The amount of the Budget Period as a string to ensure precision.
             * @example 100.00
             */
            amount: string;
        };
        BudgetPerformance: {
            /**
             * @description The date and time, in UTC, the Budget was created. ISO 8601 Formatted.
             * @example 2024-03-19T00:00:00Z
             */
            date: string;
            /**
             * @description The date and time, in UTC, the Budget was created. ISO 8601 Formatted.
             * @example 2024-03-19T00:00:00Z
             */
            actual: string;
            /**
             * @description The amount of the Budget Period as a string to ensure precision.
             * @example 100.00
             */
            amount: string;
        };
        /** @description Create a Budget. */
        createBudget: {
            /** @description The name of the Budget. */
            name: string;
            /** @description The token of the Workspace to add the Budget to. */
            workspace_token?: string;
            /** @description The CostReport token. Ignored for hierarchical Budgets. */
            cost_report_token?: string;
            /** @description The tokens of any child Budgets when creating a hierarchical Budget. */
            child_budget_tokens?: string[];
            /** @description The periods for the Budget. The start_at and end_at must be iso8601 formatted e.g. YYYY-MM-DD. Ignored for hierarchical Budgets. */
            periods?: {
                /**
                 * Format: date
                 * @description The start date of the period.
                 */
                start_at: string;
                /**
                 * Format: date
                 * @description The end date of the period.
                 */
                end_at?: string | null;
                /**
                 * Format: double
                 * @description The amount of the period.
                 */
                amount: number;
            }[];
        };
        /** @description Update a Budget. */
        updateBudget: {
            /** @description The name of the Budget. */
            name?: string;
            /** @description The CostReport token. Ignored for hierarchical Budgets. */
            cost_report_token?: string;
            /** @description The tokens of any child Budgets when creating a hierarchical Budget. */
            child_budget_tokens?: string[];
            /** @description The periods for the Budget. The start_at and end_at must be iso8601 formatted e.g. YYYY-MM-DD. Ignored for hierarchical Budgets. */
            periods?: {
                /**
                 * Format: date
                 * @description The start date of the period.
                 */
                start_at: string;
                /**
                 * Format: date
                 * @description The end date of the period.
                 */
                end_at?: string | null;
                /**
                 * Format: double
                 * @description The amount of the period.
                 */
                amount: number;
            }[];
        };
        /** @description BusinessMetrics model */
        BusinessMetrics: {
            business_metrics: components["schemas"]["BusinessMetric"][];
        };
        /** @description BusinessMetric model */
        BusinessMetric: {
            /**
             * @description The token of the BusinessMetric.
             * @example bsnss_mtrc_1234
             */
            token: string;
            /**
             * @description The title of the BusinessMetric.
             * @example Total Revenue
             */
            title: string;
            /**
             * @description The token of the Creator of the BusinessMetric.
             * @example usr_1234
             */
            created_by_token?: string | null;
            /** @description The tokens for any CostReports that use the BusinessMetric, the unit scale, and label filter. */
            cost_report_tokens_with_metadata: components["schemas"]["AttachedCostReportForBusinessMetric"][];
            /**
             * @description The type of import for the BusinessMetric.
             * @example datadog_metrics
             * @enum {string|null}
             */
            import_type: "datadog_metrics" | "cloudwatch" | "csv" | null;
            /** @description The Integration token used to import the BusinessMetric. */
            integration_token: string | null;
            cloudwatch_fields?: components["schemas"]["CloudwatchFields"];
            datadog_metric_fields?: components["schemas"]["DatadogMetricFields"];
        };
        AttachedCostReportForBusinessMetric: {
            /**
             * @description The token of the CostReport the BusinessMetric is attached to.
             * @example rprt_1234
             */
            cost_report_token: string | null;
            /**
             * @description Determines the scale of the BusinessMetric's values within a particular CostReport.
             * @example per_hundred
             * @enum {string}
             */
            unit_scale: "per_unit" | "per_hundred" | "per_thousand" | "per_million" | "per_billion";
            /** @description The labels that the BusinessMetric is filtered by within a particular CostReport. */
            label_filter?: string[] | null;
        };
        CloudwatchFields: {
            /**
             * @description The time aggregation function used to import Cloudwatch metrics.
             * @example Average
             * @enum {string}
             */
            stat: "Sum" | "Average" | "Minimum" | "Maximum";
            /**
             * @description The region used to import Cloudwatch metrics.
             * @example us-east-1
             */
            region: string;
            /**
             * @description The namespace used to import Cloudwatch metrics.
             * @example AWS/EC2
             */
            namespace: string;
            /**
             * @description The metric name used to import Cloudwatch metrics.
             * @example CPUUtilization
             */
            metric_name: string;
            /** @description The dimensions used to pull specific statistical data for Cloudwatch metrics. */
            dimensions: components["schemas"]["CloudwatchDimension"][];
            /** @description The dimension used to aggregate the Cloudwatch metrics. */
            label_dimension: string | null;
        };
        CloudwatchDimension: {
            name: string;
            value: string;
        };
        DatadogMetricFields: {
            /**
             * @description The query used to import Datadog metrics.
             * @example sum:aws.applicationelb.request_count{region:us-east-1}.rollup(avg,daily)
             */
            query: string;
        };
        /** @description BusinessMetricValues model */
        BusinessMetricValues: {
            values: components["schemas"]["BusinessMetricValue"][];
        };
        BusinessMetricValue: {
            /**
             * @description The date of the Business Metric Value. ISO 8601 formatted.
             * @example 2024-03-01+00:00
             */
            date: string;
            /**
             * @description The amount of the Business Metric Value as a string to ensure precision.
             * @example 100.00
             */
            amount: string;
            /**
             * @description The label of the Business Metric Value.
             * @example Cost Center A
             */
            label?: string | null;
        };
        /** @description Create a new BusinessMetric. */
        createBusinessMetric: {
            /** @description The title of the BusinessMetrics. */
            title: string;
            /** @description The tokens for any CostReports that use the BusinessMetric, the unit scale, and label filter. */
            cost_report_tokens_with_metadata?: {
                /** @description The token of the CostReport the BusinessMetric is attached to. */
                cost_report_token: string;
                /**
                 * @description Determines the scale of the BusinessMetric's values within the CostReport.
                 * @default per_unit
                 * @enum {string}
                 */
                unit_scale?: "per_unit" | "per_hundred" | "per_thousand" | "per_million" | "per_billion";
                /** @description Include only values with these labels in the CostReport. */
                label_filter?: string[];
            }[];
            /** @description The dates, amounts, and (optional) labels for the BusinessMetric. */
            values?: {
                /** Format: date-time */
                date: string;
                /** Format: double */
                amount: number;
                label?: string | null;
            }[];
            /** @description The dates, amounts, and (optional) labels for forecasted BusinessMetric values. */
            forecasted_values?: {
                /** Format: date-time */
                date: string;
                /** Format: double */
                amount: number;
                label?: string | null;
            }[];
            /** @description Datadog metric configuration fields */
            datadog_metric_fields?: {
                /** @description Integration token for the account from which you would like to fetch metrics. */
                integration_token?: string;
                /** @description Datadog metrics query string. e.g. sum:aws.applicationelb.request_count{region:us-east-1}.rollup(avg,daily) */
                query?: string;
            };
            /** @description Cloudwatch configuration fields. */
            cloudwatch_fields?: {
                /** @description Integration token for the account from which you would like to fetch metrics. */
                integration_token?: string;
                stat?: string;
                region?: string;
                namespace?: string;
                metric_name?: string;
                label_dimension?: string;
                dimensions?: {
                    name?: string;
                    value?: string;
                }[];
            };
        };
        /** @description Updates an existing BusinessMetric. */
        updateBusinessMetric: {
            /** @description The title of the BusinessMetric. */
            title?: string;
            /** @description The tokens for any CostReports that use the BusinessMetric, and the unit scale. */
            cost_report_tokens_with_metadata?: {
                /** @description The token of the CostReport the BusinessMetric is attached to. */
                cost_report_token: string;
                /**
                 * @description Determines the scale of the BusinessMetric's values within the CostReport.
                 * @default per_unit
                 * @enum {string}
                 */
                unit_scale?: "per_unit" | "per_hundred" | "per_thousand" | "per_million" | "per_billion";
                /** @description Include only values with these labels in the CostReport. */
                label_filter?: string[];
            }[];
            /** @description The dates, amounts, and (optional) labels for the BusinessMetric. */
            values?: {
                /** Format: date-time */
                date: string;
                /** Format: double */
                amount: number;
                label?: string | null;
            }[];
            /** @description The dates, amounts, and (optional) labels for forecasted BusinessMetric values. */
            forecasted_values?: {
                /** Format: date-time */
                date: string;
                /** Format: double */
                amount: number;
                label?: string | null;
            }[];
            /** @description Datadog metric configuration fields */
            datadog_metric_fields?: {
                /** @description Integration token for the account from which you would like to fetch metrics. */
                integration_token?: string;
                /** @description Datadog metrics query string. e.g. sum:aws.applicationelb.request_count{region:us-east-1}.rollup(avg,daily) */
                query?: string;
            };
            /** @description Cloudwatch configuration fields. */
            cloudwatch_fields?: {
                /** @description Integration token for the account from which you would like to fetch metrics. */
                integration_token?: string;
                stat?: string;
                region?: string;
                namespace?: string;
                metric_name?: string;
                label_dimension?: string;
                dimensions?: {
                    name?: string;
                    value?: string;
                }[];
            };
        };
        /** @description CostAlertEvents model */
        CostAlertEvents: {
            links?: components["schemas"]["Links"];
            cost_alert_events: components["schemas"]["CostAlertEvent"][];
        };
        /** @description CostAlertEvent model */
        CostAlertEvent: {
            token: string;
            /**
             * @description The date and time, in UTC, the CostAlertEvent was created. ISO 8601 Formatted.
             * @example 2021-07-09T00:00:00Z
             */
            created_at: string;
            /**
             * @description The date and time, in UTC, the CostAlertEvent is sent. ISO 8601 Formatted.
             * @example 2021-07-09T00:00:00Z
             */
            triggered_at: string;
            /** @description The description of the CostAlertEvent. */
            description: string;
            /** @description The type of the CostAlertEvent. */
            alert_type: string;
            /** @description The metadata of the CostAlertEvent. */
            metadata: Record<string, any>;
            /** @description The token of the report associated with the CostAlertEvent. */
            report_token: string;
            /** @description The token of the alert associated with the CostAlertEvent. */
            alert_token: string;
        };
        /** @description CostAlerts model */
        CostAlerts: {
            links?: components["schemas"]["Links"];
            cost_alerts: components["schemas"]["CostAlert"][];
        };
        /** @description CostAlert model */
        CostAlert: {
            token: string;
            title: string;
            /** @description The email addresses that will receive the alert. */
            email_recipients: string[];
            /** @description The Slack channels that will receive the alert. Make sure your slack integration is connected at https://console.vantage.sh/settings/slack. */
            slack_channels: string[];
            /** @description The Microsoft Teams channels that will receive the alert. Make sure your teams integration is connected at https://console.vantage.sh/settings/microsoft_teams. */
            teams_channels: string[];
            /**
             * @description The date and time, in UTC, for when the alert was created. ISO 8601 Formatted.
             * @example 2023-10-01T12:00:00Z
             */
            created_at: string;
            /**
             * @description The date and time, in UTC, for when the alert was last updated. ISO 8601 Formatted.
             * @example 2023-10-01T12:00:00Z
             */
            updated_at: string;
            /** @description The ID of the organization that owns the CostAlert. */
            workspace_token: string;
            /** @description The period of time used to compare costs. Options are 'day', 'week', 'month', 'quarter'. */
            interval: string;
            /** @description The cost change threshold to alert on. */
            threshold: number;
            /** @description The unit type used to compare costs. Options are 'currency' or 'percentage'. */
            unit_type: string;
            /** @description The minimum monetary amount threshold for percentage-based alerts. When set, alerts will only trigger if the cost change meets this minimum, even if the percentage threshold is exceeded. */
            minimum_threshold: number | null;
            /** @description The tokens of the reports to alert on. */
            report_tokens: string[];
        };
        /** @description Create a new Cost Alert */
        createCostAlert: {
            /** @description The title of the Cost Alert. */
            title: string;
            /** @description The period of time used to compare costs. Options are 'day', 'week', 'month', 'quarter'. */
            interval: string;
            /**
             * Format: float
             * @description The threshold value for the Cost Alert.
             */
            threshold: number;
            /** @description The unit type used to compare costs. Options are 'currency' or 'percentage'. */
            unit_type: string;
            /** @description The token of the Workspace to add the Cost Alert to. */
            workspace_token: string;
            /** @description The tokens of the reports to alert on. */
            report_tokens: string[];
            /** @description The email recipients for the Cost Alert. */
            email_recipients?: string[];
            /** @description The Slack channels that will receive the alert. */
            slack_channels?: string[];
            /** @description The Microsoft Teams channels that will receive the alert. */
            teams_channels?: string[];
            /**
             * Format: float
             * @description The minimum monetary amount threshold for percentage-based alerts. Only applicable when unit_type is 'percentage'.
             */
            minimum_threshold?: number;
        };
        /** @description Update a Cost Alert */
        updateCostAlert: {
            /** @description The title of the Cost Alert. */
            title?: string;
            /** @description The email recipients for the Cost Alert. */
            email_recipients?: string[];
            /** @description The period of time used to compare costs. Options are 'day', 'week', 'month', 'quarter'. */
            interval?: string;
            /**
             * Format: float
             * @description The threshold value for the Cost Alert.
             */
            threshold?: number;
            /** @description The Slack channels that will receive the alert. Make sure your slack integration is connected at https://console.vantage.sh/settings/slack. */
            slack_channels?: string[];
            /** @description The Microsoft Teams channels that will receive the alert. Make sure your teams integration is connected at https://console.vantage.sh/settings/microsoft_teams. */
            teams_channels?: string[];
            /** @description The unit type used to compare costs. Options are 'currency' or 'percentage'. */
            unit_type?: string;
            /** @description The tokens of the reports to alert on. */
            report_tokens?: string[];
            /**
             * Format: float
             * @description The minimum monetary amount threshold for percentage-based alerts. Only applicable when unit_type is 'percentage'.
             */
            minimum_threshold?: number;
        };
        /** @description CostProviderAccounts model */
        CostProviderAccounts: {
            links?: components["schemas"]["Links"];
            cost_provider_accounts: components["schemas"]["CostProviderAccount"][];
        };
        CostProviderAccount: {
            /**
             * @description The display name of the provider account.
             * @example Production Account
             */
            title: string;
            /**
             * @description The provider account identifier (e.g., AWS account ID, Azure subscription ID).
             * @example 123456789012
             */
            account_id: string;
            /**
             * @description The provider-specific unique identifier.
             * @example arn:aws:organizations::123456789012:account/o-example12345/123456789012
             */
            provider_uuid: string;
            /**
             * @description The provider type (aws, azure, gcp, etc.).
             * @example aws
             */
            provider: string;
        };
        /** @description CostReports model */
        CostReports: {
            links?: components["schemas"]["Links"];
            cost_reports: components["schemas"]["CostReport"][];
        };
        /** @description CostReport model */
        CostReport: {
            token: string;
            /**
             * @description The title of the CostReport.
             * @example Production Environment
             */
            title: string;
            /** @description The token for the Folder the CostReport is a part of. */
            folder_token?: string | null;
            /** @description The tokens for the SavedFilters assigned to the CostReport. */
            saved_filter_tokens?: string[] | null;
            /** @description The tokens for the BusinessMetrics assigned to the CostReport, the unit scale, and label filter. */
            business_metric_tokens_with_metadata: components["schemas"]["AttachedBusinessMetricForCostReport"][];
            /** @description The filter applied to the CostReport. Additional documentation available at https://docs.vantage.sh/vql. */
            filter: string | null;
            /**
             * @description The grouping aggregations applied to the filtered data.
             * @example provider, service
             */
            groupings?: string | null;
            /** @description Report settings. */
            settings?: {
                /**
                 * @description Report will include credits.
                 * @default false
                 */
                include_credits?: boolean | null;
                /**
                 * @description Report will include refunds.
                 * @default false
                 */
                include_refunds?: boolean | null;
                /**
                 * @description Report will include discounts.
                 * @default true
                 */
                include_discounts?: boolean | null;
                /**
                 * @description Report will include tax.
                 * @default true
                 */
                include_tax?: boolean | null;
                /**
                 * @description Report will amortize.
                 * @default true
                 */
                amortize?: boolean | null;
                /**
                 * @description Report will show unallocated costs.
                 * @default false
                 */
                unallocated?: boolean | null;
                /**
                 * @description Report will aggregate by cost or usage.
                 * @default cost
                 */
                aggregate_by?: string | null;
                /**
                 * @description Report will show previous period costs or usage comparison.
                 * @default true
                 */
                show_previous_period?: boolean | null;
            };
            /**
             * @description The date and time, in UTC, the report was created. ISO 8601 Formatted.
             * @example 2021-07-09T00:00:00Z
             */
            created_at: string;
            /** @description The token for the Workspace the CostReport is a part of. */
            workspace_token: string;
            /**
             * @description The previous period start date of the CostReport. ISO 8601 Formatted.
             * @example 2024-06-01
             */
            previous_period_start_date?: string | null;
            /**
             * @description The previous period end date of the CostReport. ISO 8601 Formatted.
             * @example 2024-06-15
             */
            previous_period_end_date?: string | null;
            /**
             * @description The start date of the CostReports. ISO 8601 Formatted. Overwrites 'date_interval' if set.
             * @example 2024-07-01
             */
            start_date?: string | null;
            /**
             * @description The end date of the CostReports. ISO 8601 Formatted. Overwrites 'date_interval' if set.
             * @example 2024-07-15
             */
            end_date?: string | null;
            /** @description The date interval of the CostReport. */
            date_interval: string;
            /** @description The chart type of the CostReport. */
            chart_type: string;
            /** @description The date bin of the CostReport. */
            date_bin: string;
            chart_settings: components["schemas"]["ChartSettings"];
        };
        AttachedBusinessMetricForCostReport: {
            /**
             * @description The token of the BusinessMetric that's attached to the CostReport.
             * @example bsnss_mtrc_1234
             */
            business_metric_token: string;
            /**
             * @description Determines the scale of the BusinessMetric's values within a particular CostReport.
             * @example per_hundred
             * @enum {string}
             */
            unit_scale: "per_unit" | "per_hundred" | "per_thousand" | "per_million" | "per_billion";
            /** @description The labels that the BusinessMetric is filtered by within a particular CostReport. */
            label_filter?: string[] | null;
        };
        ChartSettings: {
            /** @description The metric or measure displayed on the chart’s y-axis. Possible values: 'cost', 'usage'. Defaults to 'cost'. */
            y_axis_dimension: string;
            /** @description The dimension used to group or label data along the x-axis (e.g., by date, region, or service). NOTE: Only one value is allowed at this time. Defaults to ['date']. */
            x_axis_dimension: string[];
        };
        /** @description ForecastedCosts model */
        ForecastedCosts: {
            links?: components["schemas"]["Links"];
            forecasted_costs: components["schemas"]["ForecastedCost"][];
            /**
             * @description The currency of the forecasted costs.
             * @example USD
             */
            currency: string | null;
        };
        ForecastedCost: {
            links?: components["schemas"]["Links"];
            /**
             * @description The date the forecasted cost is projected to accrue. ISO 8601 Formatted.
             * @example 2035-09-05+00:00
             */
            date: string;
            /**
             * @description The amount of the forecasted cost.
             * @example 4.25
             */
            amount: string;
            /**
             * @description The cost provider which incurred the cost. Will be 'all' for all combined providers.
             * @example aws
             * @enum {string}
             */
            provider: "aws" | "azure" | "gcp" | "snowflake" | "databricks" | "mongo" | "datadog" | "fastly" | "new_relic" | "opencost" | "open_ai" | "oracle" | "confluent" | "planetscale" | "coralogix" | "kubernetes" | "custom_provider" | "github" | "linode" | "grafana" | "clickhouse" | "temporal" | "twilio" | "azure_csp" | "kubernetes_agent" | "anthropic" | "anyscale" | "cursor" | "elastic" | "vercel" | "all";
            /**
             * @description The service for the forecasted cost. Will be 'all' for all combined services
             * @example Amazon Elastic Compute Cloud - Compute
             */
            service: string;
        };
        /** @description Create a CostReport. */
        createCostReport: {
            /** @description The title of the CostReport. */
            title: string;
            /** @description The token of the Workspace to add the Cost Report to. Ignored if 'folder_token' is set. Required if the API token is associated with multiple Workspaces. */
            workspace_token?: string;
            /** @description Grouping values for aggregating costs on the report. Valid groupings: account_id, billing_account_id, charge_type, cost_category, cost_subcategory, provider, region, resource_id, service, tagged, tag:<tag_value>. If providing multiple groupings, join as comma separated values: groupings=provider,service,region */
            groupings?: string;
            /** @description The filter query language to apply to the CostReport. Additional documentation available at https://docs.vantage.sh/vql. */
            filter?: string;
            /** @description The tokens of the SavedFilters to apply to the CostReport. */
            saved_filter_tokens?: string[];
            /** @description The tokens for any BusinessMetrics to attach to the CostReport, and the unit scale. */
            business_metric_tokens_with_metadata?: {
                /** @description The token of the BusinessMetric to attach to the CostReport. */
                business_metric_token: string;
                /**
                 * @description Determines the scale of the BusinessMetric's values within the CostReport.
                 * @default per_unit
                 * @enum {string}
                 */
                unit_scale?: "per_unit" | "per_hundred" | "per_thousand" | "per_million" | "per_billion";
                /** @description Include only values with these labels in the CostReport. */
                label_filter?: string[];
            }[];
            /** @description The token of the Folder to add the CostReport to. Determines the Workspace the report is assigned to. */
            folder_token?: string;
            /** @description Report settings. */
            settings?: {
                /**
                 * @description Report will include credits.
                 * @default false
                 */
                include_credits?: boolean;
                /**
                 * @description Report will include refunds.
                 * @default false
                 */
                include_refunds?: boolean;
                /**
                 * @description Report will include discounts.
                 * @default true
                 */
                include_discounts?: boolean;
                /**
                 * @description Report will include tax.
                 * @default true
                 */
                include_tax?: boolean;
                /**
                 * @description Report will amortize.
                 * @default true
                 */
                amortize?: boolean;
                /**
                 * @description Report will show unallocated costs.
                 * @default false
                 */
                unallocated?: boolean;
                /**
                 * @description Report will aggregate by cost or usage.
                 * @default cost
                 */
                aggregate_by?: string;
                /**
                 * @description Report will show previous period costs or usage comparison.
                 * @default true
                 */
                show_previous_period?: boolean;
            };
            /** @description The previous period start date of the CostReport. ISO 8601 Formatted. */
            previous_period_start_date?: string;
            /** @description The previous period end date of the CostReport. ISO 8601 Formatted. Required when previous_period_start_date is provided. */
            previous_period_end_date: string;
            /** @description The start date of the CostReport. ISO 8601 Formatted. Incompatible with 'date_interval' parameter. */
            start_date?: string;
            /** @description The end date of the CostReport. ISO 8601 Formatted. Required when start_date is provided. Incompatible with 'date_interval' parameter. */
            end_date: string;
            /**
             * @description The date interval of the CostReport. Incompatible with 'start_date' and 'end_date' parameters. Defaults to 'this_month' if start_date and end_date are not provided.
             * @enum {string}
             */
            date_interval?: "this_month" | "last_7_days" | "last_30_days" | "last_month" | "last_3_months" | "last_6_months" | "custom" | "last_12_months" | "last_24_months" | "last_36_months" | "next_month" | "next_3_months" | "next_6_months" | "next_12_months" | "year_to_date" | "last_3_days" | "last_14_days";
            /**
             * @description The chart type of the CostReport.
             * @default line
             * @enum {string}
             */
            chart_type?: "area" | "line" | "pie" | "bar" | "multi_bar";
            /**
             * @description The date bin of the CostReport.
             * @default cumulative
             * @enum {string}
             */
            date_bin?: "cumulative" | "day" | "week" | "month" | "quarter";
            /** @description Report chart settings. */
            chart_settings?: {
                /** @description The dimension used to group or label data along the x-axis (e.g., by date, region, or service). NOTE: Only one value is allowed at this time. Defaults to ['date']. */
                x_axis_dimension?: string[];
                /** @description The metric or measure displayed on the chart’s y-axis. Possible values: 'cost', 'usage'. Defaults to 'cost'. */
                y_axis_dimension?: string;
            };
        };
        /** @description Update a CostReport. */
        updateCostReport: {
            /** @description The title of the CostReport. */
            title?: string;
            /** @description Grouping values for aggregating costs on the report. Valid groupings: account_id, billing_account_id, charge_type, cost_category, cost_subcategory, provider, region, resource_id, service, tagged, tag:<tag_value>. If providing multiple groupings, join as comma separated values: groupings=provider,service,region */
            groupings?: string;
            /** @description The filter query language to apply to the CostReport. Additional documentation available at https://docs.vantage.sh/vql. */
            filter?: string;
            /** @description The tokens of the SavedFilters to apply to the CostReport. */
            saved_filter_tokens?: string[];
            /** @description The tokens for any BusinessMetrics to attach to the CostReport, and the unit scale. */
            business_metric_tokens_with_metadata?: {
                /** @description The token of the BusinessMetric to attach to the CostReport. */
                business_metric_token: string;
                /**
                 * @description Determines the scale of the BusinessMetric's values within the CostReport.
                 * @default per_unit
                 * @enum {string}
                 */
                unit_scale?: "per_unit" | "per_hundred" | "per_thousand" | "per_million" | "per_billion";
                /** @description Include only values with these labels in the CostReport. */
                label_filter?: string[];
            }[];
            /** @description The token of the Folder to add the CostReport to. Determines the Workspace the report is assigned to. */
            folder_token?: string;
            /** @description Report settings. */
            settings?: {
                /** @description Report will include credits. */
                include_credits?: boolean;
                /** @description Report will include refunds. */
                include_refunds?: boolean;
                /** @description Report will include discounts. */
                include_discounts?: boolean;
                /** @description Report will include tax. */
                include_tax?: boolean;
                /** @description Report will amortize. */
                amortize?: boolean;
                /** @description Report will show unallocated costs. */
                unallocated?: boolean;
                /** @description Report will aggregate by cost or usage. */
                aggregate_by?: string;
                /** @description Report will show previous period costs or usage comparison. */
                show_previous_period?: boolean;
            };
            /** @description Report chart settings. */
            chart_settings?: {
                /** @description The dimension used to group or label data along the x-axis (e.g., by date, region, or service). NOTE: Only one value is allowed at this time. Defaults to ['date']. */
                x_axis_dimension?: string[];
                /** @description The metric or measure displayed on the chart’s y-axis. Possible values: 'cost', 'usage'. Defaults to 'cost'. */
                y_axis_dimension?: string;
            };
            /** @description The previous period start date of the CostReport. ISO 8601 Formatted. */
            previous_period_start_date?: string;
            /** @description The previous period end date of the CostReport. ISO 8601 Formatted. Required when previous_period_start_date is provided. */
            previous_period_end_date?: string;
            /** @description The start date of the CostReport. ISO 8601 Formatted. Incompatible with 'date_interval' parameter. */
            start_date?: string;
            /** @description The end date of the CostReport. ISO 8601 Formatted. Required when start_date is provided. Incompatible with 'date_interval' parameter. */
            end_date?: string;
            /**
             * @description The date interval of the CostReport. Incompatible with 'start_date' and 'end_date' parameters. Defaults to 'this_month' if start_date and end_date are not provided.
             * @enum {string}
             */
            date_interval?: "this_month" | "last_7_days" | "last_30_days" | "last_month" | "last_3_months" | "last_6_months" | "custom" | "last_12_months" | "last_24_months" | "last_36_months" | "next_month" | "next_3_months" | "next_6_months" | "next_12_months" | "year_to_date" | "last_3_days" | "last_14_days";
            /**
             * @description The chart type of the CostReport.
             * @default line
             * @enum {string}
             */
            chart_type?: "area" | "line" | "pie" | "bar" | "multi_bar";
            /**
             * @description The date bin of the CostReport.
             * @default cumulative
             * @enum {string}
             */
            date_bin?: "cumulative" | "day" | "week" | "month" | "quarter";
        };
        /** @description Generate a DataExport of costs. */
        createCostExport: {
            /** @description The CostReport token. */
            cost_report_token?: string;
            /** @description The VQL filter to apply to the costs. If this is supplied you do not need cost_report_token. */
            filter?: string;
            /** @description The token of the Workspace to query costs from. Ignored if 'cost_report_token' is set. Required if the API token is associated with multiple Workspaces. */
            workspace_token?: string;
            /** @description First date you would like to filter costs from. ISO 8601 formatted. */
            start_date?: string;
            /** @description Last date you would like to filter costs to. ISO 8601 formatted. */
            end_date?: string;
            /**
             * @description The date bin of the costs. Defaults to the report's default or day.
             * @enum {string}
             */
            date_bin?: "day" | "week" | "month" | "quarter";
            /**
             * @description The schema of the data export.
             * @default vntg
             * @enum {string}
             */
            schema?: "vntg" | "focus";
        };
        /** @description Costs model */
        Costs: {
            links?: components["schemas"]["Links"];
            total_cost: components["schemas"]["CostPartial"];
            /** @description The sum of all usage for the CostReport for the requested period, rounded to 2 decimal places, grouped by usage unit. */
            total_usage?: components["schemas"]["UsagePartial"][];
            costs: components["schemas"]["Cost"][];
        };
        CostPartial: {
            /**
             * @description The amount of the cost.
             * @example 4.25
             */
            amount: string;
            /**
             * @description The currency of the cost.
             * @example USD
             */
            currency: string;
        };
        UsagePartial: {
            /**
             * @description The sum of the usage.
             * @example 4.25
             */
            amount: string;
            /**
             * @description The unit of the usage.
             * @example USD
             */
            unit: string;
        };
        /** @description Cost model */
        Cost: {
            links?: components["schemas"]["Links"];
            /**
             * @description The date the cost was accrued. ISO 8601 Formatted.
             * @example 2023-09-05+00:00
             */
            accrued_at: string;
            /**
             * @description The amount of the cost.
             * @example 4.25
             */
            amount: string;
            /**
             * @description The currency of the cost.
             * @example USD
             */
            currency: string;
            /** @description The usage amount and unit incurred by the cost. */
            usage?: Record<string, any> | null;
            /**
             * @description The cost provider which incurred the cost.
             * @example aws
             * @enum {string|null}
             */
            provider?: "aws" | "azure" | "gcp" | "snowflake" | "databricks" | "mongo" | "datadog" | "fastly" | "new_relic" | "opencost" | "open_ai" | "oracle" | "confluent" | "planetscale" | "coralogix" | "kubernetes" | "custom_provider" | "github" | "linode" | "grafana" | "clickhouse" | "temporal" | "twilio" | "azure_csp" | "kubernetes_agent" | "anthropic" | "anyscale" | "cursor" | "elastic" | "vercel" | null;
            /**
             * @description The cost provider's billing account id that incurred the cost.
             * @example 9109237192
             */
            billing_account_id?: string | null;
            /**
             * @description The cost provider's account id that incurred the cost.
             * @example 9109237192
             */
            account_id?: string | null;
            /**
             * @description The service which incurred the cost.
             * @example Amazon Elastic Compute Cloud - Compute
             */
            service?: string | null;
            /**
             * @description The region which incurred the cost.
             * @example us-east-1
             */
            region?: string | null;
            /**
             * @description The resource id which incurred the cost.
             * @example arn:aws:ec2:us-east-1:123456789012:instance/i-1234567890abcdef0
             */
            resource_id?: string | null;
            /**
             * @description The tag attached to the cost that was incurred.
             *     DEPRECATED: does not support multiple tags.
             * @example production
             */
            tag?: string | null;
            /** @description The tag pairs attached to the cost that was incurred. */
            tags?: string[] | null;
            /**
             * @description The category for the cost.
             * @example Data Transfer
             */
            cost_category?: string | null;
            /**
             * @description The subcategory for the cost.
             * @example DataTransfer-Regional-Bytes
             */
            cost_subcategory?: string | null;
            /**
             * @description The segment name for segment report costs.
             * @example Engineering
             */
            segment?: string | null;
        };
        /** @description Dashboards model */
        Dashboards: {
            links?: components["schemas"]["Links"];
            dashboards: components["schemas"]["Dashboard"][];
        };
        /** @description Dashboard model */
        Dashboard: {
            /** @example dshbrd_abcd1234567890 */
            token: string;
            /**
             * @description The title of the Dashboard.
             * @example AWS Dashboard
             */
            title: string;
            widgets: components["schemas"]["DashboardWidget"][];
            /** @description The tokens of the Saved Filters used in the Dashboard. */
            saved_filter_tokens: string[];
            /**
             * @description Determines how to group costs in the Dashboard.
             * @enum {string|null}
             */
            date_bin: "cumulative" | "day" | "week" | "month" | null;
            /**
             * @description Determines the date range for Reports in the Dashboard. Guaranteed to be set to 'custom' if 'start_date' and 'end_date' are set.
             * @enum {string|null}
             */
            date_interval: "this_month" | "last_7_days" | "last_30_days" | "last_month" | "last_3_months" | "last_6_months" | "custom" | "last_12_months" | "last_24_months" | "last_36_months" | "next_month" | "next_3_months" | "next_6_months" | "next_12_months" | "year_to_date" | "last_3_days" | "last_14_days" | null;
            /**
             * @description The start date for the date range for Reports in the Dashboard. ISO 8601 Formatted. Overwrites 'date_interval' if set.
             * @example 2023-08-04
             */
            start_date?: string | null;
            /**
             * @description The end date for the date range for Reports in the Dashboard. ISO 8601 Formatted. Overwrites 'date_interval' if set.
             * @example 2023-09-04
             */
            end_date?: string | null;
            /**
             * @description The date and time, in UTC, the Dashboard was created. ISO 8601 Formatted.
             * @example 2023-08-04T00:00:00Z
             */
            created_at: string;
            /**
             * @description The date and time, in UTC, the Dashboard was created. ISO 8601 Formatted.
             * @example 2023-08-04T00:00:00Z
             */
            updated_at: string;
            /**
             * @description The token for the Workspace the Dashboard is a part of.
             * @example wrkspc_abcd1234567890
             */
            workspace_token: string;
        };
        DashboardWidget: {
            /** @example rprt_a12b3c */
            widgetable_token: string;
            /**
             * @description The title of the Widget.
             * @example My Widget
             */
            title: string;
            settings: components["schemas"]["DashboardWidgetSettings"];
        };
        DashboardWidgetSettings: {
            /** @enum {string} */
            display_type: "table" | "chart";
        };
        /** @description Create a Dashboard. */
        createDashboard: {
            /** @description The title of the Dashboard. */
            title: string;
            /** @description The widgets to add to the Dashboard. Currently supports CostReport, ResourceReport, KubernetesEfficiencyReport, and FinancialCommitmentReport. */
            widgets?: {
                /** @description The token of the represented Resource. */
                widgetable_token: string;
                /** @description The title of the Widget (defaults to the title of the Resource). */
                title?: string;
                /** @description The settings for the DashboardWidget. */
                settings?: {
                    /** @enum {string} */
                    display_type: "table" | "chart";
                };
            }[];
            /** @description The tokens of the Saved Filters used in the Dashboard. */
            saved_filter_tokens?: string[];
            /**
             * @description Determines how to group costs in the Dashboard.
             * @enum {string}
             */
            date_bin?: "cumulative" | "day" | "week" | "month";
            /**
             * @description Determines the date range in the Dashboard. Incompatible with 'start_date' and 'end_date' parameters.
             * @enum {string}
             */
            date_interval?: "this_month" | "last_7_days" | "last_30_days" | "last_month" | "last_3_months" | "last_6_months" | "custom" | "last_12_months" | "last_24_months" | "last_36_months" | "next_month" | "next_3_months" | "next_6_months" | "next_12_months" | "year_to_date" | "last_3_days" | "last_14_days";
            /** @description The start date for the date range for costs in the Dashboard. ISO 8601 Formatted. Incompatible with 'date_interval' parameter. */
            start_date?: string;
            /** @description The end date for the date range for costs in the Dashboard. ISO 8601 Formatted. Incompatible with 'date_interval' parameter. */
            end_date?: string;
            /** @description The token of the Workspace to add the Dashboard to. Required if the API token is associated with multiple Workspaces. */
            workspace_token?: string;
        };
        /** @description Update a Dashboard. */
        updateDashboard: {
            /** @description The title of the Dashboard. */
            title?: string;
            /** @description The widgets to add to the Dashboard. Currently supports CostReport, ResourceReport, KubernetesEfficiencyReport, and FinancialCommitmentReport. */
            widgets?: {
                /** @description The token of the represented Resource. */
                widgetable_token: string;
                /** @description The title of the Widget (defaults to the title of the Resource). */
                title?: string;
                /** @description The settings for the DashboardWidget. */
                settings?: {
                    /** @enum {string} */
                    display_type: "table" | "chart";
                };
            }[];
            /** @description The tokens of the Saved Filters used in the Dashboard. */
            saved_filter_tokens?: string[];
            /**
             * @description Determines how to group costs in the Dashboard.
             * @enum {string}
             */
            date_bin?: "cumulative" | "day" | "week" | "month";
            /**
             * @description Determines the date range in the Dashboard. Incompatible with 'start_date' and 'end_date' parameters.
             * @enum {string}
             */
            date_interval?: "this_month" | "last_7_days" | "last_30_days" | "last_month" | "last_3_months" | "last_6_months" | "custom" | "last_12_months" | "last_24_months" | "last_36_months" | "next_month" | "next_3_months" | "next_6_months" | "next_12_months" | "year_to_date" | "last_3_days" | "last_14_days" | "";
            /** @description The start date for the date range for costs in the Dashboard. ISO 8601 Formatted. Incompatible with 'date_interval' parameter. */
            start_date?: string;
            /** @description The end date for the date range for costs in the Dashboard. ISO 8601 Formatted. Incompatible with 'date_interval' parameter. */
            end_date?: string;
            /** @description The token of the Workspace the Dashboard belongs to. Required if the API token is associated with multiple Workspaces. */
            workspace_token?: string;
        };
        /** @description DataExport model */
        DataExport: {
            /** @example dta_xprt_abcd1234567890 */
            token: string;
            /** @example pending */
            status: string;
            /** @example 2025-03-20T12:00:00Z */
            created_at: string;
            /** @example cost_report */
            export_type: string;
            manifest: components["schemas"]["DataExportManifest"];
            attributes: Record<string, any>;
        };
        DataExportManifest: {
            files: string[];
            /** @example 2025-03-20T12:00:00Z */
            completed_at: string | null;
            /** @example 2025-03-20T12:00:00Z */
            valid_until: string | null;
        };
        /** @description ExchangeRates model */
        ExchangeRates: {
            links?: components["schemas"]["Links"];
            exchange_rates: components["schemas"]["exchange_rate"][];
        };
        exchange_rate: {
            base_currency_code: string;
            currency_code: string;
            rate: string;
            effective_date: string;
            updated_at: string;
        };
        /** @description FinancialCommitmentReports model */
        FinancialCommitmentReports: {
            links?: components["schemas"]["Links"];
            financial_commitment_reports: components["schemas"]["FinancialCommitmentReport"][];
        };
        /** @description FinancialCommitmentReport model */
        FinancialCommitmentReport: {
            token: string;
            /**
             * @description The title of the FinancialCommitmentReport.
             * @example Acme123 Financial Commitment Report
             */
            title: string;
            /** @description Indicates whether the FinancialCommitmentReport is the default report. */
            default: boolean;
            /**
             * @description The date and time, in UTC, the report was created. ISO 8601 Formatted.
             * @example 2024-03-19T00:00:00Z
             */
            created_at: string;
            /** @description The token for the Workspace the FinancialCommitmentReport is a part of. */
            workspace_token: string;
            /** @description The token for the User who created this FinancialCommitmentReport. */
            user_token?: string | null;
            /**
             * @description The start date for the FinancialCommitmentReport. Only set for custom date ranges. ISO 8601 Formatted.
             * @example 2024-03-01
             */
            start_date: string | null;
            /**
             * @description The end date for the FinancialCommitmentReport. Only set for custom date ranges. ISO 8601 Formatted.
             * @example 2024-03-20
             */
            end_date: string | null;
            /**
             * @description The date range for the FinancialCommitmentReport. Only present if a custom date range is not specified.
             * @example last_month
             */
            date_interval: string | null;
            /**
             * @description How costs are grouped and displayed in the FinancialCommitmentReport. Possible values: day, week, month.
             * @example month
             */
            date_bucket: string;
            /**
             * @description The grouping aggregations applied to the filtered data.
             * @example cost_type, tag:account
             */
            groupings: string | null;
            /**
             * @description The scope for the costs. Possible values: discountable, all.
             * @example discountable
             */
            on_demand_costs_scope: string;
            /** @description The filter applied to the FinancialCommitmentReport. Additional documentation available at https://docs.vantage.sh/vql. */
            filter: string | null;
        };
        /** @description Create a FinancialCommitmentReport. */
        createFinancialCommitmentReport: {
            /** @description The Workspace in which the FinancialCommitmentReport will be created. */
            workspace_token: string;
            /** @description The title of the FinancialCommitmentReport. */
            title: string;
            /** @description The filter query language to apply to the FinancialCommitmentReport. Additional documentation available at https://docs.vantage.sh/vql. */
            filter?: string;
            /**
             * Format: date
             * @description The start date of the FinancialCommitmentReport. YYYY-MM-DD formatted. Incompatible with 'date_interval' parameter.
             * @example 2024-03-01
             */
            start_date?: string;
            /**
             * Format: date
             * @description The end date of the FinancialCommitmentReport. YYYY-MM-DD formatted. Incompatible with 'date_interval' parameter.
             * @example 2024-03-01
             */
            end_date?: string;
            /**
             * @description The date interval of the FinancialCommitmentReport. Unless 'custom' is used, this is incompatible with 'start_date' and 'end_date' parameters. Defaults to 'last_3_months'.
             * @enum {string}
             */
            date_interval?: "this_month" | "last_7_days" | "last_30_days" | "last_month" | "last_3_months" | "last_6_months" | "custom" | "last_12_months" | "last_24_months" | "last_36_months" | "year_to_date" | "last_3_days" | "last_14_days";
            /**
             * @description The date bucket of the FinancialCommitmentReport.
             * @enum {string}
             */
            date_bucket?: "hour" | "day" | "week" | "month" | "quarter";
            /**
             * @description The scope for the costs. Possible values: discountable, all.
             * @enum {string}
             */
            on_demand_costs_scope?: "discountable" | "all";
            /** @description Grouping values for aggregating costs on the FinancialCommitmentReport. Valid groupings: cost_type, commitment_type, commitment_id, service, resource_account_id, provider_account_id, region, cost_category, cost_sub_category, instance_type, tag, tag:<label_name>. */
            groupings?: string[];
        };
        /** @description Update a FinancialCommitmentReport. */
        updateFinancialCommitmentReport: {
            /** @description The title of the FinancialCommitmentReport. */
            title?: string;
            /** @description The filter query language to apply to the FinancialCommitmentReport. Additional documentation available at https://docs.vantage.sh/vql. */
            filter?: string;
            /**
             * Format: date
             * @description The start date of the FinancialCommitmentReport. YYYY-MM-DD formatted. Incompatible with 'date_interval' parameter.
             * @example 2024-03-01
             */
            start_date?: string;
            /**
             * Format: date
             * @description The end date of the FinancialCommitmentReport. YYYY-MM-DD formatted. Incompatible with 'date_interval' parameter.
             * @example 2024-03-01
             */
            end_date?: string;
            /**
             * @description The date interval of the FinancialCommitmentReport. Unless 'custom' is used, this is incompatible with 'start_date' and 'end_date' parameters. Defaults to 'last_3_months'.
             * @enum {string}
             */
            date_interval?: "this_month" | "last_7_days" | "last_30_days" | "last_month" | "last_3_months" | "last_6_months" | "custom" | "last_12_months" | "last_24_months" | "last_36_months" | "year_to_date" | "last_3_days" | "last_14_days";
            /**
             * @description The date bucket of the FinancialCommitmentReport.
             * @enum {string}
             */
            date_bucket?: "hour" | "day" | "week" | "month" | "quarter";
            /**
             * @description The scope for the costs. Possible values: discountable, all.
             * @enum {string}
             */
            on_demand_costs_scope?: "discountable" | "all";
            /** @description Grouping values for aggregating costs on the FinancialCommitmentReport. Valid groupings: cost_type, commitment_type, commitment_id, service, resource_account_id, provider_account_id, region, cost_category, cost_sub_category, instance_type, tag, tag:<label_name>. */
            groupings?: string[];
        };
        /** @description FinancialCommitments model */
        FinancialCommitments: {
            links?: components["schemas"]["Links"];
            financial_commitments: components["schemas"]["FinancialCommitment"][];
        };
        FinancialCommitment: {
            /**
             * @description The commitment type (eg Savings Plan or Reserved Instance).
             * @example Savings Plan
             */
            commitment_type: string;
            /**
             * @description The service this commitment applies towards.
             * @example Compute
             */
            service: string;
            /**
             * @description The account for this financial commitment.
             * @example 113074892135
             */
            account: string;
            /**
             * @description The type of financial commitment.
             * @example m5.large
             */
            type: string;
            /**
             * Format: int32
             * @description The number of instances for the financial commitment.
             * @example 4
             */
            amount: number | null;
            /**
             * @description The duration in years of the financial commitment.
             * @example 3 Year
             */
            term: string | null;
            /**
             * @description The type of payment for the financial commitment.
             * @example No upfront
             */
            payment_type: string | null;
            /**
             * @description The region for the financial commitment.
             * @example us-east-1
             */
            region: string | null;
            /**
             * @description The purchase date of the financial commitment. ISO 8601 Formatted.
             * @example 2023-08-30
             */
            purchase_date: string;
            /**
             * @description The expiration date of the financial commitment. ISO 8601 Formatted.
             * @example 2026-08-30
             */
            expiration_date: string;
            /**
             * @description The amount of the financial commitment.
             * @example $2.18
             */
            commitment: string;
            /**
             * @description The status of the financial commitment (e.g. active vs expired).
             * @example active
             */
            status: string | null;
            /**
             * @description The date and time, in UTC, the Financial Commitment was created. ISO 8601 Formatted.
             * @example 2024-03-19T00:00:00Z
             */
            created_at: string;
            /** @description The token for the Workspace the FinancialCommitment is a part of. */
            workspace_token: string;
        };
        /** @description Folders model */
        Folders: {
            links?: components["schemas"]["Links"];
            folders: components["schemas"]["Folder"][];
        };
        /** @description Folder model */
        Folder: {
            token: string;
            /**
             * @description The title of the Folder.
             * @example Platform Team Reports
             */
            title: string | null;
            /** @description The token for the parent Folder, if any. */
            parent_folder_token?: string | null;
            /** @description The tokens for the SavedFilters assigned to the Folder. */
            saved_filter_tokens: string[];
            /**
             * @description The date and time, in UTC, the Folder was created. ISO 8601 Formatted.
             * @example 2023-08-04T00:00:00Z
             */
            created_at: string;
            /**
             * @description The date and time, in UTC, the Folder was last updated at. ISO 8601 Formatted.
             * @example 2023-08-04T00:00:00Z
             */
            updated_at: string;
            /** @description The token for the Workspace the Folder is a part of. */
            workspace_token: string;
        };
        /** @description Create a Folder for CostReports. */
        createFolder: {
            /** @description The title of the Folder. */
            title: string;
            /** @description The token of the parent Folder. */
            parent_folder_token?: string;
            /** @description The tokens of the SavedFilters to apply to any Cost Report contained within the Folder. */
            saved_filter_tokens?: string[];
            /** @description The token of the Workspace to add the Folder to. Ignored if 'parent_folder_token' is set. Required if the API token is associated with multiple Workspaces. */
            workspace_token?: string;
        };
        /** @description Update a Folder for CostReports. */
        updateFolder: {
            /** @description The title of the Folder. */
            title?: string;
            /** @description The token of the parent Folder. */
            parent_folder_token?: string;
            /** @description The tokens of the SavedFilters to apply to any Cost Report contained within the Folder. */
            saved_filter_tokens?: string[];
        };
        /** @description Integrations model */
        Integrations: {
            links?: components["schemas"]["Links"];
            integrations: components["schemas"]["Integration"][];
        };
        /** @description Integration model */
        Integration: {
            token: string;
            /**
             * @description The name of the Integration.
             * @example AWS
             */
            provider: string;
            /**
             * @description The account identifier. For GCP this is the billing Account ID, for Azure this is the account ID
             * @example 011389-EF4C3E-3ED7AE
             */
            account_identifier: string | null;
            /**
             * @description The status of the Integration. Can be 'connected', 'error', 'pending', 'importing', 'imported', or 'disconnected'.
             * @example imported
             * @enum {string}
             */
            status: "connected" | "error" | "pending" | "importing" | "imported" | "disconnected";
            /**
             * @description The date and time, in UTC, when the Integration was last updated. ISO 8601 Formatted.
             * @example 2023-08-04T00:00:00Z
             */
            last_updated?: string | null;
            /** @description The tokens for any Workspaces that the account belongs to. */
            workspace_tokens: string[];
            /**
             * @description The date and time, in UTC, the Integration was created. ISO 8601 Formatted.
             * @example 2023-08-04T00:00:00Z
             */
            created_at: string;
            /** @description The tokens for any Managed Accounts that are associated with the Integration. */
            managed_account_tokens: string[];
        };
        /** @description Create a Custom Provider Integration */
        createCustomProviderIntegration: {
            /** @description Name of the Custom Provider Integration. */
            name: string;
            /** @description Description of the Custom Provider Integration. */
            description?: string;
        };
        /** @description UserCostsUpload model */
        UserCostsUpload: {
            /**
             * @description The token of the UserCostsUpload.
             * @example usr_csts_upld_1234
             */
            token: string;
            /**
             * @description The filename of the uploaded costs UserCostsUpload.
             * @example usr_csts_upld_1234.parquet
             */
            filename: string;
            /**
             * @description The total amount of the costs in the UserCostsUpload.
             * @example 1234.56
             */
            amount: string;
            /**
             * @description The start date of the costs in the UserCostsUpload.
             * @example 2021-01-01
             */
            start_date: string;
            /**
             * @description The end date of the costs in the UserCostsUpload.
             * @example 2021-01-31
             */
            end_date: string;
            /**
             * @description Import status of the UserCostsUpload.
             * @example processing
             */
            import_status: string;
            /**
             * @description The token of the Creator of the UserCostsUpload.
             * @example usr_1234
             */
            created_by_token: string;
            /**
             * @description When the UserCostsUpload was uploaded.
             * @example 2021-01-01T00:00:00Z
             */
            created_at: string;
        };
        /** @description UserCostsUploads model */
        UserCostsUploads: {
            links?: components["schemas"]["Links"];
            user_costs_uploads: components["schemas"]["UserCostsUpload"][];
        };
        /** @description Create a GCP Integration */
        createGCPIntegration: {
            /** @description GCP billing account ID. */
            billing_account_id: string;
            /** @description GCP project ID. */
            project_id: string;
            /** @description BigQuery dataset name. */
            dataset_name: string;
        };
        /** @description Create an Azure Integration */
        createAzureIntegration: {
            /** @description Azure AD Tenant ID. */
            tenant: string;
            /** @description Service Principal Application ID. */
            app_id: string;
            /** @description Service Principal Password. */
            password: string;
        };
        /** @description Update an Integration. */
        updateIntegration: {
            /** @description The Workspace tokens to associate to the Integration. */
            workspace_tokens?: string[];
        };
        /** @description Invoices model */
        Invoices: {
            links?: components["schemas"]["Links"];
            invoices: components["schemas"]["Invoice"][];
        };
        /** @description Invoice model */
        Invoice: {
            token: string;
            /** @description Sequential invoice number for the MSP account */
            invoice_number: string;
            /** @description Total amount for the invoice period */
            total: string | null;
            /** @description Start date of the billing period. ISO 8601 formatted. */
            billing_period_start: string;
            /** @description End date of the billing period. ISO 8601 formatted. */
            billing_period_end: string;
            /** @description Current status of the invoice */
            status: string;
            /** @description The date and time, in UTC, the invoice was created. ISO 8601 formatted. */
            created_at: string;
            /** @description The date and time, in UTC, the invoice was last updated. ISO 8601 formatted. */
            updated_at: string;
            /** @description Token of the managed account this invoice belongs to */
            account_token: string;
            /** @description Name of the managed account this invoice belongs to */
            account_name: string;
            /** @description Token of the MSP account that owns this invoice */
            msp_account_token: string;
        };
        /** @description Create an invoice (MSP accounts only). */
        createInvoice: {
            /** @description Start date of billing period (YYYY-MM-DD) */
            billing_period_start: string;
            /** @description End date of billing period (YYYY-MM-DD) */
            billing_period_end: string;
            /** @description Token of the managed account to invoice */
            account_token: string;
        };
        /** @description Download invoice file (PDF or CSV). */
        downloadInvoice: {
            /**
             * @description Type of file to download (pdf or csv)
             * @enum {string}
             */
            file_type: "pdf" | "csv";
        };
        /** @description SendInvoice model */
        SendInvoice: {
            recipients: string[];
        };
        /** @description CostReportUrl model */
        CostReportUrl: {
            /**
             * @description The URL of the cost report.
             * @example https://example.com/cost_report.pdf
             */
            cost_report_url: string;
        };
        /** @description KubernetesEfficiencyReports model */
        KubernetesEfficiencyReports: {
            links?: components["schemas"]["Links"];
            kubernetes_efficiency_reports: components["schemas"]["KubernetesEfficiencyReport"][];
        };
        /** @description KubernetesEfficiencyReport model */
        KubernetesEfficiencyReport: {
            token: string;
            /**
             * @description The title of the KubernetesEfficiencyReport.
             * @example Acme123 Kubernetes Efficiency Metrics
             */
            title: string;
            /** @description Indicates whether the KubernetesEfficiencyReport is the default report. */
            default: boolean;
            /**
             * @description The date and time, in UTC, the report was created. ISO 8601 Formatted.
             * @example 2024-03-19T00:00:00Z
             */
            created_at: string;
            /** @description The token for the Workspace the KubernetesEfficiencyReport is a part of. */
            workspace_token: string;
            /** @description The token for the User who created this KubernetesEfficiencyReport. */
            user_token?: string | null;
            /**
             * @description The start date for the KubernetesEfficiencyReport. Only set for custom date ranges. ISO 8601 Formatted.
             * @example 2024-03-01
             */
            start_date: string | null;
            /**
             * @description The end date for the KubernetesEfficiencyReport. Only set for custom date ranges. ISO 8601 Formatted.
             * @example 2024-03-20
             */
            end_date: string | null;
            /**
             * @description The date range for the KubernetesEfficiencyReport. Only present if a custom date range is not specified.
             * @example last_month
             */
            date_interval: string | null;
            /**
             * @description How costs are grouped and displayed in the KubernetesEfficiencyReport. Possible values: day, week, month.
             * @example month
             */
            date_bucket: string;
            /** @description How costs are aggregated by. Possible values: idle_cost, amount, cost_efficiency. */
            aggregated_by: string;
            /**
             * @description Grouping values for aggregating costs on the KubernetesEfficiencyReport. Valid groupings: cluster_id, namespace, labeled, category, pod, label, label:<label_name>.
             * @example cluster_id, namespace
             */
            groupings: string | null;
            /** @description The filter applied to the KubernetesEfficiencyReport. Additional documentation available at https://docs.vantage.sh/vql. */
            filter: string | null;
        };
        /** @description Generate a DataExport of Kubernetes efficiency data. */
        createKubernetesEfficiencyReportExport: {
            /** @description The KubernetesEfficiencyReport token. If not provided, the default report for the workspace will be used. */
            kubernetes_efficiency_report_token?: string;
            /** @description The filter query language to apply to the KubernetesEfficiencyReport. Additional documentation available at https://docs.vantage.sh/vql. */
            filter?: string;
            /** @description The token of the Workspace to export data from. Ignored if 'kubernetes_efficiency_report_token' is set. Required if the API token is associated with multiple Workspaces. */
            workspace_token?: string;
            /** @description First date you would like to filter data from. ISO 8601 formatted. */
            start_date?: string;
            /** @description Last date you would like to filter data to. ISO 8601 formatted. */
            end_date?: string;
            /**
             * @description The date bin of the data. Defaults to the report's default or day.
             * @enum {string}
             */
            date_bin?: "day" | "week" | "month" | "quarter";
        };
        /** @description Create a KubernetesEfficiencyReport. */
        createKubernetesEfficiencyReport: {
            /** @description The Workspace in which the KubernetesEfficiencyReport will be created. */
            workspace_token: string;
            /** @description The title of the KubernetesEfficiencyReport. */
            title: string;
            /** @description The filter query language to apply to the KubernetesEfficiencyReport. Additional documentation available at https://docs.vantage.sh/vql. */
            filter?: string;
            /**
             * Format: date
             * @description The start date of the KubernetesEfficiencyReport. ISO 8601 Formatted. Incompatible with 'date_interval' parameter.
             */
            start_date?: string;
            /**
             * Format: date
             * @description The end date of the KubernetesEfficiencyReport. ISO 8601 Formatted. Incompatible with 'date_interval' parameter.
             */
            end_date?: string;
            /**
             * @description The date interval of the KubernetesEfficiencyReport. Incompatible with 'start_date' and 'end_date' parameters. Defaults to 'this_month' if start_date and end_date are not provided.
             * @enum {string}
             */
            date_interval?: "this_month" | "last_7_days" | "last_30_days" | "last_month" | "last_3_months" | "last_6_months" | "custom" | "last_12_months" | "last_24_months" | "last_36_months" | "next_month" | "next_3_months" | "next_6_months" | "next_12_months" | "year_to_date" | "last_3_days" | "last_14_days";
            /**
             * @description The column by which the costs are aggregated.
             * @enum {string}
             */
            aggregated_by?: "idle_cost" | "amount" | "cost_efficiency";
            /**
             * @description The date bucket of the KubernetesEfficiencyReport.
             * @enum {string}
             */
            date_bucket?: "day" | "week" | "month" | "quarter";
            /** @description Grouping values for aggregating costs on the KubernetesEfficiencyReport. Valid groupings: cluster_id, namespace, labeled, category, pod, label, label:<label_name>. */
            groupings?: string[];
        };
        /** @description Update a KubernetesEfficiencyReport. */
        updateKubernetesEfficiencyReport: {
            /** @description The title of the KubernetesEfficiencyReport. */
            title?: string;
            /** @description The filter query language to apply to the KubernetesEfficiencyReport. Additional documentation available at https://docs.vantage.sh/vql. */
            filter?: string;
            /**
             * Format: date
             * @description The start date of the KubernetesEfficiencyReport. ISO 8601 Formatted. Incompatible with 'date_interval' parameter.
             */
            start_date?: string;
            /**
             * Format: date
             * @description The end date of the KubernetesEfficiencyReport. ISO 8601 Formatted. Incompatible with 'date_interval' parameter.
             */
            end_date?: string;
            /**
             * @description The date interval of the KubernetesEfficiencyReport. Incompatible with 'start_date' and 'end_date' parameters. Defaults to 'this_month' if start_date and end_date are not provided.
             * @enum {string}
             */
            date_interval?: "this_month" | "last_7_days" | "last_30_days" | "last_month" | "last_3_months" | "last_6_months" | "custom" | "last_12_months" | "last_24_months" | "last_36_months" | "next_month" | "next_3_months" | "next_6_months" | "next_12_months" | "year_to_date" | "last_3_days" | "last_14_days";
            /**
             * @description The column by which the costs are aggregated.
             * @enum {string}
             */
            aggregated_by?: "idle_cost" | "amount" | "cost_efficiency";
            /**
             * @description The date bucket of the KubernetesEfficiencyReport.
             * @enum {string}
             */
            date_bucket?: "day" | "week" | "month" | "quarter";
            /** @description Grouping values for aggregating costs on the KubernetesEfficiencyReport. Valid groupings: cluster_id, namespace, labeled, category, pod, label, label:<label_name>. */
            groupings?: string[];
        };
        /** @description ManagedAccounts model */
        ManagedAccounts: {
            links?: components["schemas"]["Links"];
            managed_accounts: components["schemas"]["ManagedAccount"][];
        };
        /** @description ManagedAccount model */
        ManagedAccount: {
            token: string;
            name: string;
            contact_email: string;
            /** @description The token for the parent Account. */
            parent_account_token: string;
            /** @description The tokens for the Access Credentials assigned to the Managed Account. */
            access_credential_tokens: string[];
            /** @description The tokens for the Billing Rules assigned to the Managed Account. */
            billing_rule_tokens: string[];
            /** @description Email domain associated with this Managed Account for SSO. */
            email_domain?: string | null;
            /** @description Token of the MSP billing profile used for this managed account (MSP invoicing accounts only) */
            msp_billing_profile_token?: string | null;
            billing_information_attributes?: components["schemas"]["BillingInformation"];
            business_information_attributes?: components["schemas"]["BusinessInformation"];
        };
        /** @description Create a Managed Account. */
        createManagedAccount: {
            /** @description The name of the Managed Account. */
            name: string;
            /** @description The contact email address for the Managed Account. */
            contact_email: string;
            /** @description Access Credential (aka Integrations) tokens to assign to the Managed Account. */
            access_credential_tokens?: string[];
            /** @description Billing Rule tokens to assign to the Managed Account. */
            billing_rule_tokens?: string[];
            /** @description Email domain to associate with this Managed Account for SSO. */
            email_domain?: string;
        };
        /** @description Update a Managed Account. */
        updateManagedAccount: {
            /** @description The name of the Managed Account. */
            name?: string;
            /** @description The contact email address for the Managed Account. */
            contact_email?: string;
            /** @description Access Credential (aka Integrations) tokens to assign to the Managed Account. */
            access_credential_tokens?: string[];
            /** @description Billing Rule tokens to assign to the Managed Account. */
            billing_rule_tokens?: string[];
            /** @description Email domain to associate with this Managed Account for SSO. */
            email_domain?: string;
            /** @description Token of the MSP billing profile to use for this managed account (MSP invoicing accounts only). */
            msp_billing_profile_token?: string;
            /** @description Billing address and contact information (MSP invoicing accounts only) */
            billing_information_attributes?: {
                /** Format: int32 */
                id?: number;
                token?: string;
                /** @description Company name for billing */
                company_name?: string;
                /** @description ISO country code */
                country_code?: string;
                /** @description First line of billing address */
                address_line_1?: string;
                /** @description Second line of billing address */
                address_line_2?: string;
                /** @description City for billing address */
                city?: string;
                /** @description State or province for billing address */
                state?: string;
                /** @description Postal or ZIP code */
                postal_code?: string;
                /** @description Array of billing email addresses */
                billing_email?: string[];
            };
            /** @description Business information and custom fields (MSP invoicing accounts only) */
            business_information_attributes?: {
                /** Format: int32 */
                id?: number;
                token?: string;
                /** @description Business metadata including custom fields */
                metadata?: {
                    /** @description Array of custom field objects */
                    custom_fields?: {
                        /** @description Custom field name */
                        name?: string;
                        /** @description Custom field value */
                        value?: string;
                    }[];
                };
            };
        };
        /** @description Configure SSO for a Managed Account. */
        createSsoConnectionForManagedAccount: {
            /**
             * @description The type of SSO connection. Currently supported: saml.
             * @enum {string}
             */
            type: "saml";
            /** @description The SAML metadata URL for the identity provider. Required when type is saml. */
            saml_metadata_url?: string;
            /** @description Additional email domains to associate with this SSO configuration. The account's SSO domain is always included. */
            additional_domains?: string[];
        };
        /** @description Update SSO configuration for a Managed Account. */
        updateSsoConnectionForManagedAccount: {
            /** @description The SAML metadata URL for the identity provider. */
            saml_metadata_url?: string;
            /** @description Additional email domains to associate with this SSO configuration. Replaces existing additional domains. The account's SSO domain is always preserved. */
            additional_domains?: string[];
        };
        /** @description Me model */
        Me: {
            default_workspace_token: string | null;
            workspaces: components["schemas"]["Workspace"][];
            bearer_token: components["schemas"]["BearerToken"];
        };
        /** @description Workspace model */
        Workspace: {
            token: string;
            /**
             * @description The name of the Workspace.
             * @example Acme Corp.
             */
            name: string;
            /**
             * @description The date and time, in UTC, the Workspace was created. ISO 8601 Formatted.
             * @example 2023-08-04T00:00:00Z
             */
            created_at: string;
            /** @description Whether or not currency conversion is enabled for the Workspace. */
            enable_currency_conversion: boolean;
            /**
             * @description The currency code for the Workspace that will be used for currency conversion.
             * @example USD
             */
            currency: string;
            /** @description The exchange rate date that will be used to convert currency for your cost data. */
            exchange_rate_date: string;
        };
        BearerToken: {
            /** @description The user supplied description of this BearerToken */
            description: string;
            /**
             * @description The date and time, in UTC, the BearerToken was created. ISO 8601 Formatted.
             * @example 2023-08-04T00:00:00Z
             */
            created_at: string;
            /** @description The scopes applied to the BearerToken used to authenticate this request. */
            scope: string[];
        };
        /** @description CostProviders model */
        CostProviders: {
            links?: components["schemas"]["Links"];
            cost_providers: components["schemas"]["CostProvider"][];
        };
        CostProvider: {
            /**
             * @description The name of the CostProvider.
             * @example AWS
             */
            name: string;
            /**
             * @description The key of the CostProvider, useful for filtering Costs.
             * @example aws
             */
            key: string;
        };
        /** @description CostServices model */
        CostServices: {
            links?: components["schemas"]["Links"];
            cost_services: components["schemas"]["CostService"][];
        };
        CostService: {
            /**
             * @description The name of the CostService.
             * @example Amazon Simple Storage Service
             */
            name: string;
            /**
             * @description The key value of the CostProvider.
             * @example aws
             */
            provider: string;
        };
        /** @description Provide UserFeedback for our product and features. */
        createUserFeedback: {
            /** @description UserFeedback message */
            message: string;
        };
        /** @description UserFeedback model */
        UserFeedback: {
            /** @description Token of the feedback */
            token: string;
            /** @description User feedback message */
            message: string;
            /** @description Token of the creator of the feedback */
            created_by_token?: string | null;
            /**
             * @description Feedback creation timestamp
             * @example 2023-01-01T00:00:00Z
             */
            created_at: string;
        };
        /** @description NetworkFlowReports model */
        NetworkFlowReports: {
            links?: components["schemas"]["Links"];
            network_flow_reports: components["schemas"]["NetworkFlowReport"][];
        };
        /** @description NetworkFlowReport model */
        NetworkFlowReport: {
            token: string;
            /**
             * @description The title of the NetworkFlowReport.
             * @example Public Traffic Destinations
             */
            title: string;
            /** @description Indicates whether the NetworkFlowReport is the default report. */
            default: boolean;
            /**
             * @description The date and time, in UTC, the report was created. ISO 8601 Formatted.
             * @example 2024-03-19T00:00:00Z
             */
            created_at: string;
            /** @description The token for the Workspace the NetworkFlowReport is a part of. */
            workspace_token: string;
            /** @description The token for the User or Team that created this NetworkFlowReport. */
            created_by_token?: string | null;
            /**
             * @description The start date for the NetworkFlowReport. Only set for custom date ranges. ISO 8601 Formatted.
             * @example 2024-03-01
             */
            start_date: string | null;
            /**
             * @description The end date for the NetworkFlowReport. Only set for custom date ranges. ISO 8601 Formatted.
             * @example 2024-03-20
             */
            end_date: string | null;
            /**
             * @description The date range for the NetworkFlowReport. Only present if a custom date range is not specified.
             * @example last_month
             */
            date_interval: string | null;
            /**
             * @description The grouping aggregations applied to the filtered data.
             * @example cost_type, tag:account
             */
            groupings: string | null;
            /**
             * @description The flow weight of the NetworkFlowReport. Possible values: costs, bytes.
             * @example ingress
             */
            flow_direction: string | null;
            /**
             * @description The flow weight of the NetworkFlowReport. Possible values: costs, bytes.
             * @example costs
             */
            flow_weight: string;
            /** @description The filter applied to the NetworkFlowReport. Additional documentation available at https://docs.vantage.sh/vql. */
            filter: string | null;
        };
        /** @description Create a NetworkFlowReport. */
        createNetworkFlowReport: {
            /** @description The Workspace in which the NetworkFlowReport will be created. */
            workspace_token: string;
            /** @description The title of the NetworkFlowReport. */
            title: string;
            /** @description The filter query language to apply to the NetworkFlowReport. Additional documentation available at https://docs.vantage.sh/vql. */
            filter?: string;
            /**
             * Format: date
             * @description The start date of the NetworkFlowReport. YYYY-MM-DD formatted. Incompatible with 'date_interval' parameter.
             */
            start_date?: string;
            /**
             * Format: date
             * @description The end date of the NetworkFlowReport. YYYY-MM-DD formatted. Incompatible with 'date_interval' parameter.
             */
            end_date?: string;
            /**
             * @description The date interval of the NetworkFlowReport. Unless 'custom' is used, this is incompatible with 'start_date' and 'end_date' parameters. Defaults to 'last_7_days'.
             * @enum {string}
             */
            date_interval?: "last_3_days" | "last_7_days" | "custom";
            /** @description Grouping values for aggregating data on the NetworkFlowReport. Valid groupings: account_id, az_id, dstaddr, dsthostname, flow_direction, interface_id, instance_id, peer_resource_uuid, peer_account_id, peer_vpc_id, peer_region, peer_az_id, peer_subnet_id, peer_interface_id, peer_instance_id, region, resource_uuid, srcaddr, srchostname, subnet_id, traffic_category, traffic_path, vpc_id. */
            groupings?: ("account_id" | "az_id" | "dstaddr" | "dsthostname" | "flow_direction" | "interface_id" | "instance_id" | "peer_resource_uuid" | "peer_account_id" | "peer_vpc_id" | "peer_region" | "peer_az_id" | "peer_subnet_id" | "peer_interface_id" | "peer_instance_id" | "region" | "resource_uuid" | "srcaddr" | "srchostname" | "subnet_id" | "traffic_category" | "traffic_path" | "vpc_id")[];
            /**
             * @description The flow direction of the NetworkFlowReport.
             * @enum {string}
             */
            flow_direction?: "ingress" | "egress";
            /**
             * @description The dimension by which the logs in the report are sorted. Defaults to costs.
             * @enum {string}
             */
            flow_weight?: "costs" | "bytes";
        };
        /** @description Update a NetworkFlowReport. */
        updateNetworkFlowReport: {
            /** @description The title of the NetworkFlowReport. */
            title?: string;
            /** @description The filter query language to apply to the NetworkFlowReport. Additional documentation available at https://docs.vantage.sh/vql. */
            filter?: string;
            /**
             * Format: date
             * @description The start date of the NetworkFlowReport. YYYY-MM-DD formatted. Incompatible with 'date_interval' parameter.
             */
            start_date?: string;
            /**
             * Format: date
             * @description The end date of the NetworkFlowReport. YYYY-MM-DD formatted. Incompatible with 'date_interval' parameter.
             */
            end_date?: string;
            /**
             * @description The date interval of the NetworkFlowReport. Unless 'custom' is used, this is incompatible with 'start_date' and 'end_date' parameters. Defaults to 'last_7_days'.
             * @enum {string}
             */
            date_interval?: "last_3_days" | "last_7_days" | "custom";
            /** @description Grouping values for aggregating data on the NetworkFlowReport. Valid groupings: account_id, az_id, dstaddr, dsthostname, flow_direction, interface_id, instance_id, peer_resource_uuid, peer_account_id, peer_vpc_id, peer_region, peer_az_id, peer_subnet_id, peer_interface_id, peer_instance_id, region, resource_uuid, srcaddr, srchostname, subnet_id, traffic_category, traffic_path, vpc_id. */
            groupings?: ("account_id" | "az_id" | "dstaddr" | "dsthostname" | "flow_direction" | "interface_id" | "instance_id" | "peer_resource_uuid" | "peer_account_id" | "peer_vpc_id" | "peer_region" | "peer_az_id" | "peer_subnet_id" | "peer_interface_id" | "peer_instance_id" | "region" | "resource_uuid" | "srcaddr" | "srchostname" | "subnet_id" | "traffic_category" | "traffic_path" | "vpc_id")[];
            /**
             * @description The flow direction of the NetworkFlowReport.
             * @enum {string}
             */
            flow_direction?: "ingress" | "egress";
            /**
             * @description The dimension by which the logs in the report are sorted. Defaults to costs.
             * @enum {string}
             */
            flow_weight?: "costs" | "bytes";
        };
        /** @description Prices model */
        Prices: {
            links?: components["schemas"]["Links"];
            prices: components["schemas"]["Price"][];
        };
        /** @description Price model */
        Price: {
            id: string;
            /**
             * @description The unit in which the amount is billed.
             * @example hour
             */
            unit: string;
            /**
             * @description The region the price is specific to.
             * @example us-east-1
             */
            region: string;
            /**
             * @description The part of the product the price applies to. (compute, transfer, etc..)
             * @example compute
             */
            rate_type: string;
            /**
             * @description The currency of the amount.
             * @example USD
             */
            currency: string;
            /**
             * @description The amount of money this specific product price costs.
             * @example 1.324
             */
            amount: number;
            /**
             * @description Service specific metadata.
             * @example {
             *       "platform": "linux-enterprise",
             *       "lifecycle": "on-demand"
             *     }
             */
            details: Record<string, any>;
        };
        /** @description Products model */
        Products: {
            links?: components["schemas"]["Links"];
            products: components["schemas"]["Product"][];
        };
        /** @description Product model */
        Product: {
            id: string;
            /**
             * @description The category of the cloud product
             * @example compute
             */
            category: string;
            /**
             * @description The common name of the product.
             * @example EC2
             */
            name: string;
            /**
             * @description A unique slug for the service the product belongs to.
             * @example aws-ec2
             */
            service_id: string;
            /**
             * @description A unique slug for the provider the product belongs to.
             * @example aws
             */
            provider_id: string;
            /**
             * @description An object of metadata about the product.
             * @example {
             *       "gpu": 0,
             *       "name": "M5 General Purpose 16xlarge",
             *       "vcpu": 64,
             *       "memory": 256,
             *       "clock_speed_ghz": 3.1,
             *       "physical_processor_description": "Intel Xeon Platinum 8175 (Skylake)",
             *       "network_performance_description": "20 Gigabit"
             *     }
             */
            details: Record<string, any>;
        };
        /** @description Recommendations model */
        Recommendations: {
            links?: components["schemas"]["Links"];
            recommendations: components["schemas"]["Recommendation"][];
        };
        /** @description Recommendation model */
        Recommendation: {
            token: string;
            /**
             * @description The type of the Recommendation. This is analogous to category, but with a uniform format.
             * @example aws:ec2:co-rightsizing
             */
            type: string;
            /**
             * @description The category of the Recommendation.
             * @example ec2_compute_optimizer_recommender
             */
            category: string;
            /** @description The token for the Workspace the Recommendation is a part of. */
            workspace_token: string;
            /** @description The provider the Recommendation is for. */
            provider: string;
            /** @description The account ID of the provider. For Azure, this is the subscription ID. */
            provider_account_id: string | null;
            description: string;
            /**
             * @description The monthly potential savings of the Recommendation, converted to the organization's selected currency.
             * @example 100.00
             */
            potential_savings: string | null;
            /**
             * @description The service the Recommendation is for.
             * @example Amazon EC2
             */
            service: string;
            /** @description The date and time, in UTC, the Recommendation was created. ISO 8601 Formatted. */
            created_at: string;
            /**
             * Format: int32
             * @description The number of ProviderResources related to the Recommendation. Use the `recommendations/:token/resources` endpoint to get the full list of resources.
             */
            resources_affected_count: number;
            /**
             * @description The currency code used by the Workspace to which this Recommendation belongs.
             * @example EUR
             */
            currency_code?: string | null;
            /**
             * @description The currency symbol used by the Workspace to which this Recommendation belongs.
             * @example EUR
             */
            currency_symbol?: string | null;
        };
        /** @description RecommendationProviderResources model */
        RecommendationProviderResources: {
            links?: components["schemas"]["Links"];
            resources: components["schemas"]["ProviderResource"][];
        };
        /** @description ProviderResource model */
        ProviderResource: {
            token: string;
            /**
             * @description The unique identifier of the Active Resource.
             * @example i-0a1b2c3d4e5f6g7h8
             */
            resource_id: string;
            /** @description The actions to take to implement the Recommendation. */
            recommendation_actions?: components["schemas"]["RecommendationAction"][];
        };
        RecommendationAction: {
            action: string;
            description: string;
            /**
             * @description Potential savings in dollars
             * @example 100.00
             */
            potential_savings: string;
            instance_type?: string | null;
            containers?: string | null;
            /**
             * @description CLI command to remediate this recommendation
             * @example aws ec2 stop-instances --instance-ids i-1234567890abcdef0
             */
            remediation_cli_command?: string | null;
        };
        /** @description RecommendationViews model */
        RecommendationViews: {
            links?: components["schemas"]["Links"];
            recommendation_views?: components["schemas"]["RecommendationView"][];
        };
        /** @description RecommendationView model */
        RecommendationView: {
            token?: string | null;
            /**
             * @description The title of the RecommendationView.
             * @example Production Recommendations
             */
            title?: string | null;
            /** @description The token for the Workspace the RecommendationView is a part of. */
            workspace_token?: string | null;
            /**
             * @description Filter recommendations created on/after this YYYY-MM-DD date.
             * @example 2024-01-01
             */
            start_date?: string | null;
            /**
             * @description Filter recommendations created on/before this YYYY-MM-DD date.
             * @example 2024-12-31
             */
            end_date?: string | null;
            /** @description Filter by one or more providers. */
            provider_ids?: string[] | null;
            /** @description Filter by billing account identifiers. */
            billing_account_ids?: string[] | null;
            /** @description Filter by cloud account identifiers. */
            account_ids?: string[] | null;
            /** @description Filter by region slugs (e.g. us-east-1, eastus, asia-east1). */
            regions?: string[] | null;
            /**
             * @description Filter by tag key (must be used with tag_value).
             * @example environment
             */
            tag_key?: string | null;
            /**
             * @description Filter by tag value (requires tag_key).
             * @example production
             */
            tag_value?: string | null;
            /**
             * @description The date and time, in UTC, the view was created. ISO 8601 Formatted.
             * @example 2023-08-04T00:00:00Z
             */
            created_at?: string | null;
            /** @description The token for the Creator of this RecommendationView. */
            created_by?: string | null;
        };
        /** @description Create a RecommendationView. */
        createRecommendationView: {
            /** @description The title of the RecommendationView. */
            title: string;
            /** @description The Workspace to associate the RecommendationView with. */
            workspace_token: string;
            /** @description Filter by one or more providers (e.g. aws, gcp, azure, kubernetes, datadog). */
            provider_ids?: string[];
            /** @description Filter by billing account identifiers. */
            billing_account_ids?: string[];
            /** @description Filter by cloud account identifiers. */
            account_ids?: string[];
            /** @description Filter by region slugs (e.g. us-east-1, eastus, asia-east1). */
            regions?: string[];
            /** @description Filter by tag key (must be used with tag_value). */
            tag_key?: string;
            /** @description Filter by tag value (requires tag_key). */
            tag_value?: string;
            /** @description Filter recommendations created on/after this YYYY-MM-DD date. */
            start_date?: string;
            /** @description Filter recommendations created on/before this YYYY-MM-DD date. */
            end_date?: string;
        };
        /** @description Update a RecommendationView. */
        updateRecommendationView: {
            /** @description The title of the RecommendationView. */
            title?: string;
            /** @description Filter by one or more providers (e.g. aws, gcp, azure, kubernetes, datadog). */
            provider_ids?: string[];
            /** @description Filter by billing account identifiers. */
            billing_account_ids?: string[];
            /** @description Filter by cloud account identifiers. */
            account_ids?: string[];
            /** @description Filter by region slugs (e.g. us-east-1, eastus, asia-east1). */
            regions?: string[];
            /** @description Filter by tag key (must be used with tag_value). */
            tag_key?: string;
            /** @description Filter by tag value (requires tag_key). */
            tag_value?: string;
            /** @description Filter recommendations created on/after this YYYY-MM-DD date. */
            start_date?: string;
            /** @description Filter recommendations created on/before this YYYY-MM-DD date. */
            end_date?: string;
        };
        /** @description ReportNotifications model */
        ReportNotifications: {
            links?: components["schemas"]["Links"];
            report_notifications: components["schemas"]["ReportNotification"][];
        };
        /** @description ReportNotification model */
        ReportNotification: {
            token: string;
            /**
             * @description The title of the ReportNotification.
             * @example Acme Report Notification
             */
            title: string;
            /**
             * @description The token for a CostReport the ReportNotification is applied to.
             * @example rprt_abcd1234
             */
            cost_report_token: string;
            /** @description The Users that receive the notification. */
            user_tokens: string[];
            /** @description The Slack or Microsoft Teams channels that receive the notification. */
            recipient_channels: string[];
            /**
             * @description The frequency the ReportNotification is sent.
             * @example weekly
             * @enum {string}
             */
            frequency: "daily" | "weekly" | "monthly";
            /**
             * @description The type of change the ReportNotification is tracking.
             * @example percentage
             * @enum {string}
             */
            change: "percentage" | "dollars";
        };
        /** @description Create a ReportNotification. */
        createReportNotification: {
            /** @description The title of the ReportNotification. */
            title: string;
            /** @description The CostReport token. */
            cost_report_token: string;
            /** @description The token of the Workspace to add the ReportNotification to. Required if the API token is associated with multiple Workspaces. */
            workspace_token?: string;
            /** @description The Users that receive the notification. */
            user_tokens?: string[];
            /** @description The Slack or Microsoft Teams channels that receive the notification. */
            recipient_channels?: string[];
            /** @description The frequency the ReportNotification is sent. Possible values: daily, weekly, monthly. */
            frequency: string;
            /** @description The type of change the ReportNotification is tracking. Possible values: percentage, dollars. */
            change: string;
        };
        /** @description Update a ReportNotification. */
        updateReportNotification: {
            /** @description The title of the ReportNotification. */
            title?: string;
            /** @description The CostReport token. */
            cost_report_token?: string;
            /** @description The Users that receive the notification. */
            user_tokens?: string[];
            /** @description The Slack or Microsoft Teams channels that receive the notification. */
            recipient_channels?: string[];
            /** @description The frequency the ReportNotification is sent. Possible values: daily, weekly, monthly. */
            frequency?: string;
            /** @description The type of change the ReportNotification is tracking. Possible values: percentage, dollars. */
            change?: string;
        };
        /** @description ResourceReportColumns model */
        ResourceReportColumns: {
            /** @description Array of available column names for the specified resource type. */
            columns: string[];
        };
        /** @description ResourceReports model */
        ResourceReports: {
            links?: components["schemas"]["Links"];
            resource_reports: components["schemas"]["ResourceReport"][];
        };
        /** @description ResourceReport model */
        ResourceReport: {
            token: string;
            /**
             * @description The title of the ResourceReport.
             * @example Acme123 Active Resources
             */
            title: string;
            /** @description The filter applied to the ResourceReport. Additional documentation available at https://docs.vantage.sh/vql. */
            filter: string | null;
            /**
             * @description The date and time, in UTC, the report was created. ISO 8601 Formatted.
             * @example 2024-03-19T00:00:00Z
             */
            created_at: string;
            /** @description The token for the Workspace the ResourceReport is a part of. */
            workspace_token: string;
            /** @description The token for the User who created this ResourceReport. */
            user_token: string | null;
            /** @description The token for the User or Team who created this ResourceReport. */
            created_by_token: string | null;
            /** @description Array of column names configured for the ResourceReport table display. */
            columns: string[];
        };
        /** @description Create a ResourceReport. */
        createResourceReport: {
            /** @description The token of the Workspace to add the ResourceReport to. */
            workspace_token: string;
            /** @description The title of the ResourceReport. */
            title?: string;
            /** @description The filter query language to apply to the ResourceReport. Additional documentation available at https://docs.vantage.sh/vql. */
            filter?: string;
            /** @description Array of column names to display in the table. Column names should match those returned by the /resource_reports/columns endpoint. The order determines the display order. Only available for reports with a single resource type filter. */
            columns?: string[];
        };
        /** @description Update a ResourceReport. */
        updateResourceReport: {
            /** @description The title of the ResourceReport. */
            title?: string;
            /** @description The filter query language to apply to the ResourceReport. Additional documentation available at https://docs.vantage.sh/vql. */
            filter?: string;
            /** @description Array of column names to display in the table. Column names should match those returned by the /resource_reports/columns endpoint. The order determines the display order. Only available for reports with a single resource type filter. */
            columns?: string[];
        };
        /** @description Resources model */
        Resources: {
            links?: components["schemas"]["Links"];
            resources: components["schemas"]["Resource"][];
        };
        /** @description Resource model */
        Resource: {
            token: string;
            /**
             * @description The unique identifier for the resource.
             * @example i-0a1b2c3d4e5f6g7h8
             */
            uuid: string;
            /**
             * @description The kind of resource.
             * @example aws_instance
             */
            type: string;
            label: string | null;
            /** @description Type-specific attributes of the resource. */
            metadata: Record<string, any> | null;
            /** @description The provider account where the resource is located. */
            account_id: string | null;
            /** @description The provider billing account this resource is charged to. */
            billing_account_id: string | null;
            /**
             * @description The provider of the resource.
             * @example aws
             */
            provider: string;
            /**
             * @description The region where the resource is located. Region values are specific to each provider.
             * @example us-west-2
             */
            region: string | null;
            /** @description The cost of the resource broken down by category. */
            costs?: components["schemas"]["ResourceCost"][];
            /** @description The date and time when Vantage first observed the resource. */
            created_at: string;
        };
        ResourceCost: {
            /** @description The category of the cost. */
            category: string;
            /**
             * Format: float
             * @description The cost amount.
             */
            amount: number;
        };
        /** @description SavedFilters model */
        SavedFilters: {
            links?: components["schemas"]["Links"];
            saved_filters: components["schemas"]["SavedFilter"][];
        };
        /** @description SavedFilter model */
        SavedFilter: {
            token: string;
            /**
             * @description The title of the SavedFilter.
             * @example Platform Team Reports
             */
            title: string;
            /** @description The tokens for any CostReports the SavedFilter is applied to. */
            cost_report_tokens: string[];
            /**
             * @description The SavedFilter's filter, applied to any relevant CostReports. Additional documentation available at https://docs.vantage.sh/vql.
             * @example costs.provider = 'azure'
             */
            filter: string | null;
            /**
             * @description The date and time, in UTC, the report was created. ISO 8601 Formatted.
             * @example 2023-08-04T00:00:00Z
             */
            created_at: string;
            /** @description The token for the Creator of this SavedFilter. */
            created_by: string | null;
            /** @description The token for the Workspace the SavedFilter is a part of. */
            workspace_token: string;
        };
        /** @description Create a SavedFilter for CostReports. */
        createSavedFilter: {
            /** @description The title of the SavedFilter. */
            title: string;
            /** @description The Workspace to associate the SavedFilter with. Required if the API token is associated with multiple Workspaces. */
            workspace_token?: string;
            /** @description The filter query language to apply to the SavedFilter, which subsequently gets applied to a CostReport. Additional documentation available at https://docs.vantage.sh/vql. */
            filter?: string;
        };
        /** @description Update a SavedFilter for CostReports. */
        updateSavedFilter: {
            /** @description The title of the SavedFilter. */
            title?: string;
            /** @description The filter query language to apply to the SavedFilter, which subsequently gets applied to a CostReport. Additional documentation available at https://docs.vantage.sh/vql. */
            filter?: string;
        };
        /** @description Segments model */
        Segments: {
            links?: components["schemas"]["Links"];
            segments: components["schemas"]["Segment"][];
        };
        /** @description Segment model */
        Segment: {
            token: string;
            /**
             * @description The title of the Segment.
             * @example OPEX
             */
            title: string;
            /** @description The token of the parent Segment of this Segment. */
            parent_segment_token: string | null;
            /**
             * @description The description of the Segment.
             * @example Operating expenses
             */
            description: string;
            /**
             * @description Track Unallocated Costs which are not assigned to any of the created Segments.
             * @example false
             */
            track_unallocated: boolean;
            /** @description Report settings configurable on top-level Segments. */
            report_settings?: {
                include_credits?: boolean | null;
                include_refunds?: boolean | null;
                include_discounts?: boolean | null;
                include_tax?: boolean | null;
                amortize?: boolean | null;
            };
            /**
             * Format: int32
             * @description Costs are assigned in priority order across all Segments with assigned filters.
             * @example 100
             */
            priority: number;
            /** @description The filter applied to the Segment. Additional documentation available at https://docs.vantage.sh/vql. */
            filter: string | null;
            /**
             * @description The date and time, in UTC, the Segment was created. ISO 8601 Formatted.
             * @example 2021-07-09T00:00:00Z
             */
            created_at: string;
            /** @description The token for the Workspace the Segment is a part of. */
            workspace_token: string;
            /** @description The token for the Report the Segment has generated. */
            report_token: string | null;
        };
        /** @description Create a Segment. */
        createSegment: {
            /** @description The title of the Segment. */
            title: string;
            /** @description The description of the Segment. */
            description?: string;
            /**
             * Format: int32
             * @description The priority of the Segment.
             */
            priority?: number;
            /**
             * @description Track Unallocated Costs which are not assigned to any of the created Segments.
             * @default false
             */
            track_unallocated?: boolean;
            /** @description Report settings configurable on top-level Segments. */
            report_settings?: {
                /** @description Reports created under this Segment will include credits. */
                include_credits?: boolean;
                /** @description Reports created under this Segment will include refunds. */
                include_refunds?: boolean;
                /** @description Reports created under this Segment will include discounts. */
                include_discounts?: boolean;
                /** @description Reports created under this Segment will include tax. */
                include_tax?: boolean;
                /** @description Reports created under this Segment will amortize. */
                amortize?: boolean;
            };
            /** @description The token of the Workspace to add the Segment to. Ignored if 'segment_token' is set. Required if the API token is associated with multiple Workspaces. */
            workspace_token?: string;
            /** @description The filter query language to apply to the Segment. Additional documentation available at https://docs.vantage.sh/vql. */
            filter?: string;
            /** @description The token of the parent Segment this new Segment belongs to. Determines the Workspace the segment is assigned to. */
            parent_segment_token?: string;
        };
        /** @description Update a Segment. */
        updateSegment: {
            /** @description The title of the Segment. */
            title?: string;
            /** @description The description of the Segment. */
            description?: string;
            /**
             * Format: int32
             * @description The priority of the Segment.
             */
            priority?: number;
            /**
             * @description Track Unallocated Costs which are not assigned to any of the created Segments.
             * @default false
             */
            track_unallocated?: boolean;
            /** @description Report settings configurable on top-level Segments. */
            report_settings?: {
                /** @description Reports created under this Segment will include credits. */
                include_credits?: boolean;
                /** @description Reports created under this Segment will include refunds. */
                include_refunds?: boolean;
                /** @description Reports created under this Segment will include discounts. */
                include_discounts?: boolean;
                /** @description Reports created under this Segment will include tax. */
                include_tax?: boolean;
                /** @description Reports created under this Segment will amortize. */
                amortize?: boolean;
            };
            /** @description The filter query language to apply to the Segment. Additional documentation available at https://docs.vantage.sh/vql. */
            filter?: string;
            /** @description The token of the parent Segment this new Segment belongs to. Determines the Workspace the segment is assigned to. */
            parent_segment_token?: string;
        };
        /** @description Tags model */
        Tags: {
            links?: components["schemas"]["Links"];
            tags: components["schemas"]["Tag"][];
        };
        Tag: {
            /**
             * @description The Tag key.
             * @example aws:createdBy
             */
            tag_key: string;
            /** @description Whether the Tag has been hidden from the Vantage UI. */
            hidden: boolean;
            /** @description The unique providers that are covered by the Tag key. */
            providers: string[];
        };
        /** @description TagValues model */
        TagValues: {
            links?: components["schemas"]["Links"];
            tag_values: components["schemas"]["TagValue"][];
        };
        TagValue: {
            /**
             * @description The TagValue.
             * @example vantage
             */
            tag_value: string;
            /** @description The unique providers that are covered by the TagValue. */
            providers: string[];
        };
        /** @description Updates an existing Tag. */
        updateTag: {
            tag_key?: string;
            tag_keys?: string[];
            /** @description Whether the Tag is hidden from the Vantage UI. */
            hidden: boolean;
        };
        /** @description Teams model */
        Teams: {
            links?: components["schemas"]["Links"];
            teams: components["schemas"]["Team"][];
        };
        /** @description Team model */
        Team: {
            token: string;
            /**
             * @description The name of the Team.
             * @example Cost Savers
             */
            name: string;
            /**
             * @description The description of the Team.
             * @example The Team that saves costs
             */
            description: string | null;
            /** @description The tokens for any Workspaces that the Team belongs to */
            workspace_tokens: string[];
            /** @description The email addresses for Users that belong to the Team */
            user_emails: string[];
            /** @description The tokens for Users that belong to the Team */
            user_tokens: string[];
        };
        /** @description Create a new Team. */
        createTeam: {
            /** @description The name of the Team. */
            name: string;
            /** @description The description of the Team. */
            description?: string;
            /** @description The Workspace tokens to associate to the Team. */
            workspace_tokens?: string[];
            /** @description The User tokens to associate to the Team. */
            user_tokens?: string[];
            /** @description The User emails to associate to the Team. */
            user_emails?: string[];
            /**
             * @description The role to assign to the provided Users. Defaults to 'editor' which has editor permissions.
             * @enum {string}
             */
            role?: "owner" | "editor" | "viewer";
        };
        /** @description Update a Team. */
        updateTeam: {
            /** @description The name of the Team. */
            name?: string;
            /** @description The description of the Team. */
            description?: string;
            /** @description The Workspace tokens to associate to the Team. */
            workspace_tokens?: string[];
            /** @description The User tokens to associate to the Team. */
            user_tokens?: string[];
            /** @description The User emails to associate to the Team. */
            user_emails?: string[];
            /**
             * @description The role to assign to the provided Users. Defaults to 'editor' which has editor permissions.
             * @enum {string}
             */
            role?: "owner" | "editor" | "viewer";
        };
        /** @description TeamMembers model */
        TeamMembers: {
            links?: components["schemas"]["Links"];
            members: components["schemas"]["TeamMember"][];
        };
        /** @description TeamMember model */
        TeamMember: {
            /**
             * @description The name of the team member.
             * @example John Doe
             */
            name: string;
            /**
             * @description The email address of the team member.
             * @example john@acme.com
             */
            email: string;
            /**
             * @description The token of the team member.
             * @example usr_abcd1234
             */
            user_token: string;
            /**
             * @description The role of the team member in the team.
             * @example editor
             */
            role: string;
        };
        /** @description Add a member to a Team. */
        addTeamMember: {
            /** @description The email address of the user to add to the Team. */
            user_email: string;
            /**
             * @description The role to assign to the user. Defaults to 'editor'.
             * @default editor
             * @enum {string}
             */
            role?: "owner" | "editor" | "viewer" | "integration_owner";
        };
        /** @description Generate a DataExport of unit costs. */
        createUnitCostsExport: {
            /** @description The CostReport token. */
            cost_report_token: string;
            /** @description The token of the Workspace to query costs from. Required if the API token is associated with multiple Workspaces. */
            workspace_token?: string;
            /** @description First date you would like to filter unit costs from. Defaults to the report's default. ISO 8601 formatted. */
            start_date?: string;
            /** @description Last date you would like to filter unit costs to. Defaults to the report's default. ISO 8601 formatted. */
            end_date?: string;
            /**
             * @description The date bin of the unit costs. Defaults to the report's default or day.
             * @enum {string}
             */
            date_bin?: "day" | "week" | "month" | "quarter";
        };
        /** @description UnitCosts model */
        UnitCosts: {
            links?: components["schemas"]["Links"];
            unit_costs: components["schemas"]["UnitCost"][];
        };
        UnitCost: {
            links?: components["schemas"]["Links"];
            /**
             * @description The token of the BusinessMetric for which the unit cost was calculated.
             * @example bsnss_mtrc_1234
             */
            business_metric_token: string;
            /**
             * @description The title of the BusinessMetric for which the unit cost was calculated.
             * @example Total Revenue
             */
            business_metric_title: string;
            /**
             * @description The amount of the unit cost.
             * @example 4.25
             */
            unit_cost_amount: string;
            /**
             * @description The amount of the business metric.
             * @example 0.371
             */
            business_metric_amount: string;
            /**
             * Format: float
             * @description The scale of the BusinessMetric's values within a particular CostReport.
             * @example 1
             */
            scale: number;
            /**
             * @description The date for which the unit cost was calculated. ISO 8601 Formatted.
             * @example 2023-09-05+00:00
             */
            date: string;
        };
        /** @description Users model */
        Users: {
            links?: components["schemas"]["Links"];
            users: components["schemas"]["User"][];
        };
        /** @description User model */
        User: {
            token: string;
            /**
             * @description The name of the User.
             * @example John Doe
             */
            name: string | null;
            /**
             * @description The email of the User.
             * @example john_doe@acme.com
             */
            email: string;
            /**
             * @description The role of the User.
             * @example Admin
             */
            role: string;
            /**
             * @description The last time the User logged in.
             * @example 2024-01-01T00:00:00Z
             */
            last_seen_at?: string | null;
        };
        /** @description VirtualTagConfigs model */
        VirtualTagConfigs: {
            virtual_tag_configs: components["schemas"]["VirtualTagConfig"][];
        };
        /** @description VirtualTagConfig model */
        VirtualTagConfig: {
            /**
             * @description The token of the VirtualTagConfig.
             * @example vtag_1234
             */
            token: string;
            /**
             * @description The token of the Creator of the VirtualTagConfig.
             * @example usr_1234
             */
            created_by_token: string | null;
            /**
             * @description The key of the VirtualTagConfig.
             * @example Cost Center
             */
            key: string;
            /** @description Whether the VirtualTagConfig can override a provider-supplied tag on a matching Cost. */
            overridable: boolean;
            /**
             * @description The earliest month VirtualTagConfig should be backfilled to.
             * @example 2025-08-01
             */
            backfill_until: string;
            /** @description Tag keys to collapse values for. */
            collapsed_tag_keys?: components["schemas"]["VirtualTagConfigCollapsedTagKey"][];
            /** @description Values for the VirtualTagConfig, with match precedence determined by their relative order in the list. */
            values: components["schemas"]["VirtualTagConfigValue"][];
        };
        VirtualTagConfigCollapsedTagKey: {
            /**
             * @description The tag key to collapse values for.
             * @example team
             */
            key: string;
            /** @description The providers this collapsed tag key applies to. Defaults to all providers. */
            providers: string[];
        };
        VirtualTagConfigValue: {
            /**
             * @description The filter VQL for the Value.
             * @example costs.provider = 'aws' AND costs.service = 'Amazon Simple Storage Service'
             */
            filter: string | null;
            /**
             * @description The name of the Value.
             * @example Informatics
             */
            name?: string | null;
            /**
             * @description The token of the associated BusinessMetric.
             * @example bsnss_mtrc_abc123
             */
            business_metric_token?: string | null;
            cost_metric?: components["schemas"]["VirtualTagConfigValueCostMetric"];
            /** @description Labeled percentage allocations for matching costs. */
            percentages?: components["schemas"]["VirtualTagConfigValuePercentage"][];
            /** @description Date ranges restricting when this value applies. */
            date_ranges?: components["schemas"]["VirtualTagConfigValueDateRange"][];
        };
        VirtualTagConfigValueCostMetric: {
            /** @description The filter VQL for the cost metric. */
            filter: string | null;
            aggregation: components["schemas"]["VirtualTagConfigValueCostMetricAggregation"];
        };
        VirtualTagConfigValueCostMetricAggregation: {
            /** @description The tag to aggregate on. */
            tag?: string | null;
        };
        VirtualTagConfigValuePercentage: {
            /**
             * @description The tag value associated with a percentage of matched costs.
             * @example cost-center-a
             */
            value: string;
            /**
             * @description The percentage of matched costs associated with the value.
             * @example 50
             */
            pct: number;
        };
        VirtualTagConfigValueDateRange: {
            /** @description The start date of the range (inclusive), or null for unbounded. */
            start_date: string | null;
            /** @description The end date of the range (inclusive), or null for unbounded. */
            end_date: string | null;
        };
        /** @description VirtualTagConfigStatus model */
        VirtualTagConfigStatus: {
            /**
             * @description The token of the VirtualTagConfig.
             * @example vtag_1234
             */
            token: string;
            /** @description Whether the VirtualTagConfig is currently processing. True if any provider has not completed processing. */
            processing: boolean;
            /** @description Processing status broken down by provider. */
            providers: components["schemas"]["VirtualTagConfigProviderStatus"][];
        };
        VirtualTagConfigProviderStatus: {
            /**
             * @description The provider name.
             * @example aws
             */
            provider: string;
            /**
             * @description The processing status for this provider. Possible values: queued, processing, complete, failed.
             * @example processing
             */
            status: string;
        };
        /** @description Create a new VirtualTagConfig. */
        createVirtualTagConfig: {
            /** @description The key of the VirtualTagConfig. */
            key: string;
            /** @description Whether the VirtualTagConfig can override a provider-supplied tag on a matching Cost. */
            overridable: boolean;
            /**
             * Format: date
             * @description The earliest month the VirtualTagConfig should be backfilled to.
             */
            backfill_until?: string;
            /** @description Tag keys to collapse values for. */
            collapsed_tag_keys?: {
                /** @description The tag key to collapse values for. */
                key: string;
                /** @description The providers this collapsed tag key applies to. Defaults to all providers. */
                providers?: string[];
            }[];
            /** @description Values for the VirtualTagConfig, with match precedence determined by order in the list. */
            values?: {
                /** @description The filter query language to apply to the value. Additional documentation available at https://docs.vantage.sh/vql. */
                filter: string;
                /** @description The name of the value. */
                name?: string;
                /** @description The token of an associated business metric. */
                business_metric_token?: string;
                cost_metric?: {
                    filter: string;
                    aggregation: {
                        tag: string;
                    };
                };
                percentages?: {
                    value: string;
                    /** Format: float */
                    pct: number;
                }[];
                /** @description Date ranges restricting when this value applies. Each range has optional start_date and end_date (inclusive, YYYY-MM-DD). */
                date_ranges?: {
                    /** @description Inclusive start date (YYYY-MM-DD), or null for unbounded. */
                    start_date?: string;
                    /** @description Inclusive end date (YYYY-MM-DD), or null for unbounded. */
                    end_date?: string;
                }[];
            }[];
        };
        /** @description Updates an existing VirtualTagConfig. */
        updateVirtualTagConfig: {
            /** @description The key of the VirtualTagConfig. */
            key?: string;
            /** @description Whether the VirtualTagConfig can override a provider-supplied tag on a matching Cost. */
            overridable?: boolean | null;
            /**
             * Format: date
             * @description The earliest month the VirtualTagConfig should be backfilled to.
             */
            backfill_until?: string | null;
            /** @description Tag keys to collapse values for. */
            collapsed_tag_keys?: {
                /** @description The tag key to collapse values for. */
                key: string;
                /** @description The providers this collapsed tag key applies to. Defaults to all providers. */
                providers?: string[];
            }[];
            /** @description Values for the VirtualTagConfig, with match precedence determined by order in the list. */
            values?: {
                /** @description The filter query language to apply to the value. Additional documentation available at https://docs.vantage.sh/vql. */
                filter: string;
                /** @description The name of the value. */
                name?: string;
                /** @description The token of an associated business metric. */
                business_metric_token?: string;
                cost_metric?: {
                    filter: string;
                    aggregation: {
                        tag: string;
                    };
                };
                percentages?: {
                    value: string;
                    /** Format: float */
                    pct: number;
                }[];
                /** @description Date ranges restricting when this value applies. Each range has optional start_date and end_date (inclusive, YYYY-MM-DD). */
                date_ranges?: {
                    /** @description Inclusive start date (YYYY-MM-DD), or null for unbounded. */
                    start_date?: string;
                    /** @description Inclusive end date (YYYY-MM-DD), or null for unbounded. */
                    end_date?: string;
                }[];
            }[];
        };
        /** @description Asynchronously updates an existing VirtualTagConfig. */
        updateAsyncVirtualTagConfig: {
            /** @description The key of the VirtualTagConfig. */
            key?: string;
            /** @description Whether the VirtualTagConfig can override a provider-supplied tag on a matching Cost. */
            overridable?: boolean | null;
            /**
             * Format: date
             * @description The earliest month the VirtualTagConfig should be backfilled to.
             */
            backfill_until?: string | null;
            /** @description Tag keys to collapse values for. */
            collapsed_tag_keys?: {
                /** @description The tag key to collapse values for. */
                key: string;
                /** @description The providers this collapsed tag key applies to. Defaults to all providers. */
                providers?: string[];
            }[];
            /** @description Values for the VirtualTagConfig, with match precedence determined by order in the list. */
            values?: {
                /** @description The filter query language to apply to the value. Additional documentation available at https://docs.vantage.sh/vql. */
                filter: string;
                /** @description The name of the value. */
                name?: string;
                /** @description The token of an associated business metric. */
                business_metric_token?: string;
                cost_metric?: {
                    filter: string;
                    aggregation: {
                        tag: string;
                    };
                };
                percentages?: {
                    value: string;
                    /** Format: float */
                    pct: number;
                }[];
                /** @description Date ranges restricting when this value applies. Each range has optional start_date and end_date (inclusive, YYYY-MM-DD). */
                date_ranges?: {
                    /** @description Inclusive start date (YYYY-MM-DD), or null for unbounded. */
                    start_date?: string;
                    /** @description Inclusive end date (YYYY-MM-DD), or null for unbounded. */
                    end_date?: string;
                }[];
            }[];
        };
        /** @description Workspaces model */
        Workspaces: {
            links?: components["schemas"]["Links"];
            workspaces: components["schemas"]["Workspace"][];
        };
        /** @description Create a workspace */
        createWorkspace: {
            /** @description Name of the workspace. */
            name: string;
            /**
             * @description Enable currency conversion for the workspace.
             * @default true
             */
            enable_currency_conversion?: boolean;
            /** @description Currency code for the workspace. */
            currency?: string;
            /**
             * @description The date to use for currency conversion.
             * @default daily_rate
             * @enum {string}
             */
            exchange_rate_date?: "daily_rate" | "end_of_billing_period_rate";
        };
        /** @description Update a workspace */
        updateWorkspace: {
            /** @description Name of the workspace. */
            name?: string;
            /**
             * @description Enable currency conversion for the workspace.
             * @default true
             */
            enable_currency_conversion?: boolean;
            /**
             * @description Currency code for the workspace.
             * @enum {string}
             */
            currency?: "AED" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AUD" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BRL" | "BSD" | "BTC" | "BTN" | "BWP" | "BYN" | "BYR" | "BZD" | "CAD" | "CDF" | "CHF" | "CLF" | "CLP" | "CNY" | "COP" | "CRC" | "CUC" | "CUP" | "CVE" | "CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EGP" | "ERN" | "ETB" | "EUR" | "FJD" | "FKP" | "GBP" | "GEL" | "GGP" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GYD" | "HKD" | "HNL" | "HRK" | "HTG" | "HUF" | "IDR" | "ILS" | "IMP" | "INR" | "IQD" | "IRR" | "ISK" | "JEP" | "JMD" | "JOD" | "JPY" | "KES" | "KGS" | "KHR" | "KMF" | "KPW" | "KRW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LTL" | "LVL" | "LYD" | "MAD" | "MDL" | "MGA" | "MKD" | "MMK" | "MNT" | "MOP" | "MRO" | "MUR" | "MVR" | "MWK" | "MXN" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SDG" | "SEK" | "SGD" | "SHP" | "SLL" | "SOS" | "SRD" | "SSP" | "STD" | "STN" | "SVC" | "SYP" | "SZL" | "THB" | "TJS" | "TMT" | "TND" | "TOP" | "TRY" | "TTD" | "TWD" | "TZS" | "UAH" | "UGX" | "USD" | "UYU" | "UZS" | "VEF" | "VND" | "VUV" | "WST" | "XAF" | "XCD" | "XDR" | "XOF" | "XPF" | "YER" | "ZAR" | "ZMW" | "ZWL";
            /**
             * @description The date to use for currency conversion.
             * @default daily_rate
             * @enum {string}
             */
            exchange_rate_date?: "daily_rate" | "end_of_billing_period_rate";
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, any>;
export interface operations {
    getAccessGrants: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The amount of results to return. The maximum is 1000. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v2/access_grants",
                     *         "first": "https://api.vantage.sh/v2/access_grants?page=1",
                     *         "next": null,
                     *         "last": "https://api.vantage.sh/v2/access_grants?page=1",
                     *         "prev": null
                     *       },
                     *       "access_grants": [
                     *         {
                     *           "token": "rsrc_accss_grnt_c40f15062b6d5c37",
                     *           "resource_token": "rprt_5a269d316483b01c",
                     *           "access": "denied",
                     *           "team_token": "team_fd5c524ba104712b",
                     *           "created_at": "2024-01-18T17:39:37Z",
                     *           "created_by": "usr_eb8ce6bdc1fa31d5"
                     *         },
                     *         {
                     *           "token": "rsrc_accss_grnt_9723e984e93d8907",
                     *           "resource_token": "dshbrd_a08561ec24875ac9",
                     *           "access": "allowed",
                     *           "team_token": "team_fd5c524ba104712b",
                     *           "created_at": "2024-01-18T17:39:37Z",
                     *           "created_by": "usr_eb8ce6bdc1fa31d5"
                     *         },
                     *         {
                     *           "token": "rsrc_accss_grnt_eee5c4fd777d4dc8",
                     *           "resource_token": "fldr_9d4ad1a769131c58",
                     *           "access": "allowed",
                     *           "team_token": "team_fd5c524ba104712b",
                     *           "created_at": "2024-01-18T17:39:38Z",
                     *           "created_by": "usr_eb8ce6bdc1fa31d5"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["AccessGrants"];
                };
            };
        };
    };
    createAccessGrant: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createAccessGrant"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "rsrc_accss_grnt_9f8aeb3cedda3831",
                     *       "resource_token": "rprt_3b935d26cba36fb0",
                     *       "access": "denied",
                     *       "team_token": "team_26865e16e46028ae",
                     *       "created_at": "2024-01-18T17:39:37Z",
                     *       "created_by": "usr_2fc38883da3726b9"
                     *     }
                     */
                    "application/json": components["schemas"]["AccessGrant"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotAcceptable */
            406: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description UnprocessableEntity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getAccessGrant: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                access_grant_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "rsrc_accss_grnt_07ed83a5069b91c4",
                     *       "resource_token": "rprt_b8df14aa8a4ad5c7",
                     *       "access": "denied",
                     *       "team_token": "team_14bd13a8bccb8406",
                     *       "created_at": "2024-01-18T17:39:36Z",
                     *       "created_by": "usr_0e1cb254743b26cb"
                     *     }
                     */
                    "application/json": components["schemas"]["AccessGrant"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    updateAccessGrant: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                access_grant_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["updateAccessGrant"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "rsrc_accss_grnt_eea11f0d35318b0d",
                     *       "resource_token": "rprt_e84d7760ab2dd7dc",
                     *       "access": "allowed",
                     *       "team_token": "team_25fc4aa890869602",
                     *       "created_at": "2024-01-18T17:39:36Z",
                     *       "created_by": "usr_57ed2fa2a7b30166"
                     *     }
                     */
                    "application/json": components["schemas"]["AccessGrant"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    deleteAccessGrant: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                access_grant_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AccessGrant"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getAnomalyAlerts: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The amount of results to return. The maximum is 1000. */
                limit?: number;
                /** @description The start date of the anomalies to return. ISO 8601 formatted. */
                start_date?: string;
                /** @description The end date of the anomalies to return. ISO 8601 formatted. */
                end_date?: string;
                /** @description The provider of the anomalies to return. */
                provider?: string;
                /** @description The service of the anomalies to return. */
                service?: string;
                /** @description The cost category of the anomalies to return. */
                cost_category?: string;
                /** @description The cost report token of the anomalies to return. */
                cost_report_token?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v2/anomaly_alerts",
                     *         "first": "https://api.vantage.sh/v2/anomaly_alerts?page=1",
                     *         "next": null,
                     *         "last": "https://api.vantage.sh/v2/anomaly_alerts?page=1",
                     *         "prev": null
                     *       },
                     *       "anomaly_alerts": [
                     *         {
                     *           "token": "anmly_alrt_e1fb8184ecdf129d",
                     *           "created_at": "2024-04-01T17:14:45Z",
                     *           "alerted_at": "2024-04-01T17:14:45Z",
                     *           "category": "Compute",
                     *           "service": "AmazonEKS",
                     *           "provider": "aws",
                     *           "amount": "100.0",
                     *           "previous_amount": "25.0",
                     *           "seven_day_average": "10.0",
                     *           "status": "active",
                     *           "feedback": null,
                     *           "resources": [
                     *             "production-cluster"
                     *           ],
                     *           "resource_tokens": [
                     *             "rsrc_abcd1234efgh5678"
                     *           ],
                     *           "cost_report_token": "rprt_3d541a4c5160711f"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["AnomalyAlerts"];
                };
            };
        };
    };
    getAnomalyAlert: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                anomaly_alert_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "anmly_alrt_6056b98225236ece",
                     *       "created_at": "2024-04-01T17:14:45Z",
                     *       "alerted_at": "2024-04-01T17:14:45Z",
                     *       "category": "Compute",
                     *       "service": "AmazonEKS",
                     *       "provider": "aws",
                     *       "amount": "100.0",
                     *       "previous_amount": "25.0",
                     *       "seven_day_average": "10.0",
                     *       "status": "active",
                     *       "feedback": null,
                     *       "resources": [
                     *         "production-cluster"
                     *       ],
                     *       "resource_tokens": [
                     *         "rsrc_abcd1234efgh5678"
                     *       ],
                     *       "cost_report_token": "rprt_bf0a30084fbf52c2"
                     *     }
                     */
                    "application/json": components["schemas"]["AnomalyAlert"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    updateAnomalyAlert: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                anomaly_alert_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["updateAnomalyAlert"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "anmly_alrt_51a2ce4137305fc6",
                     *       "created_at": "2024-04-01T17:14:46Z",
                     *       "alerted_at": "2024-04-01T17:14:46Z",
                     *       "category": "Compute",
                     *       "service": "AmazonEKS",
                     *       "provider": "aws",
                     *       "amount": "100.0",
                     *       "previous_amount": "25.0",
                     *       "seven_day_average": "10.0",
                     *       "status": "archived",
                     *       "feedback": "this stinks",
                     *       "cost_report_token": "rprt_57912c584fdf88f4"
                     *     }
                     */
                    "application/json": components["schemas"]["AnomalyAlert"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description UnprocessableEntity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getAnomalyNotifications: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The amount of results to return. The maximum is 1000. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v2/anomaly_notifications",
                     *         "first": "https://api.vantage.sh/v2/anomaly_notifications?page=1",
                     *         "next": null,
                     *         "last": "https://api.vantage.sh/v2/anomaly_notifications?page=1",
                     *         "prev": null
                     *       },
                     *       "anomaly_notifications": [
                     *         {
                     *           "token": "rprt_alrt_ecb76d8d2825762f",
                     *           "cost_report_token": "rprt_45fe4d4c1779ce7e",
                     *           "created_at": "2024-04-09T15:05:37Z",
                     *           "updated_at": "2024-04-09T15:05:37Z",
                     *           "threshold": 10,
                     *           "user_tokens": [
                     *             "usr_13477ee1b1eb81ba"
                     *           ],
                     *           "recipient_channels": []
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["AnomalyNotifications"];
                };
            };
        };
    };
    createAnomalyNotification: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createAnomalyNotification"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "rprt_alrt_9b22edfa0a175609",
                     *       "cost_report_token": "rprt_4c9e5f72ae27bc24",
                     *       "created_at": "2024-04-09T15:05:37Z",
                     *       "updated_at": "2024-04-09T15:05:37Z",
                     *       "threshold": 1,
                     *       "user_tokens": [
                     *         "usr_3773d590e84f6f12"
                     *       ],
                     *       "recipient_channels": [
                     *         "channel1",
                     *         "channel2"
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["AnomalyNotification"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getAnomalyNotification: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                anomaly_notification_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "rprt_alrt_5af901100951705b",
                     *       "cost_report_token": "rprt_0d88354748562c26",
                     *       "created_at": "2024-04-09T15:05:37Z",
                     *       "updated_at": "2024-04-09T15:05:37Z",
                     *       "threshold": 10,
                     *       "user_tokens": [
                     *         "usr_e163fcb7aeb41f3b"
                     *       ],
                     *       "recipient_channels": []
                     *     }
                     */
                    "application/json": components["schemas"]["AnomalyNotification"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    updateAnomalyNotification: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                anomaly_notification_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["updateAnomalyNotification"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "rprt_alrt_15da34156dca939d",
                     *       "cost_report_token": "rprt_82320a9c1a608f0f",
                     *       "created_at": "2024-04-09T15:05:37Z",
                     *       "updated_at": "2024-04-09T15:05:37Z",
                     *       "threshold": 2,
                     *       "user_tokens": [
                     *         "usr_dff5de2b6aecf042"
                     *       ],
                     *       "recipient_channels": [
                     *         "channel3",
                     *         "channel4"
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["AnomalyNotification"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    deleteAnomalyNotification: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                anomaly_notification_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AnomalyNotification"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getAuditLogs: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The amount of results to return. The maximum is 1000. */
                limit?: number;
                /** @description Filter by personal or service API token that performed the action. */
                user?: number;
                /** @description Filter by workspace token. */
                workspace_token?: string;
                /** @description Filter by action type. */
                action?: "create" | "update" | "delete";
                /** @description Filter by object name. */
                object_name?: string;
                /** @description Filter by source. */
                source?: "console" | "api" | "finops_agent";
                /** @description Filter by object type. */
                object_type?: "virtual_tag" | "cost_report" | "recommendation_commitment";
                /** @description Filter by audit log token. */
                token?: string;
                /** @description Filter by object token (auditable_token). */
                object_token?: string;
                /** @description Filter by start date (ISO 8601 format, e.g., 2024-06-01). */
                start_date?: string;
                /** @description Filter by end date (ISO 8601 format, e.g., 2024-06-01). */
                end_date?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "audit_logs": [
                     *         {
                     *           "token": "adt_lg_1234567890abcdef",
                     *           "object_token": "rpt_1234567890abcdef",
                     *           "object_type": "Report",
                     *           "object_title": "Production Cost Report",
                     *           "event": "record_updated",
                     *           "source": "api",
                     *           "user": "Example User",
                     *           "workspace_title": "Production Workspace",
                     *           "workspace_token": "wrkspc_5df510e54a48a137",
                     *           "created_at": "2025-07-01T14:30:00Z",
                     *           "object_changes": {
                     *             "title": [
                     *               "Old Production Report",
                     *               "Production Cost Report"
                     *             ],
                     *             "updated_at": [
                     *               "2025-06-15T10:00:00Z",
                     *               "2025-07-01T14:30:00Z"
                     *             ]
                     *           }
                     *         },
                     *         {
                     *           "token": "adt_lg_0987654321fedcba",
                     *           "object_token": "rpt_0987654321fedcba",
                     *           "object_type": "Report",
                     *           "object_title": "Development Cost Report",
                     *           "event": "record_created",
                     *           "source": "console",
                     *           "user": "Example User",
                     *           "workspace_title": "Production Workspace",
                     *           "workspace_token": "wrkspc_5df510e54a48a137",
                     *           "created_at": "2025-06-25T09:15:00Z",
                     *           "object_changes": {
                     *             "key": [
                     *               null,
                     *               "api-created-tag-1755150452"
                     *             ],
                     *             "token": [
                     *               null,
                     *               "vtag_0497e0c2b571a71d"
                     *             ],
                     *             "backfill_until": [
                     *               null,
                     *               "2025-08-01T00:00:00.000Z"
                     *             ],
                     *             "created_by_type": [
                     *               "User",
                     *               "Team"
                     *             ],
                     *             "referenced_tag_keys_by_provider": [
                     *               "{}",
                     *               "{\"aws\":[]}"
                     *             ],
                     *             "account": [
                     *               null,
                     *               "Test Account"
                     *             ],
                     *             "created_by": [
                     *               null,
                     *               "Example User"
                     *             ]
                     *           }
                     *         },
                     *         {
                     *           "token": "adt_lg_abcdef1234567890",
                     *           "object_token": "bgt_abcdef1234567890",
                     *           "object_type": "Budget",
                     *           "object_title": "Q3 Marketing Budget",
                     *           "event": "record_destroyed",
                     *           "source": "api",
                     *           "user": "Admin User",
                     *           "workspace_title": "Production Workspace",
                     *           "workspace_token": "wrkspc_5df510e54a48a137",
                     *           "created_at": "2025-06-20T16:45:00Z",
                     *           "object_changes": {
                     *             "title": [
                     *               "test_1",
                     *               "test_1_updated"
                     *             ]
                     *           }
                     *         }
                     *       ],
                     *       "_links": {
                     *         "self": "/v2/audit_logs?page=1&limit=25",
                     *         "first": "/v2/audit_logs?page=1&limit=25",
                     *         "next": "/v2/audit_logs?page=2&limit=25",
                     *         "last": "/v2/audit_logs?page=10&limit=25",
                     *         "prev": null
                     *       },
                     *       "_meta": {
                     *         "total_count": 248,
                     *         "per_page": 25,
                     *         "page": 1
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["AuditLogs"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getAuditLog: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                audit_log_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "adt_lg_1234567890abcdef",
                     *       "object_token": "rpt_1234567890abcdef",
                     *       "object_type": "Report",
                     *       "object_title": "Production Cost Report",
                     *       "event": "record_updated",
                     *       "source": "api",
                     *       "user": "Example User",
                     *       "workspace_title": "Production Workspace",
                     *       "workspace_token": "wrkspc_5df510e54a48a137",
                     *       "created_at": "2025-07-01T14:30:00Z",
                     *       "object_changes": {
                     *         "title": [
                     *           "Old Production Report",
                     *           "Production Cost Report"
                     *         ],
                     *         "updated_at": [
                     *           "2025-06-15T10:00:00Z",
                     *           "2025-07-01T14:30:00Z"
                     *         ]
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["AuditLog"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getBillingProfiles: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The amount of results to return. The maximum is 1000. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BillingProfiles"];
                };
            };
        };
    };
    createBillingProfile: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createBillingProfile"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BillingProfile"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getBillingProfile: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                billing_profile_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BillingProfile"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    updateBillingProfile: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                billing_profile_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["updateBillingProfile"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BillingProfile"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    deleteBillingProfile: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                billing_profile_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Billing Profile deleted successfully. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BillingProfile"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getBillingRules: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The amount of results to return. The maximum is 1000. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v2/billing_rules",
                     *         "first": "https://api.vantage.sh/v2/billing_rules?page=1",
                     *         "next": null,
                     *         "last": "https://api.vantage.sh/v2/billing_rules?page=1",
                     *         "prev": null
                     *       },
                     *       "billing_rules": [
                     *         {
                     *           "token": "bllng_rule_ac6852c686e265a1",
                     *           "title": "Exclude Reserved Instance Fees",
                     *           "type": "Exclusion",
                     *           "created_by_token": "usr_018532419bd2e1da",
                     *           "created_at": "2024-07-02T15:26:51Z",
                     *           "charge_type": "Reserved Instance Fees"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["BillingRules"];
                };
            };
        };
    };
    createBillingRule: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createBillingRule"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "bllng_rule_9cc9eab6bb73266b",
                     *       "title": "Credit for Data Transfer",
                     *       "type": "Credit",
                     *       "created_by_token": "usr_ae0b14f6c9108edc",
                     *       "created_at": "2024-07-02T15:26:52Z",
                     *       "service": "Amazon S3",
                     *       "category": "Data Transfer",
                     *       "sub_category": "Outbound",
                     *       "start_period": "2024-05-01",
                     *       "amount": "300.0"
                     *     }
                     */
                    "application/json": components["schemas"]["BillingRule"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getBillingRule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                billing_rule_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "bllng_rule_a2708f17b2d3fb0e",
                     *       "title": "Exclude Reserved Instance Fees",
                     *       "type": "Exclusion",
                     *       "created_by_token": "usr_d253a52c80171514",
                     *       "created_at": "2024-07-02T15:26:50Z",
                     *       "charge_type": "Reserved Instance Fees"
                     *     }
                     */
                    "application/json": components["schemas"]["BillingRule"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    updateBillingRule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                billing_rule_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["updateBillingRule"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "bllng_rule_16c2d217f026d23e",
                     *       "title": "Updated Adjustment",
                     *       "type": "Adjustment",
                     *       "created_by_token": "usr_cef510966067477f",
                     *       "created_at": "2024-07-02T15:26:52Z",
                     *       "service": "Amazon S3",
                     *       "category": "Data Transfer",
                     *       "adjusted_rate": "0.85"
                     *     }
                     */
                    "application/json": components["schemas"]["BillingRule"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    deleteBillingRule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                billing_rule_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BillingRule"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getBudgetAlerts: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The number of results to return. The maximum is 1000. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BudgetAlerts"];
                };
            };
        };
    };
    createBudgetAlert: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createBudgetAlert"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BudgetAlert"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getBudgetAlert: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                budget_alert_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BudgetAlert"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    updateBudgetAlert: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                budget_alert_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["updateBudgetAlert"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BudgetAlert"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    deleteBudgetAlert: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                budget_alert_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BudgetAlert"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getBudgets: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The number of results to return. The maximum is 1000. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v2/budgets",
                     *         "first": "https://api.vantage.sh/v2/budgets?page=1",
                     *         "next": null,
                     *         "last": "https://api.vantage.sh/v2/budgets?page=1",
                     *         "prev": null
                     *       },
                     *       "budgets": [
                     *         {
                     *           "token": "bdgt_0d825e79a0682cc2",
                     *           "name": "database",
                     *           "workspace_token": "wrkspc_226ab053bd01bb2b",
                     *           "user_token": "usr_8e44c17792242852",
                     *           "created_by_token": "usr_8e44c17792242852",
                     *           "cost_report_token": "rprt_92062240b4ffda91",
                     *           "created_at": "2024-07-11T20:22:49Z",
                     *           "budget_alert_tokens": [],
                     *           "periods": [
                     *             {
                     *               "start_at": "2024-07-01",
                     *               "end_at": "2024-09-30",
                     *               "amount": "10000.0"
                     *             }
                     *           ],
                     *           "performance": [
                     *             {
                     *               "date": "July, 2024",
                     *               "actual": "-100%",
                     *               "amount": "10000.0"
                     *             }
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Budgets"];
                };
            };
        };
    };
    createBudget: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createBudget"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "bdgt_ea1eaec89d553e34",
                     *       "name": "New Budget Name",
                     *       "workspace_token": "wrkspc_b83e21368ee5fd9d",
                     *       "user_token": null,
                     *       "created_by_token": "team_aea2488160e90528",
                     *       "cost_report_token": null,
                     *       "created_at": "2024-07-11T20:22:52Z",
                     *       "budget_alert_tokens": [],
                     *       "periods": [
                     *         {
                     *           "start_at": "2024-01-01",
                     *           "end_at": "2024-01-31",
                     *           "amount": "100.0"
                     *         },
                     *         {
                     *           "start_at": "2024-02-01",
                     *           "end_at": "2024-02-29",
                     *           "amount": "200.0"
                     *         },
                     *         {
                     *           "start_at": "2024-03-01",
                     *           "end_at": "2024-04-30",
                     *           "amount": "300.0"
                     *         }
                     *       ],
                     *       "performance": [
                     *         {
                     *           "date": "April, 2024",
                     *           "actual": "0%",
                     *           "amount": "300.0"
                     *         },
                     *         {
                     *           "date": "March, 2024",
                     *           "actual": "0%",
                     *           "amount": "300.0"
                     *         },
                     *         {
                     *           "date": "February, 2024",
                     *           "actual": "0%",
                     *           "amount": "200.0"
                     *         },
                     *         {
                     *           "date": "January, 2024",
                     *           "actual": "0%",
                     *           "amount": "100.0"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Budget"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description UnprocessableEntity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getBudget: {
        parameters: {
            query?: {
                /** @description Include performance data. */
                include_performance?: boolean;
            };
            header?: never;
            path: {
                budget_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "bdgt_24068dbacaaad7fb",
                     *       "name": "Total",
                     *       "workspace_token": "wrkspc_545a937d68541448",
                     *       "user_token": "usr_470d15b368844366",
                     *       "created_by_token": "usr_470d15b368844366",
                     *       "cost_report_token": "rprt_9ee9f29893956951",
                     *       "created_at": "2024-07-11T20:22:41Z",
                     *       "budget_alert_tokens": [],
                     *       "periods": [
                     *         {
                     *           "start_at": "2024-07-01",
                     *           "end_at": "2024-09-30",
                     *           "amount": "10000.0"
                     *         }
                     *       ],
                     *       "performance": [
                     *         {
                     *           "date": "July, 2024",
                     *           "actual": "-100%",
                     *           "amount": "10000.0"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Budget"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    updateBudget: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                budget_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["updateBudget"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "bdgt_39ce7f848dff6d54",
                     *       "name": "New Name New Budget Who Dis",
                     *       "workspace_token": "wrkspc_949771e4fb8d7bfe",
                     *       "user_token": "usr_9b375256090d0fda",
                     *       "created_by_token": "usr_9b375256090d0fda",
                     *       "cost_report_token": "rprt_07325bc3667263b7",
                     *       "created_at": "2024-07-11T20:22:48Z",
                     *       "budget_alert_tokens": [],
                     *       "periods": [
                     *         {
                     *           "start_at": "2023-01-01",
                     *           "end_at": "2023-01-31",
                     *           "amount": "234.0"
                     *         },
                     *         {
                     *           "start_at": "2024-01-01",
                     *           "end_at": "2024-01-31",
                     *           "amount": "123.0"
                     *         },
                     *         {
                     *           "start_at": "2024-07-01",
                     *           "end_at": "2024-09-30",
                     *           "amount": "10000.0"
                     *         }
                     *       ],
                     *       "performance": [
                     *         {
                     *           "date": "July, 2024",
                     *           "actual": "-100%",
                     *           "amount": "10000.0"
                     *         },
                     *         null,
                     *         null,
                     *         null,
                     *         null,
                     *         null,
                     *         {
                     *           "date": "January, 2024",
                     *           "actual": "-100%",
                     *           "amount": "123.0"
                     *         },
                     *         null,
                     *         null,
                     *         null,
                     *         null,
                     *         null,
                     *         null,
                     *         null,
                     *         null,
                     *         null,
                     *         null,
                     *         null,
                     *         {
                     *           "date": "January, 2023",
                     *           "actual": "1224%",
                     *           "amount": "234.0"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Budget"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    deleteBudget: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                budget_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Budget"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getBusinessMetrics: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The amount of results to return. The maximum is 1000. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "business_metrics": [
                     *         {
                     *           "token": "bsnss_mtrc_124dc3483510ac35",
                     *           "title": "Business Metric",
                     *           "created_by_token": "usr_80447a58ff9821dd",
                     *           "cost_report_tokens_with_metadata": [],
                     *           "import_type": "csv",
                     *           "integration_token": ""
                     *         },
                     *         {
                     *           "token": "bsnss_mtrc_2534c89d90b714f7",
                     *           "title": "AWS Metric",
                     *           "created_by_token": "usr_752202a1bb7c9a70",
                     *           "cost_report_tokens_with_metadata": [],
                     *           "import_type": "cloudwatch",
                     *           "integration_token": "accss_crdntl_742fd1207f8b6816",
                     *           "cloudwatch_fields": {
                     *             "stat": "Maximum",
                     *             "region": "us-east-1",
                     *             "namespace": "AWS/EC2",
                     *             "metric_name": "CPUUtilization",
                     *             "dimensions": [
                     *               {
                     *                 "name": "InstanceId",
                     *                 "value": "i-06105d0faad66r97"
                     *               }
                     *             ],
                     *             "label_dimension": null
                     *           }
                     *         },
                     *         {
                     *           "token": "bsnss_mtrc_c11f0f8dea953e92",
                     *           "title": "Datadog Metric",
                     *           "created_by_token": "usr_604fcaa892a23fe9",
                     *           "cost_report_tokens_with_metadata": [],
                     *           "import_type": "datadog_metrics",
                     *           "integration_token": "accss_crdntl_e0e11192748e69bb",
                     *           "datadog_metric_fields": {
                     *             "query": "avg:system.cpu.user{*}.rollup(avg, daily)"
                     *           }
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["BusinessMetrics"];
                };
            };
        };
    };
    createBusinessMetric: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createBusinessMetric"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "bsnss_mtrc_e8d0a6f35c9f4e8c",
                     *       "title": "New Biz Metric",
                     *       "created_by_token": "usr_464e70f8e230fa62",
                     *       "cost_report_tokens_with_metadata": [
                     *         {
                     *           "cost_report_token": "rprt_67a1e1ac3bb7cefd",
                     *           "unit_scale": "per_thousand",
                     *           "label_filter": [
                     *             "Dev",
                     *             "Prod",
                     *             "Staging",
                     *             ""
                     *           ]
                     *         }
                     *       ],
                     *       "import_type": "csv",
                     *       "integration_token": ""
                     *     }
                     */
                    "application/json": components["schemas"]["BusinessMetric"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description UnprocessableEntity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getBusinessMetric: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                business_metric_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "bsnss_mtrc_6d8f14830f9870ac",
                     *       "title": "Quo Lux",
                     *       "created_by_token": "usr_622d8870faf147bb",
                     *       "cost_report_tokens_with_metadata": [],
                     *       "import_type": "csv",
                     *       "integration_token": ""
                     *     }
                     */
                    "application/json": components["schemas"]["BusinessMetric"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    updateBusinessMetric: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                business_metric_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["updateBusinessMetric"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "bsnss_mtrc_e3d9bf77f276d23b",
                     *       "title": "New Title",
                     *       "created_by_token": "usr_1e4b6318373f5c98",
                     *       "cost_report_tokens_with_metadata": [
                     *         {
                     *           "cost_report_token": "rprt_54aa7c0519d3f1e2",
                     *           "unit_scale": "per_thousand",
                     *           "label_filter": [
                     *             "Dev",
                     *             "Prod",
                     *             "Staging",
                     *             ""
                     *           ]
                     *         },
                     *         {
                     *           "cost_report_token": "rprt_201403b36022766a",
                     *           "unit_scale": "per_million"
                     *         }
                     *       ],
                     *       "import_type": "csv",
                     *       "integration_token": ""
                     *     }
                     */
                    "application/json": components["schemas"]["BusinessMetric"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description UnprocessableEntity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    deleteBusinessMetric: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                business_metric_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BusinessMetric"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getBusinessMetricValues: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The amount of results to return. The maximum is 1000. */
                limit?: number;
                /** @description Query BusinessMetrics by the first date you would like to filter from. ISO 8601 Formatted - 2021-07-15 */
                start_date?: string;
            };
            header?: never;
            path: {
                business_metric_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "values": [
                     *         {
                     *           "date": "2024-01-03T00:00:00Z",
                     *           "amount": "300.0"
                     *         },
                     *         {
                     *           "date": "2024-01-02T00:00:00Z",
                     *           "amount": "200.0"
                     *         },
                     *         {
                     *           "date": "2024-01-01T00:00:00Z",
                     *           "amount": "100.0"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["BusinessMetricValues"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getBusinessMetricForecastedValues: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The amount of results to return. The maximum is 1000. */
                limit?: number;
                /** @description Query BusinessMetrics by the first date you would like to filter from. ISO 8601 Formatted - 2021-07-15 */
                start_date?: string;
            };
            header?: never;
            path: {
                business_metric_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "values": [
                     *         {
                     *           "date": "2025-01-03T00:00:00Z",
                     *           "amount": "300.0"
                     *         },
                     *         {
                     *           "date": "2025-01-02T00:00:00Z",
                     *           "amount": "200.0"
                     *         },
                     *         {
                     *           "date": "2025-01-01T00:00:00Z",
                     *           "amount": "100.0"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["BusinessMetricValues"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    updateBusinessMetricValuesCSV: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                business_metric_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /**
                     * Format: binary
                     * @description CSV file containing BusinessMetric dates and amounts
                     */
                    csv: string;
                    /**
                     * @description When true, imports values as forecasted metrics instead of historical metrics.
                     * @default false
                     */
                    forecasted?: boolean;
                };
                "multipart/form-data": {
                    /**
                     * Format: binary
                     * @description CSV file containing BusinessMetric dates and amounts
                     */
                    csv: string;
                    /**
                     * @description When true, imports values as forecasted metrics instead of historical metrics.
                     * @default false
                     */
                    forecasted?: boolean;
                };
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "bsnss_mtrc_6bb1021d8651923a",
                     *       "title": "Overhold",
                     *       "created_by_token": "usr_ad24de73bffb7791",
                     *       "cost_report_tokens_with_metadata": [],
                     *       "import_type": "csv",
                     *       "integration_token": ""
                     *     }
                     */
                    "application/json": components["schemas"]["BusinessMetric"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description UnprocessableEntity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getCostAlertEvents: {
        parameters: {
            query?: {
                /** @description The token of the report associated with the CostAlertEvent. */
                report_token?: string;
                /** @description The page of results to return. */
                page?: number;
                /** @description The number of results to return. The maximum is 1000. */
                limit?: number;
            };
            header?: never;
            path: {
                /** @description The token of the CostAlertEvent. */
                cost_alert_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v2/cost_alerts/cstm_alrt_rl_71cacf1cf755fe36/events",
                     *         "first": "https://api.vantage.sh/v2/cost_alerts/cstm_alrt_rl_71cacf1cf755fe36/events?page=1",
                     *         "next": null,
                     *         "last": "https://api.vantage.sh/v2/cost_alerts/cstm_alrt_rl_71cacf1cf755fe36/events?page=1",
                     *         "prev": null
                     *       },
                     *       "cost_alert_events": [
                     *         {
                     *           "token": "cstm_alrt_evnt_87124a0f2989837b",
                     *           "created_at": "2025-04-08T17:39:30Z",
                     *           "triggered_at": "2025-04-10T17:39:30Z",
                     *           "description": "Day over day costs for aws and storage increased by $500.0.",
                     *           "alert_type": "change_in_cost",
                     *           "metadata": {
                     *             "change_in_cost": "500.0",
                     *             "groupings": [
                     *               "aws",
                     *               "storage"
                     *             ]
                     *           },
                     *           "report_token": "rprt_e9f27fc1c3b68204",
                     *           "alert_token": "cstm_alrt_rl_71cacf1cf755fe36"
                     *         },
                     *         {
                     *           "token": "cstm_alrt_evnt_5c67b34433ea6e97",
                     *           "created_at": "2025-04-09T17:39:30Z",
                     *           "triggered_at": "2025-04-10T17:39:30Z",
                     *           "description": "Day over day costs for aws and storage increased by $500.0.",
                     *           "alert_type": "change_in_cost",
                     *           "metadata": {
                     *             "change_in_cost": "500.0",
                     *             "groupings": [
                     *               "aws",
                     *               "storage"
                     *             ]
                     *           },
                     *           "report_token": "rprt_1bdc694530d0b3d6",
                     *           "alert_token": "cstm_alrt_rl_71cacf1cf755fe36"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["CostAlertEvents"];
                };
            };
        };
    };
    getCostAlertEvent: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                cost_alert_token: string;
                event_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "cstm_alrt_evnt_bdc4f45f9a5f20f1",
                     *       "created_at": "2025-04-08T17:39:29Z",
                     *       "triggered_at": "2025-04-10T17:39:29Z",
                     *       "description": "Day over day costs for aws and storage increased by $500.0.",
                     *       "alert_type": "change_in_cost",
                     *       "metadata": {
                     *         "change_in_cost": "500.0",
                     *         "groupings": [
                     *           "aws",
                     *           "storage"
                     *         ]
                     *       },
                     *       "report_token": "rprt_9585e8071c2756d4",
                     *       "alert_token": "cstm_alrt_rl_42159424c0cf6fcb"
                     *     }
                     */
                    "application/json": components["schemas"]["CostAlertEvent"];
                };
            };
        };
    };
    getCostAlerts: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List all Cost Alerts */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v2/cost_alerts",
                     *         "first": "https://api.vantage.sh/v2/cost_alerts?page=1",
                     *         "next": null,
                     *         "last": "https://api.vantage.sh/v2/cost_alerts?page=1",
                     *         "prev": null
                     *       },
                     *       "cost_alerts": [
                     *         {
                     *           "token": "cstm_alrt_rl_945f63c6c91cd824",
                     *           "title": "Default Alert Rule",
                     *           "email_recipients": [],
                     *           "slack_channels": [],
                     *           "teams_channels": [],
                     *           "created_at": "2024-04-21T15:19:49.673Z",
                     *           "updated_at": "2025-04-21T15:19:49.673Z",
                     *           "workspace_token": "wrkspc_7d5a18b7d02942da",
                     *           "interval": "day",
                     *           "threshold": 1000,
                     *           "unit_type": "currency",
                     *           "report_tokens": [
                     *             "rprt_a88be0a2af07fe10"
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["CostAlerts"];
                };
            };
        };
    };
    createCostAlert: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createCostAlert"];
            };
        };
        responses: {
            /** @description Cost Alert created successfully. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "cstm_alrt_rl_76efd4cd0f56149a",
                     *       "title": "New Alert",
                     *       "email_recipients": [
                     *         "burl_mosciski@hayes.info"
                     *       ],
                     *       "slack_channels": [],
                     *       "teams_channels": [],
                     *       "created_at": "2025-04-21T15:19:49.891Z",
                     *       "updated_at": "2025-04-21T15:19:49.891Z",
                     *       "workspace_token": "wrkspc_a5e36f631519f7d3",
                     *       "interval": "month",
                     *       "threshold": 100,
                     *       "unit_type": "currency",
                     *       "report_tokens": [
                     *         "rprt_ccf0092d336de56c"
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["CostAlert"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getCostAlert: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The token of the Cost Alert. */
                cost_alert_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Get a Cost Alert */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "cstm_alrt_rl_db54d080e58bf82a",
                     *       "title": "Default Alert Rule",
                     *       "email_recipients": [],
                     *       "slack_channels": [],
                     *       "teams_channels": [],
                     *       "created_at": "2024-04-21T15:19:49.598Z",
                     *       "updated_at": "2025-04-21T15:19:49.598Z",
                     *       "workspace_token": "wrkspc_c94c58cd1f9a6314",
                     *       "interval": "day",
                     *       "threshold": 1000,
                     *       "unit_type": "currency",
                     *       "report_tokens": [
                     *         "rprt_7c787dfc49b17876"
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["CostAlert"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    updateCostAlert: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The token of the Cost Alert. */
                cost_alert_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["updateCostAlert"];
            };
        };
        responses: {
            /** @description Cost Alert updated successfully. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "cstm_alrt_rl_65ff8613224f4469",
                     *       "title": "Default Alert Rule",
                     *       "email_recipients": [
                     *         "andy.kuvalis@stanton.com",
                     *         "ismael_bashirian@jenkins.biz"
                     *       ],
                     *       "slack_channels": [],
                     *       "teams_channels": [],
                     *       "created_at": "2024-04-21T15:19:48.503Z",
                     *       "updated_at": "2025-04-21T15:19:48.537Z",
                     *       "workspace_token": "wrkspc_643e0e66ee5a4611",
                     *       "interval": "day",
                     *       "threshold": 500,
                     *       "unit_type": "currency",
                     *       "report_tokens": [
                     *         "rprt_bc47a84e3ab8a5d5"
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["CostAlert"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    deleteCostAlert: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The token of the Cost Alert. */
                cost_alert_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Cost Alert deleted successfully. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CostAlert"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getCostProviderAccounts: {
        parameters: {
            query?: {
                /** @description The token of the Workspace to list CostProviderAccounts for. Required if the API token is associated with multiple Workspaces. */
                workspace_token?: string;
                /** @description Filter by provider type. */
                provider?: "aws" | "azure" | "gcp" | "snowflake" | "databricks" | "mongo" | "datadog" | "fastly" | "new_relic" | "opencost" | "open_ai" | "oracle" | "confluent" | "planetscale" | "coralogix" | "kubernetes" | "custom_provider" | "github" | "linode" | "grafana" | "clickhouse" | "temporal" | "twilio" | "azure_csp" | "kubernetes_agent" | "anthropic" | "anyscale" | "cursor" | "elastic" | "vercel";
                /** @description Filter by provider account identifier. */
                account_id?: string;
                /** @description Filter by account name (exact match). */
                account_name?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of provider accounts. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "cost_provider_accounts": [
                     *         {
                     *           "title": "Azure Development Account",
                     *           "account_id": "azure-subscription-id",
                     *           "provider_uuid": "azure-subscription-uuid",
                     *           "provider": "azure"
                     *         },
                     *         {
                     *           "title": "AWS Test Account",
                     *           "account_id": "999888777666",
                     *           "provider_uuid": "arn:aws:organizations::999888777666:account/o-test123456/999888777666",
                     *           "provider": "aws"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["CostProviderAccounts"];
                };
            };
        };
    };
    getCostReports: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The amount of results to return. The maximum is 1000. */
                limit?: number;
                /** @description The token for the Folder you would like to fetch Reports from. */
                folder_token?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v2/cost_reports",
                     *         "first": "https://api.vantage.sh/v2/cost_reports?page=1",
                     *         "next": null,
                     *         "last": "https://api.vantage.sh/v2/cost_reports?page=1",
                     *         "prev": null
                     *       },
                     *       "cost_reports": [
                     *         {
                     *           "token": "rprt_403b6516ad289a52",
                     *           "title": "Untitled",
                     *           "folder_token": null,
                     *           "saved_filter_tokens": [
                     *             "svd_fltr_03a9f354fe7cad59"
                     *           ],
                     *           "business_metric_tokens_with_metadata": [],
                     *           "filter": null,
                     *           "groupings": "service,provider",
                     *           "settings": {
                     *             "include_credits": false,
                     *             "include_refunds": false,
                     *             "include_discounts": true,
                     *             "include_tax": true,
                     *             "amortize": true,
                     *             "unallocated": false,
                     *             "aggregate_by": "cost",
                     *             "show_previous_period": true
                     *           },
                     *           "created_at": "2024-07-03T00:00:00Z",
                     *           "workspace_token": "wrkspc_b7743329296e6e96",
                     *           "previous_period_start_date": null,
                     *           "previous_period_end_date": null,
                     *           "start_date": "2024-07-01",
                     *           "end_date": "2024-07-31",
                     *           "date_interval": "this_month",
                     *           "chart_type": "line",
                     *           "date_bin": "cumulative",
                     *           "chart_settings": {
                     *             "y_axis_dimension": "cost",
                     *             "x_axis_dimension": [
                     *               "date"
                     *             ]
                     *           }
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["CostReports"];
                };
            };
        };
    };
    createCostReport: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createCostReport"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "rprt_377f6f8b25e8053d",
                     *       "title": "New Cost Report",
                     *       "folder_token": "fldr_f20201244e42cb99",
                     *       "saved_filter_tokens": [
                     *         "svd_fltr_550e30f350ffafe4"
                     *       ],
                     *       "business_metric_tokens_with_metadata": [
                     *         {
                     *           "business_metric_token": "bsnss_mtrc_ff259eb1ce9fe935",
                     *           "unit_scale": "per_thousand",
                     *           "label_filter": [
                     *             "CBGB",
                     *             "Roxy",
                     *             "Studio 54",
                     *             ""
                     *           ]
                     *         }
                     *       ],
                     *       "filter": "costs.provider = 'aws' AND costs.service = 'Amazon Simple Storage Service'",
                     *       "groupings": "service,provider",
                     *       "settings": {
                     *         "include_credits": false,
                     *         "include_refunds": false,
                     *         "include_discounts": true,
                     *         "include_tax": true,
                     *         "amortize": true,
                     *         "unallocated": false,
                     *         "aggregate_by": "cost",
                     *         "show_previous_period": true
                     *       },
                     *       "created_at": "2024-07-03T00:00:00Z",
                     *       "workspace_token": "wrkspc_d364d177f557981e",
                     *       "previous_period_start_date": null,
                     *       "previous_period_end_date": null,
                     *       "start_date": "2024-07-01",
                     *       "end_date": "2024-07-31",
                     *       "date_interval": "this_month",
                     *       "chart_type": "bar",
                     *       "date_bin": "day",
                     *       "chart_settings": {
                     *         "y_axis_dimension": "cost",
                     *         "x_axis_dimension": [
                     *           "date"
                     *         ]
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["CostReport"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description UnprocessableEntity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getCostReport: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                cost_report_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "rprt_fb27faa25ef5ea72",
                     *       "title": "Untitled",
                     *       "folder_token": null,
                     *       "saved_filter_tokens": [
                     *         "svd_fltr_dd642aeffbe29367"
                     *       ],
                     *       "business_metric_tokens_with_metadata": [],
                     *       "filter": null,
                     *       "groupings": "service,provider",
                     *       "settings": {
                     *         "include_credits": false,
                     *         "include_refunds": false,
                     *         "include_discounts": true,
                     *         "include_tax": true,
                     *         "amortize": true,
                     *         "unallocated": false,
                     *         "aggregate_by": "cost",
                     *         "show_previous_period": true
                     *       },
                     *       "created_at": "2024-07-03T00:00:00Z",
                     *       "workspace_token": "wrkspc_e5c550d14cfa3101",
                     *       "previous_period_start_date": null,
                     *       "previous_period_end_date": null,
                     *       "start_date": "2024-07-01",
                     *       "end_date": "2024-07-31",
                     *       "date_interval": "this_month",
                     *       "chart_type": "line",
                     *       "date_bin": "cumulative",
                     *       "chart_settings": {
                     *         "y_axis_dimension": "cost",
                     *         "x_axis_dimension": [
                     *           "date"
                     *         ]
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["CostReport"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    updateCostReport: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                cost_report_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["updateCostReport"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "rprt_c02b21cb3750e2c8",
                     *       "title": "Updated Cost Report",
                     *       "folder_token": "fldr_5671a9c9785c0aff",
                     *       "saved_filter_tokens": [
                     *         "svd_fltr_fe456f29a8e9a706"
                     *       ],
                     *       "business_metric_tokens_with_metadata": [
                     *         {
                     *           "business_metric_token": "bsnss_mtrc_352795a0c2b0be50",
                     *           "unit_scale": "per_thousand",
                     *           "label_filter": [
                     *             "CBGB",
                     *             "Roxy",
                     *             "Studio 54",
                     *             ""
                     *           ]
                     *         },
                     *         {
                     *           "business_metric_token": "bsnss_mtrc_13ce0c4cb90eb641",
                     *           "unit_scale": "per_million"
                     *         }
                     *       ],
                     *       "filter": "costs.provider = 'azure'",
                     *       "groupings": "account_id,service",
                     *       "settings": {
                     *         "include_credits": false,
                     *         "include_refunds": false,
                     *         "include_discounts": true,
                     *         "include_tax": true,
                     *         "amortize": true,
                     *         "unallocated": false,
                     *         "aggregate_by": "cost",
                     *         "show_previous_period": true
                     *       },
                     *       "created_at": "2024-07-03T00:00:00Z",
                     *       "workspace_token": "wrkspc_b727d292ad47b28b",
                     *       "previous_period_start_date": null,
                     *       "previous_period_end_date": null,
                     *       "start_date": "2024-07-01",
                     *       "end_date": "2024-07-31",
                     *       "date_interval": "this_month",
                     *       "chart_type": "pie",
                     *       "date_bin": "week",
                     *       "chart_settings": {
                     *         "y_axis_dimension": "cost",
                     *         "x_axis_dimension": [
                     *           "date"
                     *         ]
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["CostReport"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    deleteCostReport: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                cost_report_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CostReport"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getForecastedCosts: {
        parameters: {
            query?: {
                /** @description First date you would like to filter forecasted costs from. ISO 8601 formatted. */
                start_date?: string;
                /** @description Last date you would like to filter forecasted costs from. ISO 8601 formatted. */
                end_date?: string;
                /** @description Limit the forecasted costs to a specific provider. 'all' is accepted to filter to overall forecast. */
                provider?: "aws" | "azure" | "gcp" | "snowflake" | "databricks" | "mongo" | "datadog" | "fastly" | "new_relic" | "opencost" | "open_ai" | "oracle" | "confluent" | "planetscale" | "coralogix" | "kubernetes" | "custom_provider" | "github" | "linode" | "grafana" | "clickhouse" | "temporal" | "twilio" | "azure_csp" | "kubernetes_agent" | "anthropic" | "anyscale" | "cursor" | "elastic" | "vercel" | "all";
                /** @description Limit the forecasted costs to a specific service. 'all' is accepted to filter to overall forecast. e.g. 'Amazon ElastiCache'. */
                service?: string;
                /** @description The page of results to return. */
                page?: number;
                /** @description The amount of results to return. The maximum is 1000. */
                limit?: number;
            };
            header?: never;
            path: {
                cost_report_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v2/cost_reports/rprt_3f79e0058066d5f7/forecasted_costs",
                     *         "first": "https://api.vantage.sh/v2/cost_reports/rprt_3f79e0058066d5f7/forecasted_costs?page=1",
                     *         "next": null,
                     *         "last": "https://api.vantage.sh/v2/cost_reports/rprt_3f79e0058066d5f7/forecasted_costs?page=1",
                     *         "prev": null
                     *       },
                     *       "forecasted_costs": [
                     *         {
                     *           "date": "2024-07-04T00:00:00Z",
                     *           "amount": "10.0",
                     *           "provider": "all",
                     *           "service": "all"
                     *         },
                     *         {
                     *           "date": "2024-07-04T00:00:00Z",
                     *           "amount": "10.0",
                     *           "provider": "aws",
                     *           "service": "Amazon Elastic Compute Cloud - Compute"
                     *         },
                     *         {
                     *           "date": "2024-07-04T00:00:00Z",
                     *           "amount": "10.0",
                     *           "provider": "azure",
                     *           "service": "Virtual Machines"
                     *         },
                     *         {
                     *           "date": "2024-07-05T00:00:00Z",
                     *           "amount": "10.0",
                     *           "provider": "all",
                     *           "service": "all"
                     *         },
                     *         {
                     *           "date": "2024-07-05T00:00:00Z",
                     *           "amount": "10.0",
                     *           "provider": "aws",
                     *           "service": "Amazon Elastic Compute Cloud - Compute"
                     *         },
                     *         {
                     *           "date": "2024-07-05T00:00:00Z",
                     *           "amount": "10.0",
                     *           "provider": "azure",
                     *           "service": "Virtual Machines"
                     *         },
                     *         {
                     *           "date": "2024-07-06T00:00:00Z",
                     *           "amount": "10.0",
                     *           "provider": "all",
                     *           "service": "all"
                     *         },
                     *         {
                     *           "date": "2024-07-06T00:00:00Z",
                     *           "amount": "10.0",
                     *           "provider": "aws",
                     *           "service": "Amazon Elastic Compute Cloud - Compute"
                     *         },
                     *         {
                     *           "date": "2024-07-06T00:00:00Z",
                     *           "amount": "10.0",
                     *           "provider": "azure",
                     *           "service": "Virtual Machines"
                     *         }
                     *       ],
                     *       "currency": "USD"
                     *     }
                     */
                    "application/json": components["schemas"]["ForecastedCosts"];
                };
            };
        };
    };
    createCostExport: {
        parameters: {
            query?: {
                /** @description Group the results by specific field(s). Defaults to provider, service, account_id. Valid groupings: account_id, billing_account_id, charge_type, cost_category, cost_subcategory, provider, region, resource_id, service, tagged, tag:<tag_value>. If providing multiple groupings, join as comma separated values: groupings=provider,service,region */
                groupings?: string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createCostExport"];
            };
        };
        responses: {
            /** @description The data export has been queued and will be available at the location specified in the Location header. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description PaymentRequired */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getCosts: {
        parameters: {
            query?: {
                /** @description The CostReport token. */
                cost_report_token?: string;
                /** @description The VQL filter to apply to the costs. If this is supplied you do not need cost_report_token. */
                filter?: string;
                /** @description The token of the Workspace to query costs from. Ignored if 'cost_report_token' is set. Required if the API token is associated with multiple Workspaces. */
                workspace_token?: string;
                /** @description First date you would like to filter costs from. ISO 8601 formatted. */
                start_date?: string;
                /** @description Last date you would like to filter costs to. ISO 8601 formatted. */
                end_date?: string;
                /** @description Group the results by specific field(s). Defaults to provider, service, account_id. Valid groupings: account_id, billing_account_id, charge_type, cost_category, cost_subcategory, provider, region, resource_id, service, tagged, tag:<tag_value>. If providing multiple groupings, join as comma separated values: groupings=provider,service,region */
                groupings?: string[];
                /** @description Whether to order costs by date in an ascending or descending manner. */
                order?: "asc" | "desc";
                /** @description The amount of results to return. The maximum is 5000. */
                limit?: number;
                /** @description The page of results to return. */
                page?: number;
                /** @description The date bin of the costs. Defaults to the report's default or day. */
                date_bin?: "day" | "week" | "month" | "quarter";
                /** @description Results will include credits. */
                "settings[include_credits]"?: boolean;
                /** @description Results will include refunds. */
                "settings[include_refunds]"?: boolean;
                /** @description Results will include discounts. */
                "settings[include_discounts]"?: boolean;
                /** @description Results will include tax. */
                "settings[include_tax]"?: boolean;
                /** @description Results will amortize. */
                "settings[amortize]"?: boolean;
                /** @description Results will show unallocated costs. */
                "settings[unallocated]"?: boolean;
                /** @description Results will aggregate by cost or usage. */
                "settings[aggregate_by]"?: string;
                /** @description Results will show previous period costs or usage comparison. */
                "settings[show_previous_period]"?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v2/costs?cost_report_token=rprt_ea7dbb4f5783d677",
                     *         "first": "https://api.vantage.sh/v2/costs?cost_report_token=rprt_ea7dbb4f5783d677&page=1",
                     *         "next": null,
                     *         "last": null,
                     *         "prev": null
                     *       },
                     *       "total_cost": {
                     *         "amount": "500.0",
                     *         "currency": "USD"
                     *       },
                     *       "costs": [
                     *         {
                     *           "accrued_at": "2023-06-05",
                     *           "amount": "100.0",
                     *           "currency": "USD",
                     *           "provider": "aws",
                     *           "account_id": "mock_56789",
                     *           "service": "AmazonSNS"
                     *         },
                     *         {
                     *           "accrued_at": "2023-06-04",
                     *           "amount": "100.0",
                     *           "currency": "USD",
                     *           "provider": "aws",
                     *           "account_id": "mock_56789",
                     *           "service": "AmazonSNS"
                     *         },
                     *         {
                     *           "accrued_at": "2023-06-03",
                     *           "amount": "100.0",
                     *           "currency": "USD",
                     *           "provider": "aws",
                     *           "account_id": "mock_56789",
                     *           "service": "AmazonSNS"
                     *         },
                     *         {
                     *           "accrued_at": "2023-06-02",
                     *           "amount": "100.0",
                     *           "currency": "USD",
                     *           "provider": "aws",
                     *           "account_id": "mock_56789",
                     *           "service": "AmazonSNS"
                     *         },
                     *         {
                     *           "accrued_at": "2023-06-01",
                     *           "amount": "100.0",
                     *           "currency": "USD",
                     *           "provider": "aws",
                     *           "account_id": "mock_56789",
                     *           "service": "AmazonSNS"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Costs"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description PaymentRequired */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getDashboards: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The amount of results to return. The maximum is 1000. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v2/dashboards",
                     *         "first": "https://api.vantage.sh/v2/dashboards?page=1",
                     *         "next": null,
                     *         "last": "https://api.vantage.sh/v2/dashboards?page=1",
                     *         "prev": null
                     *       },
                     *       "dashboards": [
                     *         {
                     *           "token": "dshbrd_13d78294a06f0f84",
                     *           "title": "Executive Overview",
                     *           "widget_tokens": [
                     *             "rprt_7c3cb814dfb6d881"
                     *           ],
                     *           "widgets": [
                     *             {
                     *               "widgetable_token": "rprt_7c3cb814dfb6d881",
                     *               "title": "Cost Report",
                     *               "settings": {
                     *                 "display_type": "chart"
                     *               }
                     *             }
                     *           ],
                     *           "saved_filter_tokens": [
                     *             "svd_fltr_3c6f5eb635cf88de"
                     *           ],
                     *           "date_bin": null,
                     *           "date_interval": null,
                     *           "start_date": null,
                     *           "end_date": null,
                     *           "created_at": "2024-12-17T00:44:48Z",
                     *           "updated_at": "2024-12-17T00:44:48Z",
                     *           "workspace_token": "wrkspc_ea1a7802e5fe06b3"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Dashboards"];
                };
            };
        };
    };
    createDashboard: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createDashboard"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "dshbrd_7e272e8d3de34719",
                     *       "title": "New Dashboard",
                     *       "widget_tokens": [
                     *         "fncl_cmnt_rprt_d4743c186c130e30",
                     *         "kbnts_eff_rprt_892d1566bd543b67",
                     *         "rprt_750074c1b25b372a"
                     *       ],
                     *       "widgets": [
                     *         {
                     *           "widgetable_token": "fncl_cmnt_rprt_d4743c186c130e30",
                     *           "title": "All Financial Commitments",
                     *           "settings": {
                     *             "display_type": "chart"
                     *           }
                     *         },
                     *         {
                     *           "widgetable_token": "kbnts_eff_rprt_892d1566bd543b67",
                     *           "title": "All Kubernetes Nodes Efficiency",
                     *           "settings": {
                     *             "display_type": "table"
                     *           }
                     *         },
                     *         {
                     *           "widgetable_token": "rprt_750074c1b25b372a",
                     *           "title": "Azure Cost Report",
                     *           "settings": {
                     *             "display_type": "chart"
                     *           }
                     *         }
                     *       ],
                     *       "saved_filter_tokens": [
                     *         "svd_fltr_3f45aefa131861ac"
                     *       ],
                     *       "date_bin": "week",
                     *       "date_interval": "this_month",
                     *       "start_date": "2023-08-01",
                     *       "end_date": "2023-08-31",
                     *       "created_at": "2023-08-15T00:00:00Z",
                     *       "updated_at": "2023-08-15T00:00:00Z",
                     *       "workspace_token": "wrkspc_08e043cc14ced776"
                     *     }
                     */
                    "application/json": components["schemas"]["Dashboard"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getDashboard: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dashboard_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v2/dashboards",
                     *         "first": "https://api.vantage.sh/v2/dashboards?page=1",
                     *         "next": null,
                     *         "last": "https://api.vantage.sh/v2/dashboards?page=1",
                     *         "prev": null
                     *       },
                     *       "dashboards": [
                     *         {
                     *           "token": "dshbrd_e7c5b49d826b6f71",
                     *           "title": "Executive Overview",
                     *           "widget_tokens": [
                     *             "rprt_27e80d7a8d3f34e6"
                     *           ],
                     *           "widgets": [
                     *             {
                     *               "widgetable_token": "rprt_27e80d7a8d3f34e6",
                     *               "title": "Weekly Sales Report",
                     *               "settings": {
                     *                 "display_type": "chart"
                     *               }
                     *             }
                     *           ],
                     *           "saved_filter_tokens": [
                     *             "svd_fltr_7bb508e881e7fe5f"
                     *           ],
                     *           "date_bin": null,
                     *           "date_interval": null,
                     *           "start_date": null,
                     *           "end_date": null,
                     *           "created_at": "2024-12-17T00:44:48Z",
                     *           "updated_at": "2024-12-17T00:44:48Z",
                     *           "workspace_token": "wrkspc_245288e3c3a7377f"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Dashboard"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    updateDashboard: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dashboard_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["updateDashboard"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "dshbrd_2c942eb3a8d3962a",
                     *       "title": "Updated Dashboard",
                     *       "widget_tokens": [
                     *         "fncl_cmnt_rprt_ea316a453acd20c0",
                     *         "kbnts_eff_rprt_e3fc91cb63fd5469",
                     *         "rprt_7b0be9c16c5a6785"
                     *       ],
                     *       "widgets": [
                     *         {
                     *           "widgetable_token": "fncl_cmnt_rprt_ea316a453acd20c0",
                     *           "title": "All Financial Commitments",
                     *           "settings": {
                     *             "display_type": "chart"
                     *           }
                     *         },
                     *         {
                     *           "widgetable_token": "kbnts_eff_rprt_e3fc91cb63fd5469",
                     *           "title": "Kubernetes Efficiency Report",
                     *           "settings": {
                     *             "display_type": "table"
                     *           }
                     *         },
                     *         {
                     *           "widgetable_token": "rprt_7b0be9c16c5a6785",
                     *           "title": "Azure Report",
                     *           "settings": {
                     *             "display_type": "chart"
                     *           }
                     *         }
                     *       ],
                     *       "saved_filter_tokens": [
                     *         "svd_fltr_51c106391f7295b7"
                     *       ],
                     *       "date_bin": "week",
                     *       "date_interval": "this_month",
                     *       "start_date": "2023-08-01",
                     *       "end_date": "2023-08-31",
                     *       "created_at": "2024-12-17T00:44:45Z",
                     *       "updated_at": "2023-08-15T00:00:00Z",
                     *       "workspace_token": "wrkspc_0e5c381029cdc016"
                     *     }
                     */
                    "application/json": components["schemas"]["Dashboard"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    deleteDashboard: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dashboard_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Dashboard"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getDataExport: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                data_export_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Returns the completed data export and its manifest. If it is still pending, the response will be a 202 and the caller should check the Location and Retry-After headers to determine where and how long to wait before polling again. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "dta_xprt_964b2adb9bff37fb",
                     *       "status": "completed",
                     *       "created_at": "2025-03-27T20:46:31Z",
                     *       "export_type": "cost_report",
                     *       "manifest": {
                     *         "files": [
                     *           "https://example.com/file1.csv"
                     *         ],
                     *         "completed_at": "2025-03-27T20:46:31Z",
                     *         "valid_until": "2025-03-28T20:46:31Z"
                     *       },
                     *       "attributes": {
                     *         "report_token": null,
                     *         "start_date": null,
                     *         "end_date": null,
                     *         "groupings": [],
                     *         "vql": null,
                     *         "settings": null,
                     *         "date_bin": null
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["DataExport"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description PaymentRequired */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getExchangeRates: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The number of results to return. The maximum is 1000. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "exchange_rates": [
                     *         {
                     *           "base_currency_code": "USD",
                     *           "currency_code": "PHP",
                     *           "rate": "300.011",
                     *           "effective_date": "2025-09-01",
                     *           "updated_at": "2025-09-10 00:05:41 UTC"
                     *         }
                     *       ],
                     *       "meta": {
                     *         "current_page": 1,
                     *         "next_page": null,
                     *         "prev_page": null,
                     *         "total_pages": 1,
                     *         "total_count": 1
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["ExchangeRates"];
                };
            };
        };
    };
    createExchangeRatesViaCsv: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /**
                     * Format: binary
                     * @description CSV file containing exchange rates. Format: base_currency_code, currency_code, rate, date (YYYY-MM-DD)
                     */
                    csv: string;
                };
                "multipart/form-data": {
                    /**
                     * Format: binary
                     * @description CSV file containing exchange rates. Format: base_currency_code, currency_code, rate, date (YYYY-MM-DD)
                     */
                    csv: string;
                };
            };
        };
        responses: {
            /** @description CSV uploaded successfully */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getFinancialCommitmentReports: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The amount of results to return. The maximum is 1000. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v2/financial_commitment_reports",
                     *         "first": "https://api.vantage.sh/v2/financial_commitment_reports?page=1",
                     *         "next": null,
                     *         "last": "https://api.vantage.sh/v2/financial_commitment_reports?page=1",
                     *         "prev": null
                     *       },
                     *       "financial_commitment_reports": [
                     *         {
                     *           "token": "fncl_cmnt_rprt_28bc840bf137769c",
                     *           "title": "All Financial Commitments",
                     *           "default": false,
                     *           "created_at": "2025-01-27T21:42:06Z",
                     *           "workspace_token": "wrkspc_f8d8bd5e493a734c",
                     *           "user_token": null,
                     *           "start_date": "2024-10-01",
                     *           "end_date": "2025-01-25",
                     *           "date_interval": "last_3_months",
                     *           "date_bucket": "month",
                     *           "groupings": "cost_type",
                     *           "on_demand_costs_scope": "discountable",
                     *           "filter": "(financial_commitments.provider = 'aws')"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["FinancialCommitmentReports"];
                };
            };
        };
    };
    createFinancialCommitmentReport: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createFinancialCommitmentReport"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "fncl_cmnt_rprt_d0f702a7d0ff20a4",
                     *       "title": "title",
                     *       "default": false,
                     *       "created_at": "2025-01-27T21:42:07Z",
                     *       "workspace_token": "wrkspc_609f0ae3bffb9f37",
                     *       "user_token": null,
                     *       "start_date": "2024-10-01",
                     *       "end_date": "2025-01-25",
                     *       "date_interval": "last_3_months",
                     *       "date_bucket": "month",
                     *       "groupings": "cost_type",
                     *       "on_demand_costs_scope": "discountable",
                     *       "filter": "financial_commitments.provider = 'aws'"
                     *     }
                     */
                    "application/json": components["schemas"]["FinancialCommitmentReport"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description UnprocessableEntity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getFinancialCommitmentReport: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                financial_commitment_report_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "fncl_cmnt_rprt_86a93126175f91ed",
                     *       "title": "All Financial Commitments",
                     *       "default": false,
                     *       "created_at": "2025-01-27T21:42:04Z",
                     *       "workspace_token": "wrkspc_0e9408c2a0682914",
                     *       "user_token": null,
                     *       "start_date": "2024-10-01",
                     *       "end_date": "2025-01-25",
                     *       "date_interval": "last_3_months",
                     *       "date_bucket": "month",
                     *       "groupings": "cost_type",
                     *       "on_demand_costs_scope": "discountable",
                     *       "filter": "(financial_commitments.provider = 'aws')"
                     *     }
                     */
                    "application/json": components["schemas"]["FinancialCommitmentReport"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    updateFinancialCommitmentReport: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                financial_commitment_report_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["updateFinancialCommitmentReport"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "fncl_cmnt_rprt_38f1d3fcee354f6a",
                     *       "title": "new title",
                     *       "default": false,
                     *       "created_at": "2025-01-27T21:42:06Z",
                     *       "workspace_token": "wrkspc_358df7afe2a742fb",
                     *       "user_token": null,
                     *       "start_date": "2024-10-01",
                     *       "end_date": "2025-01-25",
                     *       "date_interval": "last_3_months",
                     *       "date_bucket": "week",
                     *       "groupings": "cost_type,commitment_type",
                     *       "on_demand_costs_scope": "discountable",
                     *       "filter": "(financial_commitments.provider = 'aws')"
                     *     }
                     */
                    "application/json": components["schemas"]["FinancialCommitmentReport"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description UnprocessableEntity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    deleteFinancialCommitmentReport: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                financial_commitment_report_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FinancialCommitmentReport"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getFinancialCommitments: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The amount of results to return. The maximum is 1000. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v2/financial_commitments",
                     *         "first": "https://api.vantage.sh/v2/financial_commitments?page=1",
                     *         "next": null,
                     *         "last": "https://api.vantage.sh/v2/financial_commitments?page=1",
                     *         "prev": null
                     *       },
                     *       "financial_commitments": [
                     *         {
                     *           "commitment_type": "aws_savings_plan",
                     *           "service": "Compute",
                     *           "account": "153271892032",
                     *           "type": "3 Year Compute Savings Plan",
                     *           "instance_count": null,
                     *           "term": "1 Year",
                     *           "payment_type": "No upfront",
                     *           "region": null,
                     *           "purchase_date": "2024-04-15",
                     *           "expiration_date": "2025-04-15",
                     *           "commitment": "$1.00",
                     *           "status": "active",
                     *           "created_at": "2024-04-15T19:51:27Z",
                     *           "workspace_token": "wrkspc_8c897c3d73b69279"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["FinancialCommitments"];
                };
            };
        };
    };
    getFolders: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The amount of results to return. The maximum is 1000. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v2/folders",
                     *         "first": "https://api.vantage.sh/v2/folders?page=1",
                     *         "next": null,
                     *         "last": "https://api.vantage.sh/v2/folders?page=1",
                     *         "prev": null
                     *       },
                     *       "folders": [
                     *         {
                     *           "token": "fldr_baf37f32280f5444",
                     *           "title": "synergy",
                     *           "parent_folder_token": null,
                     *           "created_at": "2023-09-12T05:06:54Z",
                     *           "updated_at": "2023-09-12T05:06:54Z",
                     *           "workspace_token": "wrkspc_f583a08beb76f679"
                     *         },
                     *         {
                     *           "token": "fldr_625d4591e46f7dfa",
                     *           "title": "website",
                     *           "parent_folder_token": "fldr_baf37f32280f5444",
                     *           "created_at": "2023-09-12T05:06:54Z",
                     *           "updated_at": "2023-09-12T05:06:54Z",
                     *           "workspace_token": "wrkspc_f583a08beb76f679"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Folders"];
                };
            };
        };
    };
    createFolder: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createFolder"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "fldr_4aabe6f482c2a9e4",
                     *       "title": "New Folder",
                     *       "parent_folder_token": "fldr_4d29cbecf2601266",
                     *       "created_at": "2023-09-12T05:06:52Z",
                     *       "updated_at": "2023-09-12T05:06:52Z",
                     *       "workspace_token": "wrkspc_510cc77828001f9b"
                     *     }
                     */
                    "application/json": components["schemas"]["Folder"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getFolder: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                folder_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "fldr_3653e0f460786b1e",
                     *       "title": "intermediate",
                     *       "parent_folder_token": "fldr_b6bf120a1d3a794b",
                     *       "created_at": "2023-09-12T05:07:36Z",
                     *       "updated_at": "2023-09-12T05:07:36Z",
                     *       "workspace_token": "wrkspc_a707105ff54966c3"
                     *     }
                     */
                    "application/json": components["schemas"]["Folder"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    updateFolder: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                folder_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["updateFolder"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "fldr_68e18d8d7df0be96",
                     *       "title": "New Title",
                     *       "parent_folder_token": "fldr_9aa0c735a6b615c6",
                     *       "created_at": "2023-09-12T05:06:53Z",
                     *       "updated_at": "2023-09-12T05:06:53Z",
                     *       "workspace_token": "wrkspc_e65a48e5d9684439"
                     *     }
                     */
                    "application/json": components["schemas"]["Folder"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    deleteFolder: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                folder_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Folder"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getIntegrations: {
        parameters: {
            query?: {
                /** @description Query by provider name to list all Integrations for a specific provider. */
                provider?: "aws" | "azure" | "gcp" | "snowflake" | "databricks" | "mongo" | "datadog" | "fastly" | "new_relic" | "opencost" | "open_ai" | "oracle" | "confluent" | "planetscale" | "coralogix" | "kubernetes" | "custom_provider" | "github" | "linode" | "grafana" | "clickhouse" | "temporal" | "twilio" | "azure_csp" | "kubernetes_agent" | "anthropic" | "anyscale" | "cursor" | "elastic" | "vercel";
                /** @description Query by account identifier to list all Integrations that match a specific account. For Azure, this is the subscription ID. Must include provider when using this parameter. */
                account_identifier?: string;
                /** @description The page of results to return. */
                page?: number;
                /** @description The number of results to return. The maximum is 1000. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v2/integrations",
                     *         "first": "https://api.vantage.sh/v2/integrations?page=1",
                     *         "next": null,
                     *         "last": "https://api.vantage.sh/v2/integrations?page=1",
                     *         "prev": null
                     *       },
                     *       "integrations": [
                     *         {
                     *           "token": "accss_crdntl_ac985d1d8bb8bc12",
                     *           "provider": "gcp",
                     *           "account_identifier": "project_id-3fc92ac0",
                     *           "status": "imported",
                     *           "last_updated": "2024-07-30T15:30:22Z",
                     *           "workspace_tokens": [
                     *             "wrkspc_838cb4508ead3f6d"
                     *           ],
                     *           "created_at": "2024-07-29T21:41:49Z",
                     *           "managed_account_tokens": []
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Integrations"];
                };
            };
        };
    };
    getIntegration: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                integration_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "accss_crdntl_f45057cd18834fc7",
                     *       "provider": "gcp",
                     *       "account_identifier": "project_id-4d4c6f0b",
                     *       "status": "imported",
                     *       "last_updated": "2024-07-30T15:30:22Z",
                     *       "workspace_tokens": [
                     *         "wrkspc_d69f96653fb985d6"
                     *       ],
                     *       "created_at": "2024-07-29T21:41:49Z",
                     *       "managed_account_tokens": [
                     *         "acct_1a2b3c4d5e6f7890"
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Integration"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    updateIntegration: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                integration_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["updateIntegration"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "accss_crdntl_4de527c50afa4fd3",
                     *       "provider": "gcp",
                     *       "account_identifier": "project_id-e38a8e02",
                     *       "status": "imported",
                     *       "last_updated": "2024-07-30T15:30:22Z",
                     *       "workspace_tokens": [
                     *         "wrkspc_6bffe31969c9f385"
                     *       ],
                     *       "created_at": "2024-07-29T21:41:44Z",
                     *       "managed_account_tokens": []
                     *     }
                     */
                    "application/json": components["schemas"]["Integration"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    deleteIntegration: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                integration_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Integration"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    createCustomProviderIntegration: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createCustomProviderIntegration"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "accss_crdntl_35665ec3deb12451",
                     *       "provider": "custom_provider",
                     *       "account_identifier": "Custom Provider Integration",
                     *       "status": "imported",
                     *       "last_updated": null,
                     *       "workspace_tokens": [],
                     *       "created_at": "2024-08-27T22:22:24Z",
                     *       "managed_account_tokens": []
                     *     }
                     */
                    "application/json": components["schemas"]["Integration"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    createUserCostsUploadViaCsv: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                integration_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /**
                     * Format: binary
                     * @description CSV file containing custom costs
                     */
                    csv: string;
                    /**
                     * @description Attempt to automatically transform the CSV file to match the FOCUS format.
                     * @default false
                     */
                    auto_transform?: boolean;
                };
                "multipart/form-data": {
                    /**
                     * Format: binary
                     * @description CSV file containing custom costs
                     */
                    csv: string;
                    /**
                     * @description Attempt to automatically transform the CSV file to match the FOCUS format.
                     * @default false
                     */
                    auto_transform?: boolean;
                };
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "usr_csts_upld_68f53287682faaf8",
                     *       "filename": "costs.csv20240827-15484-pfxe9o",
                     *       "amount": "1000.0",
                     *       "start_date": "2021-01-01",
                     *       "end_date": "2021-02-01",
                     *       "import_status": "processing",
                     *       "created_by_token": "usr_9ad0e852b8c67db5",
                     *       "created_at": "2024-08-27T22:44:29.220Z"
                     *     }
                     */
                    "application/json": components["schemas"]["UserCostsUpload"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description UnprocessableEntity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    deleteUserCostsUpload: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                integration_token: string;
                user_costs_upload_token: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Cost"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getUserCostsUploads: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                integration_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "user_costs_uploads": [
                     *         {
                     *           "token": "usr_csts_upld_1805b925d993c7f7",
                     *           "filename": "costs_0.csv",
                     *           "amount": "1234.56",
                     *           "start_date": "2021-01-01",
                     *           "end_date": "2021-03-31",
                     *           "import_status": "complete",
                     *           "created_by_token": "usr_72af6fb04ab65f3a",
                     *           "created_at": "2024-08-27T22:44:31.565Z"
                     *         },
                     *         {
                     *           "token": "usr_csts_upld_c3f4d5fbb23f96ce",
                     *           "filename": "costs_1.csv",
                     *           "amount": "789.01",
                     *           "start_date": "2021-04-01",
                     *           "end_date": "2021-06-30",
                     *           "import_status": "processing",
                     *           "created_by_token": "usr_b06d7ed79c48f02e",
                     *           "created_at": "2024-08-27T22:44:31.582Z"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["UserCostsUploads"];
                };
            };
        };
    };
    createGCPIntegration: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createGCPIntegration"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "accss_crdntl_c36f82e698677581",
                     *       "provider": "gcp",
                     *       "account_identifier": "A11111-B22222-C33333",
                     *       "status": "imported",
                     *       "last_updated": null,
                     *       "workspace_tokens": [],
                     *       "created_at": "2024-07-29T21:41:46Z",
                     *       "managed_account_tokens": []
                     *     }
                     */
                    "application/json": components["schemas"]["Integration"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    createAzureIntegration: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createAzureIntegration"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "accss_crdntl_6eddcfaa81f7303f",
                     *       "provider": "azure",
                     *       "account_identifier": "fake-tenant",
                     *       "status": "imported",
                     *       "last_updated": null,
                     *       "workspace_tokens": [],
                     *       "created_at": "2024-07-29T21:41:48Z",
                     *       "managed_account_tokens": []
                     *     }
                     */
                    "application/json": components["schemas"]["Integration"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getInvoices: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The amount of results to return. The maximum is 1000. */
                limit?: number;
                /** @description Filter invoices by managed account token (MSP accounts only) */
                managed_account_token?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Invoices"];
                };
            };
        };
    };
    createInvoice: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createInvoice"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Invoice"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getInvoice: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                invoice_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Invoice"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    downloadInvoice: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                invoice_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["downloadInvoice"];
            };
        };
        responses: {
            /** @description Returns download URL for the invoice file */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    sendInvoice: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                invoice_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Invoice sent successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SendInvoice"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    sendAndApproveInvoice: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                invoice_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Invoice approved and sent successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SendInvoice"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getInvoiceCostReport: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                invoice_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Get cost report URL for invoice period. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CostReportUrl"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    regenerateInvoice: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                invoice_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Invoice regeneration started */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Invoice"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getKubernetesEfficiencyReports: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The amount of results to return. The maximum is 1000. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v2/kubernetes_efficiency_reports",
                     *         "first": "https://api.vantage.sh/v2/kubernetes_efficiency_reports?page=1",
                     *         "next": null,
                     *         "last": "https://api.vantage.sh/v2/kubernetes_efficiency_reports?page=1",
                     *         "prev": null
                     *       },
                     *       "kubernetes_efficiency_reports": [
                     *         {
                     *           "token": "kbnts_eff_rprt_f8d610afacc7e6c6",
                     *           "title": "Cluster Idle Costs",
                     *           "default": false,
                     *           "created_at": "2024-10-25T21:20:43Z",
                     *           "workspace_token": "wrkspc_64768b29bebf9dfe",
                     *           "user_token": null,
                     *           "start_date": "2024-10-01",
                     *           "end_date": "2024-10-31",
                     *           "date_interval": "this_month",
                     *           "date_bucket": "day",
                     *           "aggregated_by": "idle_cost",
                     *           "groupings": "cluster_id"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["KubernetesEfficiencyReports"];
                };
            };
        };
    };
    createKubernetesEfficiencyReport: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createKubernetesEfficiencyReport"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "kbnts_eff_rprt_b5c0eedc83b259be",
                     *       "title": "title",
                     *       "default": false,
                     *       "created_at": "2024-11-05T20:32:30Z",
                     *       "workspace_token": "wrkspc_71e915f9671fa270",
                     *       "user_token": null,
                     *       "start_date": "2024-11-01",
                     *       "end_date": "2024-11-30",
                     *       "date_interval": "this_month",
                     *       "date_bucket": "day",
                     *       "aggregated_by": "idle_cost",
                     *       "groupings": "cluster_id",
                     *       "filter": "kubernetes.cluster_id   =   'cluster-1'"
                     *     }
                     */
                    "application/json": components["schemas"]["KubernetesEfficiencyReport"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description UnprocessableEntity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    createKubernetesEfficiencyReportExport: {
        parameters: {
            query?: {
                /** @description Group the results by specific field(s). Valid groupings: cluster_id, namespace, labeled, category, pod, label, label:<label_name>. */
                groupings?: string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createKubernetesEfficiencyReportExport"];
            };
        };
        responses: {
            /** @description The data export has been queued and will be available at the location specified in the Location header. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DataExport"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getKubernetesEfficiencyReport: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                kubernetes_efficiency_report_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "kbnts_eff_rprt_8f8b9caaffee230b",
                     *       "title": "+1 disrupt.",
                     *       "default": false,
                     *       "created_at": "2024-10-25T21:20:43Z",
                     *       "workspace_token": "wrkspc_d6ab5f555d9bd0b5",
                     *       "user_token": null,
                     *       "start_date": "2024-10-01",
                     *       "end_date": "2024-10-31",
                     *       "date_interval": "this_month",
                     *       "date_bucket": "day",
                     *       "aggregated_by": "idle_cost",
                     *       "groupings": "cluster_id"
                     *     }
                     */
                    "application/json": components["schemas"]["KubernetesEfficiencyReport"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    updateKubernetesEfficiencyReport: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                kubernetes_efficiency_report_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["updateKubernetesEfficiencyReport"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "kbnts_eff_rprt_f9ee5fadf5e1a6e6",
                     *       "title": "new title",
                     *       "default": false,
                     *       "created_at": "2024-10-25T21:20:42Z",
                     *       "workspace_token": "wrkspc_303c3228e22ccb6f",
                     *       "user_token": null,
                     *       "start_date": "2024-10-01",
                     *       "end_date": "2024-10-31",
                     *       "date_interval": "this_month",
                     *       "date_bucket": "day",
                     *       "aggregated_by": "idle_cost",
                     *       "groupings": "cluster_id"
                     *     }
                     */
                    "application/json": components["schemas"]["KubernetesEfficiencyReport"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description UnprocessableEntity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    deleteKubernetesEfficiencyReport: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                kubernetes_efficiency_report_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KubernetesEfficiencyReport"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getManagedAccounts: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The amount of results to return. The maximum is 1000. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v2/managed_accounts",
                     *         "first": "https://api.vantage.sh/v2/managed_accounts?page=1",
                     *         "next": null,
                     *         "last": "https://api.vantage.sh/v2/managed_accounts?page=1",
                     *         "prev": null
                     *       },
                     *       "managed_accounts": [
                     *         {
                     *           "token": "acct_be30cfd09cf0b3c5",
                     *           "name": "Rep. Gavin Berge",
                     *           "contact_email": "gavin_berge_rep@orn.net",
                     *           "parent_account_token": "acct_f95654a3aefab4b7",
                     *           "access_credential_tokens": [],
                     *           "billing_rule_tokens": [],
                     *           "email_domain": null
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ManagedAccounts"];
                };
            };
        };
    };
    createManagedAccount: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createManagedAccount"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "acct_ace620fc3d602740",
                     *       "name": "New Managed Account",
                     *       "contact_email": "admin@acme.com",
                     *       "parent_account_token": "acct_e6baa6dcf81b4e20",
                     *       "access_credential_tokens": [
                     *         "accss_crdntl_72a8c8ab1d6c9d2c"
                     *       ],
                     *       "billing_rule_tokens": [],
                     *       "email_domain": null
                     *     }
                     */
                    "application/json": components["schemas"]["ManagedAccount"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getManagedAccount: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                managed_account_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "acct_d3f99e1941a01861",
                     *       "name": "Tamisha Mohr",
                     *       "contact_email": "mohr_tamisha@vandervort.io",
                     *       "parent_account_token": "acct_aaa060a863c2012b",
                     *       "access_credential_tokens": [],
                     *       "billing_rule_tokens": [],
                     *       "email_domain": null
                     *     }
                     */
                    "application/json": components["schemas"]["ManagedAccount"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    updateManagedAccount: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                managed_account_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["updateManagedAccount"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "acct_dd2fdf6564b60319",
                     *       "name": "New Name",
                     *       "contact_email": "newguy@acme.com",
                     *       "parent_account_token": "acct_bb022aecd1125ada",
                     *       "access_credential_tokens": [
                     *         "accss_crdntl_686904ffd39a4618"
                     *       ],
                     *       "billing_rule_tokens": [],
                     *       "email_domain": null
                     *     }
                     */
                    "application/json": components["schemas"]["ManagedAccount"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    deleteManagedAccount: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                managed_account_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ManagedAccount"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    updateSsoConnectionForManagedAccount: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                managed_account_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["updateSsoConnectionForManagedAccount"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ManagedAccount"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    createSsoConnectionForManagedAccount: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                managed_account_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createSsoConnectionForManagedAccount"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ManagedAccount"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getMe: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description General information about the user. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Me"];
                };
            };
        };
    };
    getCostProviders: {
        parameters: {
            query?: {
                /** @description The token of the Workspace to list CostProviders for. Required if the API token is associated with multiple Workspaces. */
                workspace_token?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of connected CostProviders. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CostProviders"];
                };
            };
        };
    };
    getCostServices: {
        parameters: {
            query?: {
                /** @description The token of the Workspace to list CostServices for. Required if the API token is associated with multiple Workspaces. */
                workspace_token?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of CostServices, used to query costs using VQL. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CostServices"];
                };
            };
        };
    };
    createUserFeedback: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createUserFeedback"];
            };
        };
        responses: {
            /** @description Provide UserFeedback for our product and features. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserFeedback"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description UnprocessableEntity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getNetworkFlowReports: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The amount of results to return. The maximum is 1000. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v2/network_flow_reports",
                     *         "first": "https://api.vantage.sh/v2/network_flow_reports?page=1",
                     *         "next": null,
                     *         "last": "https://api.vantage.sh/v2/network_flow_reports?page=1",
                     *         "prev": null
                     *       },
                     *       "network_flow_reports": [
                     *         {
                     *           "token": "ntflw_lg_rprt_185dd0e7ecbeefde",
                     *           "title": "All Network Flow Logs",
                     *           "default": false,
                     *           "created_at": "2025-01-31T20:40:43Z",
                     *           "workspace_token": "wrkspc_5e659968c5c9381c",
                     *           "created_by_token": null,
                     *           "start_date": "2025-01-24",
                     *           "end_date": "2025-01-30",
                     *           "date_interval": "last_7_days",
                     *           "groupings": "resource_uuid,traffic_category,peer_resource_uuid",
                     *           "flow_direction": null,
                     *           "flow_weight": "costs",
                     *           "filter": null
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["NetworkFlowReports"];
                };
            };
        };
    };
    createNetworkFlowReport: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createNetworkFlowReport"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "ntflw_lg_rprt_c6107e302cb8723e",
                     *       "title": "title",
                     *       "default": false,
                     *       "created_at": "2025-01-31T20:40:46Z",
                     *       "workspace_token": "wrkspc_0aa4a5d5a5fc2608",
                     *       "created_by_token": "team_ed7fb90535f87b9f",
                     *       "start_date": "2025-01-24",
                     *       "end_date": "2025-01-30",
                     *       "date_interval": "last_7_days",
                     *       "groupings": "resource_uuid,traffic_category,peer_resource_uuid",
                     *       "flow_direction": null,
                     *       "flow_weight": "costs",
                     *       "filter": "network_flow_logs.traffic_category = 'cross_az'"
                     *     }
                     */
                    "application/json": components["schemas"]["NetworkFlowReport"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description UnprocessableEntity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getNetworkFlowReport: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                network_flow_report_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "ntflw_lg_rprt_5a091da3979075e5",
                     *       "title": "All Network Flow Logs",
                     *       "default": false,
                     *       "created_at": "2025-01-31T20:40:44Z",
                     *       "workspace_token": "wrkspc_5c2f9bd4f7a647e2",
                     *       "created_by_token": null,
                     *       "start_date": "2025-01-24",
                     *       "end_date": "2025-01-30",
                     *       "date_interval": "last_7_days",
                     *       "groupings": "resource_uuid,traffic_category,peer_resource_uuid",
                     *       "flow_direction": null,
                     *       "flow_weight": "costs",
                     *       "filter": null
                     *     }
                     */
                    "application/json": components["schemas"]["NetworkFlowReport"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    updateNetworkFlowReport: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                network_flow_report_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["updateNetworkFlowReport"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "ntflw_lg_rprt_a5178e27a1be73a3",
                     *       "title": "new title",
                     *       "default": false,
                     *       "created_at": "2025-01-31T20:40:47Z",
                     *       "workspace_token": "wrkspc_f8b981b7707ddda5",
                     *       "created_by_token": null,
                     *       "start_date": "2025-01-24",
                     *       "end_date": "2025-01-30",
                     *       "date_interval": "last_7_days",
                     *       "groupings": "region,vpc_id",
                     *       "flow_direction": "egress",
                     *       "flow_weight": "bytes",
                     *       "filter": null
                     *     }
                     */
                    "application/json": components["schemas"]["NetworkFlowReport"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description UnprocessableEntity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    deleteNetworkFlowReport: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                network_flow_report_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["NetworkFlowReport"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getPrices: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The amount of results to return. The maximum is 1000 */
                limit?: number;
            };
            header?: never;
            path: {
                product_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v1/products/aws-ec2-m5d_16xlarge/prices",
                     *         "first": "https://api.vantage.sh/v1/products/aws-ec2-m5d_16xlarge/prices?page=1",
                     *         "next": null,
                     *         "last": "https://api.vantage.sh/v1/products/aws-ec2-m5d_16xlarge/prices?page=1",
                     *         "prev": null
                     *       },
                     *       "prices": [
                     *         {
                     *           "id": "aws-ec2-m5d_16xlarge-eu_central_1-on_demand-linux_enterprise",
                     *           "unit": "hour",
                     *           "region": "eu-central-1",
                     *           "rate_type": "compute",
                     *           "currency": "USD",
                     *           "amount": 27.328,
                     *           "details": {
                     *             "platform": "linux-enterprise",
                     *             "lifecycle": "on-demand"
                     *           }
                     *         },
                     *         {
                     *           "id": "aws-ec2-m5d_16xlarge-us_east_1-on_demand-linux_enterprise",
                     *           "unit": "hour",
                     *           "region": "us-east-1",
                     *           "rate_type": "compute",
                     *           "currency": "USD",
                     *           "amount": 3.616,
                     *           "details": {
                     *             "platform": "linux-enterprise",
                     *             "lifecycle": "on-demand"
                     *           }
                     *         },
                     *         {
                     *           "id": "aws-ec2-m5d_16xlarge-us_east_1-on_demand-rhel",
                     *           "unit": "hour",
                     *           "region": "us-east-1",
                     *           "rate_type": "compute",
                     *           "currency": "USD",
                     *           "amount": 3.746,
                     *           "details": {
                     *             "platform": "rhel",
                     *             "lifecycle": "on-demand"
                     *           }
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Prices"];
                };
            };
        };
    };
    getPrice: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                product_id: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": "aws-ec2-m5d_16xlarge-eu_central_1-on_demand-linux_enterprise",
                     *       "unit": "hour",
                     *       "region": "eu-central-1",
                     *       "rate_type": "compute",
                     *       "currency": "USD",
                     *       "amount": 27.328,
                     *       "details": {
                     *         "platform": "linux-enterprise",
                     *         "lifecycle": "on-demand"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["Price"];
                };
            };
        };
    };
    getProducts: {
        parameters: {
            query?: {
                /** @description Query by Provider to list all Products across all Services for a Provider. e.g. aws */
                provider_id?: string;
                /** @description Query by Service to list all Products for a specific provider service. e.g. aws-ec2 */
                service_id?: string;
                /** @description Query by name of the Product to see a list of products which match that name. e.g. m5a.16xlarge */
                name?: string;
                /** @description The page of results to return. */
                page?: number;
                /** @description The amount of results to return. The maximum is 1000 */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v1/products",
                     *         "first": "https://api.vantage.sh/v1/products?page=1",
                     *         "next": null,
                     *         "last": "https://api.vantage.sh/v1/products?page=1",
                     *         "prev": null
                     *       },
                     *       "products": [
                     *         {
                     *           "id": "aws-ec2-m5d_16xlarge",
                     *           "category": "compute",
                     *           "name": "m5d.16xlarge",
                     *           "service_id": "aws-ec2",
                     *           "provider_id": "aws",
                     *           "details": {
                     *             "gpu": 0,
                     *             "name": "M5 General Purpose 16xlarge",
                     *             "vcpu": 64,
                     *             "memory": 256,
                     *             "clock_speed_ghz": 3.1,
                     *             "physical_processor_description": "Intel Xeon Platinum 8175 (Skylake)",
                     *             "network_performance_description": "20 Gigabit"
                     *           }
                     *         },
                     *         {
                     *           "id": "aws-ec2-c5a_8xlarge",
                     *           "category": "compute",
                     *           "name": "c5a.8xlarge",
                     *           "service_id": "aws-ec2",
                     *           "provider_id": "aws",
                     *           "details": {
                     *             "gpu": 0,
                     *             "name": "C5A 8xlarge",
                     *             "vcpu": 64,
                     *             "memory": 256
                     *           }
                     *         },
                     *         {
                     *           "id": "aws-ec2-c5a_4large",
                     *           "category": "compute",
                     *           "name": "c5a.4large",
                     *           "service_id": "aws-ec2",
                     *           "provider_id": "aws",
                     *           "details": {
                     *             "gpu": 0,
                     *             "name": "C5A 4large",
                     *             "vcpu": 64,
                     *             "memory": 4
                     *           }
                     *         },
                     *         {
                     *           "id": "aws-s3-standard",
                     *           "category": "object_storage",
                     *           "name": "standard",
                     *           "service_id": "aws-s3",
                     *           "provider_id": "aws",
                     *           "details": {}
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Products"];
                };
            };
        };
    };
    getProduct: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": "aws-ec2-m5d_16xlarge",
                     *       "category": "compute",
                     *       "name": "m5d.16xlarge",
                     *       "service_id": "aws-ec2",
                     *       "provider_id": "aws",
                     *       "details": {
                     *         "gpu": 0,
                     *         "name": "M5 General Purpose 16xlarge",
                     *         "vcpu": 64,
                     *         "memory": 256,
                     *         "clock_speed_ghz": 3.1,
                     *         "physical_processor_description": "Intel Xeon Platinum 8175 (Skylake)",
                     *         "network_performance_description": "20 Gigabit"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["Product"];
                };
            };
        };
    };
    getRecommendations: {
        parameters: {
            query?: {
                /** @description Filter by one or more providers. Requires workspace_token. */
                provider_ids?: ("aws" | "gcp" | "azure" | "kubernetes" | "datadog")[];
                /** @description Filter by billing account identifiers. Requires workspace_token. */
                billing_account_ids?: string[];
                /** @description Filter by account identifiers. Requires workspace_token. */
                account_ids?: string[];
                /** @description Filter by region slugs (e.g. us-east-1, eastus, asia-east1). Requires workspace_token. */
                regions?: string[];
                /** @description Filter by tag key (must be used with tag_value). Requires workspace_token. */
                tag_key?: string;
                /** @description Filter by tag value (requires tag_key). Requires workspace_token. */
                tag_value?: string;
                /** @description Filter recommendations created on/after this YYYY-MM-DD date. Requires workspace_token. */
                start_date?: string;
                /** @description Filter recommendations created on/before this YYYY-MM-DD date. Requires workspace_token. */
                end_date?: string;
                /** @description Filter by status. */
                status?: "active" | "archived";
                /** @description The page of results to return. */
                page?: number;
                /** @description The number of results to return. The maximum is 1000. */
                limit?: number;
                /** @description Filter by workspace. */
                workspace_token?: string;
                /** @description Filter by provider account id (AWS account, Azure subscription id, etc). */
                provider_account_id?: string;
                /** @description Filter by exact recommendation category. Ignored when type is provided. */
                category?: string;
                /** @description Fuzzy filter by recommendation type using a case-insensitive literal substring. Examples: aws, aws:ec2, aws:ec2:rightsizing. */
                type?: string;
                /** @description Filter by provider. */
                provider?: "aws" | "gcp" | "azure" | "kubernetes" | "datadog";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v2/recommendations",
                     *         "first": "https://api.vantage.sh/v2/recommendations?page=1",
                     *         "next": null,
                     *         "last": "https://api.vantage.sh/v2/recommendations?page=1",
                     *         "prev": null
                     *       },
                     *       "recommendations": [
                     *         {
                     *           "token": "rcmmndtn_9bb8fa992d5b876b",
                     *           "type": null,
                     *           "category": "ip_unattached",
                     *           "workspace_token": "wrkspc_e0e58b3c1ddef29c",
                     *           "provider": "aws",
                     *           "provider_account_id": "123456789012",
                     *           "description": "IP address is not attached to an instance.",
                     *           "potential_savings": "100.0",
                     *           "service": "AWS IP",
                     *           "created_at": "2026-01-28T16:53:32Z",
                     *           "resources_affected_count": 0,
                     *           "currency_code": "USD",
                     *           "currency_symbol": "$"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Recommendations"];
                };
            };
        };
    };
    getRecommendation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                recommendation_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "rcmmndtn_0eea161ff1a4d183",
                     *       "type": null,
                     *       "category": "ip_unattached",
                     *       "workspace_token": "wrkspc_634a8ca67ed39555",
                     *       "provider": "aws",
                     *       "provider_account_id": "123456789012",
                     *       "description": "IP address is not attached to an instance.",
                     *       "potential_savings": "100.0",
                     *       "service": "AWS IP",
                     *       "created_at": "2026-01-28T16:53:23Z",
                     *       "resources_affected_count": 0,
                     *       "currency_code": "USD",
                     *       "currency_symbol": "$"
                     *     }
                     */
                    "application/json": components["schemas"]["Recommendation"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getRecommendationResources: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The number of results to return. The maximum is 1000. */
                limit?: number;
            };
            header?: never;
            path: {
                recommendation_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v2/recommendations/rcmmndtn_073dad68f8be41a2/resources",
                     *         "first": "https://api.vantage.sh/v2/recommendations/rcmmndtn_073dad68f8be41a2/resources?page=1",
                     *         "next": null,
                     *         "last": "https://api.vantage.sh/v2/recommendations/rcmmndtn_073dad68f8be41a2/resources?page=1",
                     *         "prev": null
                     *       },
                     *       "resources": [
                     *         {
                     *           "token": "prvdr_rsrc_8ec00e4b4c410538",
                     *           "resource_id": "i-12345",
                     *           "recommendation_actions": [
                     *             {
                     *               "action": "modify",
                     *               "description": "Migrate to c5a.xlarge. Reasons: CPU over-provisioned, EBS IOPS over-provisioned, EBS throughput over-provisioned, Network bandwidth over-provisioned, and Network PPS over-provisioned.",
                     *               "potential_savings": "100.0",
                     *               "instance_type": "c5a.xlarge",
                     *               "remediation_cli_command": "aws ec2 modify-instance-attribute --instance-id i-12345 --instance-type '{\"Value\": \"c5a.xlarge\"}'"
                     *             }
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["RecommendationProviderResources"];
                };
            };
        };
    };
    getRecommendationResource: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                recommendation_token: string;
                resource_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "prvdr_rsrc_3065ac9b0999c363",
                     *       "resource_id": "i-12345",
                     *       "recommendation_actions": [
                     *         {
                     *           "action": "modify",
                     *           "description": "Migrate to c5a.xlarge. Reasons: CPU over-provisioned, EBS IOPS over-provisioned, EBS throughput over-provisioned, Network bandwidth over-provisioned, and Network PPS over-provisioned.",
                     *           "potential_savings": "100.0",
                     *           "instance_type": "c5a.xlarge",
                     *           "remediation_cli_command": "aws ec2 modify-instance-attribute --instance-id i-12345 --instance-type '{\"Value\": \"c5a.xlarge\"}'"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ProviderResource"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getRecommendationTypeResources: {
        parameters: {
            query: {
                /** @description Filter by one or more providers. Requires workspace_token. */
                provider_ids?: ("aws" | "gcp" | "azure" | "kubernetes" | "datadog")[];
                /** @description Filter by billing account identifiers. Requires workspace_token. */
                billing_account_ids?: string[];
                /** @description Filter by account identifiers. Requires workspace_token. */
                account_ids?: string[];
                /** @description Filter by region slugs (e.g. us-east-1, eastus, asia-east1). Requires workspace_token. */
                regions?: string[];
                /** @description Filter by tag key (must be used with tag_value). Requires workspace_token. */
                tag_key?: string;
                /** @description Filter by tag value (requires tag_key). Requires workspace_token. */
                tag_value?: string;
                /** @description Filter recommendations created on/after this YYYY-MM-DD date. Requires workspace_token. */
                start_date?: string;
                /** @description Filter recommendations created on/before this YYYY-MM-DD date. Requires workspace_token. */
                end_date?: string;
                /** @description Filter by status. */
                status?: "active" | "archived";
                /** @description The page of results to return. */
                page?: number;
                /** @description The number of results to return. The maximum is 1000. */
                limit?: number;
                /** @description The workspace token to filter recommendations by. Required. */
                workspace_token: string;
            };
            header?: never;
            path: {
                type: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "resources": [
                     *         {
                     *           "token": "pvdr_rsrc_abc123",
                     *           "resource_id": "i-1234567890abcdef0",
                     *           "recommendation_actions": [
                     *             {
                     *               "action": "modify",
                     *               "instance_type": "c5a.xlarge",
                     *               "description": "Migrate to c5a.xlarge for cost savings.",
                     *               "potential_savings": "100.00"
                     *             }
                     *           ]
                     *         }
                     *       ],
                     *       "links": {
                     *         "first": "/v2/recommendations/by_type/aws:ec2:co-rightsizing/resources?workspace_token=wrkspc_abc123&page=1",
                     *         "last": "/v2/recommendations/by_type/aws:ec2:co-rightsizing/resources?workspace_token=wrkspc_abc123&page=1"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["RecommendationProviderResources"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getRecommendationViews: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The amount of results to return. The maximum is 1000. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v2/recommendation_views",
                     *         "first": "https://api.vantage.sh/v2/recommendation_views?page=1",
                     *         "next": null,
                     *         "last": "https://api.vantage.sh/v2/recommendation_views?page=1",
                     *         "prev": null
                     *       },
                     *       "recommendation_views": [
                     *         {
                     *           "token": "rec_vw_3dffc0458f7a2487",
                     *           "title": "Production Recommendations",
                     *           "workspace_token": "wrkspc_914dcb0959497507",
                     *           "start_date": "2024-01-01",
                     *           "end_date": "2024-12-31",
                     *           "provider_ids": [
                     *             "aws",
                     *             "gcp"
                     *           ],
                     *           "billing_account_ids": [],
                     *           "account_ids": [
                     *             "123456789012"
                     *           ],
                     *           "regions": [
                     *             "us-east-1",
                     *             "us-west-2"
                     *           ],
                     *           "tag_key": "environment",
                     *           "tag_value": "production",
                     *           "created_at": "2024-07-15T16:08:53Z",
                     *           "created_by": "usr_95fac32734bdceab"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["RecommendationViews"];
                };
            };
        };
    };
    createRecommendationView: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createRecommendationView"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "rec_vw_a1b2c3d4e5f67890",
                     *       "title": "Staging Recommendations",
                     *       "workspace_token": "wrkspc_be6568a301b1d06c",
                     *       "start_date": "2024-01-01",
                     *       "end_date": "2024-06-30",
                     *       "provider_ids": [
                     *         "aws"
                     *       ],
                     *       "billing_account_ids": [],
                     *       "account_ids": [],
                     *       "regions": [],
                     *       "tag_key": "environment",
                     *       "tag_value": "staging",
                     *       "created_at": "2024-07-15T16:10:00Z",
                     *       "created_by": "usr_95fac32734bdceab"
                     *     }
                     */
                    "application/json": components["schemas"]["RecommendationView"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description UnprocessableEntity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getRecommendationView: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                recommendation_view_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "rec_vw_be3f24eb1b5aabf6",
                     *       "title": "Production Recommendations",
                     *       "workspace_token": "wrkspc_be6568a301b1d06c",
                     *       "start_date": "2024-01-01",
                     *       "end_date": "2024-12-31",
                     *       "provider_ids": [
                     *         "aws",
                     *         "gcp"
                     *       ],
                     *       "billing_account_ids": [],
                     *       "account_ids": [
                     *         "123456789012"
                     *       ],
                     *       "regions": [
                     *         "us-east-1",
                     *         "us-west-2"
                     *       ],
                     *       "tag_key": "environment",
                     *       "tag_value": "production",
                     *       "created_at": "2024-07-15T16:08:54Z",
                     *       "created_by": "team_73f6001f98e9012b"
                     *     }
                     */
                    "application/json": components["schemas"]["RecommendationView"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    updateRecommendationView: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                recommendation_view_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["updateRecommendationView"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "rec_vw_be3f24eb1b5aabf6",
                     *       "title": "Updated Recommendations View",
                     *       "workspace_token": "wrkspc_be6568a301b1d06c",
                     *       "start_date": "2024-01-01",
                     *       "end_date": "2024-12-31",
                     *       "provider_ids": [
                     *         "aws",
                     *         "gcp",
                     *         "azure"
                     *       ],
                     *       "billing_account_ids": [],
                     *       "account_ids": [
                     *         "123456789012",
                     *         "987654321098"
                     *       ],
                     *       "regions": [
                     *         "us-east-1",
                     *         "us-west-2",
                     *         "ap-northeast-2"
                     *       ],
                     *       "tag_key": "environment",
                     *       "tag_value": "production",
                     *       "created_at": "2024-07-15T16:08:54Z",
                     *       "created_by": "team_73f6001f98e9012b"
                     *     }
                     */
                    "application/json": components["schemas"]["RecommendationView"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description UnprocessableEntity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    deleteRecommendationView: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                recommendation_view_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RecommendationView"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getReportNotifications: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The amount of results to return. The maximum is 1000. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v2/report_notifications",
                     *         "first": "https://api.vantage.sh/v2/report_notifications?page=1",
                     *         "next": null,
                     *         "last": "https://api.vantage.sh/v2/report_notifications?page=1",
                     *         "prev": null
                     *       },
                     *       "report_notifications": [
                     *         {
                     *           "token": "rprt_ntfctn_7c09ca27d07d8d1e",
                     *           "title": "Test Notification",
                     *           "cost_report_token": "rprt_ba0a5a5201390d72",
                     *           "user_tokens": [
                     *             "usr_27edb13f3beac3cb"
                     *           ],
                     *           "frequency": "weekly",
                     *           "change": "percentage"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ReportNotifications"];
                };
            };
        };
    };
    createReportNotification: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createReportNotification"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "rprt_ntfctn_8ce31b43a149cd2e",
                     *       "title": "New Report Notification",
                     *       "cost_report_token": "rprt_933010600676b02f",
                     *       "user_tokens": [
                     *         "usr_45e7d17e9f402226"
                     *       ],
                     *       "frequency": "daily",
                     *       "change": "percentage"
                     *     }
                     */
                    "application/json": components["schemas"]["ReportNotification"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description UnprocessableEntity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getReportNotification: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                report_notification_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "rprt_ntfctn_21b4287a212406b1",
                     *       "title": "Test Notification",
                     *       "cost_report_token": "rprt_d084c84455edc606",
                     *       "user_tokens": [
                     *         "usr_56d53f802edba3e6"
                     *       ],
                     *       "frequency": "weekly",
                     *       "change": "percentage"
                     *     }
                     */
                    "application/json": components["schemas"]["ReportNotification"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    updateReportNotification: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                report_notification_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["updateReportNotification"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "rprt_ntfctn_b36b208a90ee87f6",
                     *       "title": "Updated Report Notification",
                     *       "cost_report_token": "rprt_07b88c04aa6bed8c",
                     *       "user_tokens": [
                     *         "usr_35ed19fadcfed8c9"
                     *       ],
                     *       "frequency": "weekly",
                     *       "change": "dollars"
                     *     }
                     */
                    "application/json": components["schemas"]["ReportNotification"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    deleteReportNotification: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                report_notification_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ReportNotification"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getResourceReportColumns: {
        parameters: {
            query: {
                /** @description VQL resource type name (https://docs.vantage.sh/vql_resource_report#costs-by-resource-type) */
                resource_type: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Returns array of available column names for the specified resource type */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "columns": [
                     *         "provider",
                     *         "label",
                     *         "accruedCosts",
                     *         "recommendationSavings",
                     *         "resource",
                     *         "type",
                     *         "region",
                     *         "account",
                     *         "provisionedState",
                     *         "maxCpu",
                     *         "maxMemory",
                     *         "maxGpu",
                     *         "maxGpuMemory",
                     *         "maxEbsReadOpsPerSecond",
                     *         "maxEbsWriteOpsPerSecond",
                     *         "maxEbsReadBytesPerSecond",
                     *         "maxEbsWriteBytesPerSecond",
                     *         "maxDiskReadOpsPerSecond",
                     *         "maxDiskWriteOpsPerSecond",
                     *         "maxDiskReadBytesPerSecond",
                     *         "maxDiskWriteBytesPerSecond",
                     *         "maxNetworkInBytesPerSecond",
                     *         "maxNetworkOutBytesPerSecond",
                     *         "maxNetworkPacketsInPerSecond",
                     *         "maxNetworkPacketsOutPerSecond",
                     *         "maxNetworkThroughputDailyByte",
                     *         "maxDatabaseConnections",
                     *         "instanceId",
                     *         "imageId",
                     *         "vpcId",
                     *         "subnetId",
                     *         "publicIpAddress",
                     *         "privateIpAddress",
                     *         "publicDnsName",
                     *         "instanceType",
                     *         "instanceFamily",
                     *         "platform",
                     *         "spotInstanceRequestId",
                     *         "launchTime",
                     *         "instanceLifecycle",
                     *         "state",
                     *         "name",
                     *         "platformType",
                     *         "platformDetails",
                     *         "spotInfo",
                     *         "spotPrice",
                     *         "datadogAgentInstalled",
                     *         "networkInterfaces",
                     *         "tags"
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ResourceReportColumns"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getResourceReports: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The number of results to return. The maximum is 1000. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v2/resource_reports",
                     *         "first": "https://api.vantage.sh/v2/resource_reports?page=1",
                     *         "next": null,
                     *         "last": "https://api.vantage.sh/v2/resource_reports?page=1",
                     *         "prev": null
                     *       },
                     *       "resource_reports": [
                     *         {
                     *           "token": "prvdr_rsrc_rprt_955ad21703b22099",
                     *           "title": "Resource Report 1274a351",
                     *           "filter": "(resources.provider = 'aws')",
                     *           "created_at": "2025-08-14T19:13:30Z",
                     *           "workspace_token": "wrkspc_490ea5f144c3896c",
                     *           "user_token": null,
                     *           "created_by_token": null,
                     *           "columns": [
                     *             "provider",
                     *             "label",
                     *             "accrued_costs",
                     *             "recommendation_savings",
                     *             "resource",
                     *             "type",
                     *             "region",
                     *             "account"
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ResourceReports"];
                };
            };
        };
    };
    createResourceReport: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createResourceReport"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "prvdr_rsrc_rprt_d881b5362adab1c2",
                     *       "title": "EC2 Report",
                     *       "filter": "resources.provider = 'aws' and resources.type = 'aws_instance'",
                     *       "created_at": "2025-08-14T19:13:32Z",
                     *       "workspace_token": "wrkspc_e5a36fbae0021598",
                     *       "user_token": null,
                     *       "created_by_token": "team_16f0d31149f3254a",
                     *       "columns": [
                     *         "provider",
                     *         "label",
                     *         "accrued_costs",
                     *         "recommendation_savings",
                     *         "resource",
                     *         "type",
                     *         "region",
                     *         "account"
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ResourceReport"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description UnprocessableEntity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getResourceReport: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                resource_report_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "prvdr_rsrc_rprt_5270d2a0708fd74f",
                     *       "title": "Resource Report 84541657",
                     *       "filter": "(resources.provider = 'aws')",
                     *       "created_at": "2025-08-14T19:13:30Z",
                     *       "workspace_token": "wrkspc_2ed2f1a59293a996",
                     *       "user_token": null,
                     *       "created_by_token": null,
                     *       "columns": [
                     *         "provider",
                     *         "label",
                     *         "accrued_costs",
                     *         "recommendation_savings",
                     *         "resource",
                     *         "type",
                     *         "region",
                     *         "account"
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ResourceReport"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    updateResourceReport: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                resource_report_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["updateResourceReport"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "prvdr_rsrc_rprt_79e32da0783a830f",
                     *       "title": "EC2 Edited Report",
                     *       "filter": "resources.provider = 'aws' and resources.type = 'aws_ebs_volume'",
                     *       "created_at": "2025-08-14T19:13:31Z",
                     *       "workspace_token": "wrkspc_485f11dcbe94de26",
                     *       "user_token": null,
                     *       "created_by_token": null,
                     *       "columns": [
                     *         "provider",
                     *         "label",
                     *         "accrued_costs",
                     *         "recommendation_savings",
                     *         "resource",
                     *         "type",
                     *         "region",
                     *         "account"
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ResourceReport"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description UnprocessableEntity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    deleteResourceReport: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                resource_report_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ResourceReport"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getReportResources: {
        parameters: {
            query?: {
                /** @description The ResourceReport token. */
                resource_report_token?: string;
                /** @description The filter query language to apply to the Resources. Additional documentation available at https://docs.vantage.sh/vql. */
                filter?: string;
                /** @description The Workspace in which the Resources are located. */
                workspace_token?: string;
                /** @description Include cost information in the response. */
                include_cost?: boolean;
                /** @description The page number for pagination. */
                page?: number;
                /** @description The number of resources to return per page. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v2/resources?resource_report_token=prvdr_rsrc_rprt_a92daa2d9d885dcc&include_cost=true",
                     *         "first": "https://api.vantage.sh/v2/resources?resource_report_token=prvdr_rsrc_rprt_a92daa2d9d885dcc&include_cost=true&page=1",
                     *         "next": null,
                     *         "last": "https://api.vantage.sh/v2/resources?resource_report_token=prvdr_rsrc_rprt_a92daa2d9d885dcc&include_cost=true&page=1",
                     *         "prev": null
                     *       },
                     *       "resources": [
                     *         {
                     *           "token": "prvdr_rsrc_4a1f4a30d86a586f",
                     *           "uuid": "0a997b68-281b-441b-865a-1ce183ae5f51",
                     *           "type": "aws_instance",
                     *           "label": "Faker::Business",
                     *           "metadata": {
                     *             "instance_id": null,
                     *             "image_id": null,
                     *             "region": null,
                     *             "vpc_id": null,
                     *             "subnet_id": null,
                     *             "public_ip_address": null,
                     *             "private_ip_address": null,
                     *             "public_dns_name": null,
                     *             "instance_type": null,
                     *             "platform": null,
                     *             "spot_instance_request_id": null,
                     *             "launch_time": 1728332095,
                     *             "instance_lifecycle": null,
                     *             "name": null,
                     *             "platform_type": "Linux/UNIX",
                     *             "spot_info": null,
                     *             "spot_price": null,
                     *             "datadog_agent_installed": null,
                     *             "network_interfaces": null,
                     *             "tags": null,
                     *             "instance_type_name": "t2.micro",
                     *             "lifecycle": "normal"
                     *           },
                     *           "account_id": "734912804094",
                     *           "billing_account_id": "734912804094",
                     *           "provider": "aws",
                     *           "region": "us-east-1",
                     *           "cost": 200,
                     *           "created_at": "2024-10-06T20:14:55.898Z"
                     *         },
                     *         {
                     *           "token": "prvdr_rsrc_21a16d1b66e134d9",
                     *           "uuid": "0f21a7dc-a466-43fb-81e8-1cc2346482f4",
                     *           "type": "aws_instance",
                     *           "label": "Faker::Business",
                     *           "metadata": {
                     *             "instance_id": null,
                     *             "image_id": null,
                     *             "region": null,
                     *             "vpc_id": null,
                     *             "subnet_id": null,
                     *             "public_ip_address": null,
                     *             "private_ip_address": null,
                     *             "public_dns_name": null,
                     *             "instance_type": null,
                     *             "platform": null,
                     *             "spot_instance_request_id": null,
                     *             "launch_time": 1728332095,
                     *             "instance_lifecycle": null,
                     *             "name": null,
                     *             "platform_type": "Linux/UNIX",
                     *             "spot_info": null,
                     *             "spot_price": null,
                     *             "datadog_agent_installed": null,
                     *             "network_interfaces": null,
                     *             "tags": null,
                     *             "instance_type_name": "t2.micro",
                     *             "lifecycle": "normal"
                     *           },
                     *           "account_id": "734912804094",
                     *           "billing_account_id": "734912804094",
                     *           "provider": "aws",
                     *           "region": "us-east-1",
                     *           "cost": 100,
                     *           "created_at": "2024-10-07T20:14:55.898Z"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Resources"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description PaymentRequired */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getResource: {
        parameters: {
            query?: {
                /** @description Include cost information in the response. */
                include_cost?: boolean;
            };
            header?: never;
            path: {
                resource_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "prvdr_rsrc_99a293db073a2e99",
                     *       "uuid": "e930c92f-5449-4eaf-9ef5-4f714da1ab45",
                     *       "type": "aws_instance",
                     *       "label": "Faker::Business",
                     *       "metadata": {
                     *         "instance_id": null,
                     *         "image_id": null,
                     *         "region": null,
                     *         "vpc_id": null,
                     *         "subnet_id": null,
                     *         "public_ip_address": null,
                     *         "private_ip_address": null,
                     *         "public_dns_name": null,
                     *         "instance_type": null,
                     *         "platform": null,
                     *         "spot_instance_request_id": null,
                     *         "launch_time": 1728479795,
                     *         "instance_lifecycle": null,
                     *         "name": null,
                     *         "platform_type": "Linux/UNIX",
                     *         "spot_info": null,
                     *         "spot_price": null,
                     *         "datadog_agent_installed": null,
                     *         "network_interfaces": null,
                     *         "tags": null,
                     *         "instance_type_name": "t2.micro",
                     *         "lifecycle": "normal"
                     *       },
                     *       "account_id": "565894339657",
                     *       "billing_account_id": "565894339657",
                     *       "provider": "aws",
                     *       "region": "us-east-1",
                     *       "costs": [
                     *         {
                     *           "category": "Data Transfer",
                     *           "amount": 3
                     *         },
                     *         {
                     *           "category": "Compute Instance",
                     *           "amount": 3
                     *         }
                     *       ],
                     *       "created_at": "2024-10-09T13:16:35.719Z"
                     *     }
                     */
                    "application/json": components["schemas"]["Resource"];
                };
            };
        };
    };
    getSavedFilters: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The amount of results to return. The maximum is 1000. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v2/saved_filters",
                     *         "first": "https://api.vantage.sh/v2/saved_filters?page=1",
                     *         "next": null,
                     *         "last": "https://api.vantage.sh/v2/saved_filters?page=1",
                     *         "prev": null
                     *       },
                     *       "saved_filters": [
                     *         {
                     *           "token": "svd_fltr_3dffc0458f7a2487",
                     *           "title": "AWS Account",
                     *           "cost_report_tokens": [
                     *             "rprt_3d0ae4648f5fd8f7"
                     *           ],
                     *           "filter": "(costs.provider = 'aws' AND costs.account_id = '30')",
                     *           "created_at": "2024-07-15T16:08:53Z",
                     *           "created_by": "usr_95fac32734bdceab",
                     *           "workspace_token": "wrkspc_914dcb0959497507"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["SavedFilters"];
                };
            };
        };
    };
    createSavedFilter: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createSavedFilter"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "svd_fltr_4de629566ddd68c9",
                     *       "title": "New Saved Filter",
                     *       "cost_report_tokens": [],
                     *       "filter": "costs.provider = 'datadog'",
                     *       "created_at": "2024-07-15T16:08:58Z",
                     *       "created_by": "team_e58399e4df1175e9",
                     *       "workspace_token": "wrkspc_e4cacf2493142e5b"
                     *     }
                     */
                    "application/json": components["schemas"]["SavedFilter"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description UnprocessableEntity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getSavedFilter: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                saved_filter_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "svd_fltr_be3f24eb1b5aabf6",
                     *       "title": "AWS Account",
                     *       "cost_report_tokens": [
                     *         "rprt_47023ad2b735f57d"
                     *       ],
                     *       "filter": "(costs.provider = 'aws' AND costs.account_id = '98')",
                     *       "created_at": "2024-07-15T16:08:54Z",
                     *       "created_by": "team_73f6001f98e9012b",
                     *       "workspace_token": "wrkspc_be6568a301b1d06c"
                     *     }
                     */
                    "application/json": components["schemas"]["SavedFilter"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    updateSavedFilter: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                saved_filter_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["updateSavedFilter"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "svd_fltr_eeabf4c7264f94a8",
                     *       "title": "Updated Saved Filter",
                     *       "cost_report_tokens": [],
                     *       "filter": "costs.provider = 'azure'",
                     *       "created_at": "2024-07-15T16:08:55Z",
                     *       "created_by": "usr_240a5fd77d5da076",
                     *       "workspace_token": "wrkspc_0b7ef373f9c5d485"
                     *     }
                     */
                    "application/json": components["schemas"]["SavedFilter"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description UnprocessableEntity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    deleteSavedFilter: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                saved_filter_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SavedFilter"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getSegments: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The amount of results to return. The maximum is 1000. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v2/segments",
                     *         "first": "https://api.vantage.sh/v2/segments?page=1",
                     *         "next": null,
                     *         "last": "https://api.vantage.sh/v2/segments?page=1",
                     *         "prev": null
                     *       },
                     *       "segments": [
                     *         {
                     *           "token": "fltr_sgmt_79b0b8ef658d6bba",
                     *           "title": "Business Units",
                     *           "parent_segment_token": null,
                     *           "description": "Segmented by business unit.",
                     *           "track_unallocated": false,
                     *           "report_settings": {
                     *             "include_credits": false,
                     *             "include_refunds": false,
                     *             "include_discounts": true,
                     *             "include_tax": true,
                     *             "amortize": true
                     *           },
                     *           "priority": 100,
                     *           "filter": "(costs.provider = 'aws')",
                     *           "created_at": "2024-05-14T14:34:22Z",
                     *           "workspace_token": "wrkspc_21f36c4ad272fb7b",
                     *           "report_token": "rprt_8dd4e1fe3b88c821"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Segments"];
                };
            };
        };
    };
    createSegment: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createSegment"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "fltr_sgmt_a22e3e52e9a93a75",
                     *       "title": "New Segment",
                     *       "parent_segment_token": "fltr_sgmt_7f1af73e92e5e156",
                     *       "description": "I'm a Segment.",
                     *       "track_unallocated": false,
                     *       "priority": 100,
                     *       "filter": "costs.provider = 'aws' AND costs.service = 'Amazon Simple Storage Service'",
                     *       "created_at": "2024-05-14T14:34:24Z",
                     *       "workspace_token": "wrkspc_f75aec7671a72dd3",
                     *       "report_token": null
                     *     }
                     */
                    "application/json": components["schemas"]["Segment"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description UnprocessableEntity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getSegment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                segment_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "fltr_sgmt_e528df30fe4c9da4",
                     *       "title": "Function-based",
                     *       "parent_segment_token": null,
                     *       "description": "Segmented by function.",
                     *       "track_unallocated": false,
                     *       "report_settings": {
                     *         "include_credits": false,
                     *         "include_refunds": false,
                     *         "include_discounts": true,
                     *         "include_tax": true,
                     *         "amortize": true
                     *       },
                     *       "priority": 100,
                     *       "filter": "(costs.provider = 'aws')",
                     *       "created_at": "2024-05-14T14:34:18Z",
                     *       "workspace_token": "wrkspc_eb7573db105407df",
                     *       "report_token": "rprt_f7828113036f5fce"
                     *     }
                     */
                    "application/json": components["schemas"]["Segment"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    updateSegment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                segment_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["updateSegment"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "fltr_sgmt_1550eb291314035c",
                     *       "title": "Updated Segment",
                     *       "parent_segment_token": "fltr_sgmt_a39cf865967ed4d8",
                     *       "description": "This segment is updated.",
                     *       "track_unallocated": false,
                     *       "priority": 42,
                     *       "filter": "costs.provider = 'azure'",
                     *       "created_at": "2024-05-14T14:34:23Z",
                     *       "workspace_token": "wrkspc_1be9d0445f94db0b",
                     *       "report_token": "rprt_3e460438ae115013"
                     *     }
                     */
                    "application/json": components["schemas"]["Segment"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    deleteSegment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                segment_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Segment"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getTags: {
        parameters: {
            query?: {
                /** @description An array of providers to scope Tags by. */
                providers?: ("aws" | "azure" | "gcp" | "snowflake" | "databricks" | "mongo" | "datadog" | "fastly" | "new_relic" | "opencost" | "open_ai" | "oracle" | "confluent" | "planetscale" | "coralogix" | "kubernetes" | "custom_provider" | "github" | "linode" | "grafana" | "clickhouse" | "temporal" | "twilio" | "azure_csp" | "kubernetes_agent" | "anthropic" | "anyscale" | "cursor" | "elastic" | "vercel")[];
                /** @description A search query to filter Tags by tag key. */
                search_query?: string;
                /** @description The direction in which you would like to sort the data by. Defaults to 'asc'. */
                sort_direction?: "asc" | "desc";
                /** @description The page of results to return. */
                page?: number;
                /** @description The number of results to return per page. Defaults to 100. The maximum is 1000. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "tags": [
                     *         {
                     *           "tag_key": "app",
                     *           "hidden": false,
                     *           "providers": [
                     *             "aws",
                     *             "azure",
                     *             "custom_provider:accss_crdntl_14b098088d3fe0ea"
                     *           ]
                     *         },
                     *         {
                     *           "tag_key": "environment",
                     *           "hidden": false,
                     *           "providers": [
                     *             "aws",
                     *             "azure",
                     *             "custom_provider:accss_crdntl_14b098088d3fe0ea"
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Tags"];
                };
            };
        };
    };
    updateTag: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["updateTag"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "tags": [
                     *         {
                     *           "tag_key": "app",
                     *           "hidden": true,
                     *           "providers": [
                     *             "aws",
                     *             "azure",
                     *             "custom_provider:accss_crdntl_11bcb3867900b0df"
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Tags"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description UnprocessableEntity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getTagValues: {
        parameters: {
            query?: {
                /** @description An array of providers to scope TagValues by. */
                providers?: ("aws" | "azure" | "gcp" | "snowflake" | "databricks" | "mongo" | "datadog" | "fastly" | "new_relic" | "opencost" | "open_ai" | "oracle" | "confluent" | "planetscale" | "coralogix" | "kubernetes" | "custom_provider" | "github" | "linode" | "grafana" | "clickhouse" | "temporal" | "twilio" | "azure_csp" | "kubernetes_agent" | "anthropic" | "anyscale" | "cursor" | "elastic" | "vercel")[];
                /** @description The direction in which to sort the TagValues. Defaults to 'asc'. */
                sort_direction?: "asc" | "desc";
                /** @description A search query to filter TagValues by the value name. */
                search_query?: string;
                /** @description The page of results to return. */
                page?: number;
                /** @description The number of results to return per page. Defaults to 100. The maximum is 1000. */
                limit?: number;
            };
            header?: never;
            path: {
                /** @description The key of the Tag for which you would like to retrieve TagValues. */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "next": "[link to next page]",
                     *         "prev": "[link to previous page]",
                     *         "self": "<link to current page>",
                     *         "first": "<link to first page>",
                     *         "last": "[link to last page]"
                     *       },
                     *       "tag_values": [
                     *         {
                     *           "tag_value": "production",
                     *           "providers": [
                     *             "aws",
                     *             "azure",
                     *             "custom_provider:accss_crdntl_3d5f465892a0718f"
                     *           ]
                     *         },
                     *         {
                     *           "tag_value": "staging",
                     *           "providers": [
                     *             "aws",
                     *             "azure",
                     *             "custom_provider:accss_crdntl_3d5f465892a0718f"
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["TagValues"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getTeams: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The amount of results to return. The maximum is 1000. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v2/teams",
                     *         "first": "https://api.vantage.sh/v2/teams?page=1",
                     *         "next": null,
                     *         "last": "https://api.vantage.sh/v2/teams?page=1",
                     *         "prev": null
                     *       },
                     *       "teams": [
                     *         {
                     *           "token": "team_2d4733920ec4385e",
                     *           "name": "Prod Team",
                     *           "description": "Handles all production deployments",
                     *           "workspace_tokens": [
                     *             "wrkspc_08026aa5fb4c90f8"
                     *           ],
                     *           "user_tokens": [
                     *             "usr_c59398553e838116"
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Teams"];
                };
            };
        };
    };
    createTeam: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createTeam"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "team_8467157535a30221",
                     *       "name": "New Team",
                     *       "description": "New Team Description",
                     *       "workspace_tokens": [
                     *         "wrkspc_52b6e5e663b4cde1"
                     *       ],
                     *       "user_tokens": [
                     *         "usr_a00e614b5843c234"
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Team"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description UnprocessableEntity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getTeam: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                team_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "team_081e09bbb812d369",
                     *       "name": "Prod Team",
                     *       "description": "Handles all production deployments.",
                     *       "workspace_tokens": [
                     *         "wrkspc_ddc003a2f0171bf8"
                     *       ],
                     *       "user_tokens": [
                     *         "usr_7c309915e847cfc6"
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Team"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    updateTeam: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                team_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["updateTeam"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "team_d617e73dcc6b57c5",
                     *       "name": "Updated Team",
                     *       "description": "Updated Team Description",
                     *       "workspace_tokens": [
                     *         "wrkspc_efc4284a56772481"
                     *       ],
                     *       "user_tokens": [
                     *         "usr_d268561e520c7aac"
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Team"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description UnprocessableEntity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    deleteTeam: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                team_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Team"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description UnprocessableEntity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getTeamMembers: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The amount of results to return. The maximum is 1000. */
                limit?: number;
            };
            header?: never;
            path: {
                team_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v2/teams/team_081e09bbb812d369/members",
                     *         "first": "https://api.vantage.sh/v2/teams/team_081e09bbb812d369/members?page=1",
                     *         "next": null,
                     *         "last": "https://api.vantage.sh/v2/teams/team_081e09bbb812d369/members?page=1",
                     *         "prev": null
                     *       },
                     *       "members": [
                     *         {
                     *           "name": "John Doe",
                     *           "email": "john.doe@acme.com",
                     *           "user_token": "usr_7c309915e847cfc6",
                     *           "role": "editor"
                     *         },
                     *         {
                     *           "name": "Jane Smith",
                     *           "email": "jane.smith@acme.com",
                     *           "user_token": "usr_a1b2c3d4e5f67890",
                     *           "role": "viewer"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["TeamMembers"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    addTeamMember: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                team_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["addTeamMember"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "user_email": "john.doe@acme.com",
                     *       "role": "editor"
                     *     }
                     */
                    "application/json": components["schemas"]["TeamMember"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description UnprocessableEntity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    removeTeamMember: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                team_token: string;
                user_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    createUnitCostsExport: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createUnitCostsExport"];
            };
        };
        responses: {
            /** @description The data export has been queued and will be available at the location specified in the Location header. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DataExport"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description PaymentRequired */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getUnitCosts: {
        parameters: {
            query: {
                /** @description The CostReport token. */
                cost_report_token: string;
                /** @description First date you would like to filter unit costs from. Defaults to the report's default. ISO 8601 formatted. */
                start_date?: string;
                /** @description Last date you would like to filter unit costs to. Defaults to the report's default. ISO 8601 formatted. */
                end_date?: string;
                /** @description The date bin of the unit costs. Defaults to the report's default or day. */
                date_bin?: "day" | "week" | "month" | "quarter";
                /** @description Whether to order unit costs by date in an ascending or descending manner. */
                order?: "asc" | "desc";
                /** @description The amount of results to return. The maximum is 1000. */
                limit?: number;
                /** @description The page of results to return. */
                page?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v2/unit_costs?cost_report_token=rprt_ea7dbb4f5783d677",
                     *         "first": "https://api.vantage.sh/v2/unit_costs?cost_report_token=rprt_ea7dbb4f5783d677&page=1",
                     *         "next": null,
                     *         "last": null,
                     *         "prev": null
                     *       },
                     *       "unit_costs": [
                     *         {
                     *           "business_metric_token": "bsnss_mtrc_3080a050c04104ff",
                     *           "business_metric_title": "Biz Metric",
                     *           "unit_cost_amount": "21.7",
                     *           "business_metric_amount": "3.71",
                     *           "scale": "1.0",
                     *           "date": "2023-06-05"
                     *         },
                     *         {
                     *           "business_metric_token": "bsnss_mtrc_4999b969d95095ef",
                     *           "business_metric_title": "Different Biz Metric",
                     *           "unit_cost_amount": "101.11",
                     *           "business_metric_amount": "43.21",
                     *           "scale": "1.0",
                     *           "date": "2023-06-05"
                     *         },
                     *         {
                     *           "business_metric_token": "bsnss_mtrc_3080a050c04104ff",
                     *           "business_metric_title": "Biz Metric",
                     *           "unit_cost_amount": "18.9",
                     *           "business_metric_amount": "3.71",
                     *           "scale": "1.0",
                     *           "date": "2023-06-06"
                     *         },
                     *         {
                     *           "business_metric_token": "bsnss_mtrc_4999b969d95095ef",
                     *           "business_metric_title": "Different Biz Metric",
                     *           "unit_cost_amount": "121.12",
                     *           "business_metric_amount": "38.1",
                     *           "scale": "1.0",
                     *           "date": "2023-06-06"
                     *         },
                     *         {
                     *           "business_metric_token": "bsnss_mtrc_3080a050c04104ff",
                     *           "business_metric_title": "Biz Metric",
                     *           "unit_cost_amount": "21.2",
                     *           "business_metric_amount": "3.51",
                     *           "scale": "1.0",
                     *           "date": "2023-06-07"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["UnitCosts"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description PaymentRequired */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getUsers: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The amount of results to return. The maximum is 1000. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "links": {
                     *         "self": "https://api.vantage.sh/v2/users",
                     *         "first": "https://api.vantage.sh/v2/users?page=1",
                     *         "next": null,
                     *         "last": "https://api.vantage.sh/v2/users?page=1",
                     *         "prev": null
                     *       },
                     *       "users": [
                     *         {
                     *           "token": "usr_aa5cce4180981299",
                     *           "name": "Jeanice Bins",
                     *           "email": "jeanice_bins@torp-huels.name",
                     *           "role": "Owner",
                     *           "last_seen_at": "2024-01-01"
                     *         },
                     *         {
                     *           "token": "usr_2372916b9f9589e7",
                     *           "name": "Otto Goyette",
                     *           "email": "otto_goyette@cronin.net",
                     *           "role": "Owner",
                     *           "last_seen_at": "2024-01-01"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Users"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getUser: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "usr_bfc6ab15e635f848",
                     *       "name": "Patrick White",
                     *       "email": "white.patrick@kassulke-nitzsche.net",
                     *       "role": "Owner",
                     *       "last_seen_at": "2024-01-01"
                     *     }
                     */
                    "application/json": components["schemas"]["User"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getVirtualTagConfigs: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "virtual_tag_configs": [
                     *         {
                     *           "token": "vtag_eabf584ca1fe7769",
                     *           "created_by_token": "usr_d2ad8c75f4fee21e",
                     *           "key": "Product Team",
                     *           "overridable": false,
                     *           "backfill_until": "2025-12-01",
                     *           "values": [
                     *             {
                     *               "filter": "(costs.provider = 'aws' AND costs.service = 'Amazon Elastic Compute Cloud' AND costs.account_id IN ('1234', '5678'))",
                     *               "name": "Growth"
                     *             },
                     *             {
                     *               "filter": "(costs.provider = 'aws' AND costs.account_id IN ('1234', '5678')) OR (costs.provider = 'gcp' AND costs.service = 'Google Compute Engine')",
                     *               "name": "API"
                     *             },
                     *             {
                     *               "filter": "(costs.provider = 'aws' AND costs.service = 'AmazonEC2')",
                     *               "business_metric_token": "bsnss_mtrc_60e1ffb95a9a00f0"
                     *             },
                     *             {
                     *               "filter": "(costs.provider = 'aws' AND costs.service != 'Amazon Elastic Compute Cloud')",
                     *               "cost_metric": {
                     *                 "filter": "costs.provider = 'aws' AND costs.service = 'Amazon Elastic Compute Cloud'",
                     *                 "aggregation": {
                     *                   "tag": "aws:CreatedBy"
                     *                 }
                     *               }
                     *             },
                     *             {
                     *               "filter": "(costs.provider = 'azure' AND costs.service = 'Azure Compute')",
                     *               "percentages": [
                     *                 {
                     *                   "value": "apples-a",
                     *                   "pct": 50
                     *                 },
                     *                 {
                     *                   "value": "apples-b",
                     *                   "pct": 50
                     *                 }
                     *               ]
                     *             }
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["VirtualTagConfigs"];
                };
            };
        };
    };
    createVirtualTagConfig: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createVirtualTagConfig"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "vtag_d5503747c5ce9a21",
                     *       "created_by_token": "team_7589281b8e354c45",
                     *       "key": "Expense Code",
                     *       "overridable": false,
                     *       "backfill_until": "2024-07-01",
                     *       "values": [
                     *         {
                     *           "filter": "costs.provider = 'aws' AND\ncosts.service = 'Amazon Elastic Compute Cloud' AND\ncosts.account_id IN ('1234', '5678')\n",
                     *           "name": "EXPC-1234",
                     *           "date_ranges": [
                     *             {
                     *               "start_date": "2024-01-01",
                     *               "end_date": "2024-12-31"
                     *             }
                     *           ]
                     *         },
                     *         {
                     *           "filter": "(\n  (costs.provider = 'aws' AND costs.account_id IN ('1234', '5678')) OR\n  (costs.provider = 'gcp' AND costs.service = 'Google Compute Engine')\n)\n",
                     *           "name": "EXPC-9876"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["VirtualTagConfig"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description UnprocessableEntity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getVirtualTagConfig: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "vtag_9cefbbc5f17d06fc",
                     *       "created_by_token": "usr_f8c083243325740b",
                     *       "key": "Product Team",
                     *       "overridable": false,
                     *       "backfill_until": "2024-07-01",
                     *       "values": [
                     *         {
                     *           "filter": "(costs.provider = 'aws' AND costs.service = 'Amazon Elastic Compute Cloud') AND (costs.provider = 'aws' AND costs.account_id IN ('1234', '5678'))",
                     *           "name": "Growth",
                     *           "date_ranges": [
                     *             {
                     *               "start_date": "2024-01-01",
                     *               "end_date": "2024-12-31"
                     *             }
                     *           ]
                     *         },
                     *         {
                     *           "filter": "(costs.provider = 'aws' AND costs.account_id IN ('1234', '5678')) OR (costs.provider = 'gcp' AND costs.service = 'Google Compute Engine')",
                     *           "name": "API"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["VirtualTagConfig"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    updateVirtualTagConfig: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["updateVirtualTagConfig"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "vtag_4430add8b8552a32",
                     *       "created_by_token": "usr_c3dedc15ebe12e03",
                     *       "key": "team",
                     *       "overridable": true,
                     *       "backfill_until": "2024-07-01",
                     *       "values": [
                     *         {
                     *           "filter": "costs.provider = 'aws' AND costs.service = 'Amazon Elastic Compute Cloud' AND\ncosts.account_id IN ('1234', '5678')\n",
                     *           "name": "marketing",
                     *           "date_ranges": [
                     *             {
                     *               "start_date": "2024-01-01",
                     *               "end_date": "2024-12-31"
                     *             }
                     *           ]
                     *         },
                     *         {
                     *           "filter": "((costs.provider = 'aws' AND costs.account_id IN ('1234', '5678')) OR\n(costs.provider = 'gcp' AND costs.service = 'Google Compute Engine'))\n",
                     *           "name": "third-party integrations"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["VirtualTagConfig"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description UnprocessableEntity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    deleteVirtualTagConfig: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VirtualTagConfig"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getVirtualTagConfigStatus: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Processing is complete */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "vtag_1234",
                     *       "processing": true,
                     *       "providers": [
                     *         {
                     *           "provider": "aws",
                     *           "status": "processing"
                     *         },
                     *         {
                     *           "provider": "gcp",
                     *           "status": "complete"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["VirtualTagConfigStatus"];
                };
            };
            /** @description Processing is still in progress */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "vtag_1234",
                     *       "processing": true,
                     *       "providers": [
                     *         {
                     *           "provider": "aws",
                     *           "status": "processing"
                     *         },
                     *         {
                     *           "provider": "gcp",
                     *           "status": "complete"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["VirtualTagConfigStatus"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    updateAsyncVirtualTagConfig: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["updateAsyncVirtualTagConfig"];
            };
        };
        responses: {
            /** @description Request accepted for processing */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
            /** @description UnprocessableEntity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getAsyncVirtualTagConfigStatus: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                request_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Request completed successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getWorkspaces: {
        parameters: {
            query?: {
                /** @description The page of results to return. */
                page?: number;
                /** @description The amount of results to return. The maximum is 1000. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "workspaces": [
                     *         {
                     *           "token": "wrkspc_5d9752a116e4d28e",
                     *           "name": "Gulgowski, Ruecker and Rolfson b7f1c249",
                     *           "created_at": "2024-10-01T01:00:56Z",
                     *           "enable_currency_conversion": false,
                     *           "currency": "USD",
                     *           "exchange_rate_date": "daily_rate"
                     *         },
                     *         {
                     *           "token": "wrkspc_9a319290712d817d",
                     *           "name": "Stokes Inc 2d705dab",
                     *           "created_at": "2024-10-01T01:00:56Z",
                     *           "enable_currency_conversion": false,
                     *           "currency": "USD",
                     *           "exchange_rate_date": "daily_rate"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Workspaces"];
                };
            };
        };
    };
    createWorkspace: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["createWorkspace"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "wrkspc_c820c203e53de3e1",
                     *       "name": "Ellingson Mineral Corporation",
                     *       "created_at": "2024-10-01T01:00:55Z",
                     *       "enable_currency_conversion": true,
                     *       "currency": "JPY",
                     *       "exchange_rate_date": "end_of_billing_period_rate"
                     *     }
                     */
                    "application/json": components["schemas"]["Workspace"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    getWorkspace: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspace_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "wrkspc_ba4878d880507623",
                     *       "name": "Emard, Lebsack and Schmidt 551b5e11",
                     *       "created_at": "2024-10-01T01:00:55Z",
                     *       "enable_currency_conversion": false,
                     *       "currency": "USD",
                     *       "exchange_rate_date": "daily_rate"
                     *     }
                     */
                    "application/json": components["schemas"]["Workspace"];
                };
            };
            /** @description NotFound */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    updateWorkspace: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspace_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["updateWorkspace"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "token": "wrkspc_a44f83d3e85be91d",
                     *       "name": "My Workspace (Edited)",
                     *       "created_at": "2024-10-01T01:00:56Z",
                     *       "enable_currency_conversion": true,
                     *       "currency": "EUR",
                     *       "exchange_rate_date": "daily_rate"
                     *     }
                     */
                    "application/json": components["schemas"]["Workspace"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Errors"];
                };
            };
        };
    };
    ping: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description This is a health check endpoint that can be used to determine Vantage API healthiness. It will return 200 if everything is running smoothly. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}
