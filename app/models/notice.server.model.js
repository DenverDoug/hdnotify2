'use strict';

/**
 * Module dependencies.
 */
var timestamps = require('mongoose-timestamp'),
    mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Notice Schema
 */
var NoticeSchema = new Schema({
	template_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Template'
	},
    notice_type: {
        type: String,
        enum: ['outage', 'informational'],
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'closed']
    },
    // auto_update: {
    //     type: Number,
    //     default: 60
    // },
    ticket_number: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        enum: ['1', '2'],
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    impacted_services: {
        type: String,
        required: true
    },
    // brief_description: {
    //     type: String,
    //     required: true
    // },
    description: {
        type: String,
        required: true
    },
    // workaround: {
    //     type: String,
    //     required: true
    // },
    email_dlist: {
        type: String,
        required: true
    },
    // only for notice updates
    status_update: {
        type: String
    },
    // required on resolution notice
    resolution: {
        type: String
    },
    affected_regions: {
        type: String,
        required: true
    },
    outage_start_time: {
        type: Date,
        required: true
    },
    outage_end_time: {
        type: Date
    },
    outage_duration: {
        type: String
    },
    created_by: {
        type: String,
        ref: 'User'
    },
	updated_by: {
		type: String
	},
    updates: [{
            number: {type: String},
            reason: {type: String},
            updated_at: {type: Date, default: Date.now}
        }]

});

// mongoose plugin to auto-generate the createdAt and updatedAt property fields for this model
NoticeSchema.plugin(timestamps, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

mongoose.model('Notice', NoticeSchema);
