var $host = Symbol('host');
var $port = Symbol('port');
var $localAddr = Symbol('localAddr');
var $socketPath = Symbol('socketPath');
var $user = Symbol('user');
var $pwd = Symbol('pwd');
var $db = Symbol('db');
var $charset = Symbol('charset');
var $timezone = Symbol('timezone');
var $connTimeout = Symbol('connTimeout');
var $stringifyObjs = Symbol('stringifyObjs');
var $typeCast = Symbol('typeCast');
var $queryFormat = Symbol('queryFormat');
var $supportBigNumbers = Symbol('supportBigNumbers');
var $bigNumberStrings = Symbol('bigNumberStrings');
var $dateStrings = Symbol('dateStrings');
var $debug = Symbol('debug');
var $trace = Symbol('trace');
var $multiStmts = Symbol('multipleStatements');
var $flags = Symbol('flags');
var $ssl = Symbol('ssl');

class MysqlConfig {
    constructor(config) {
        for (let k in config)
            this[k] = config[k];
    }

    get host() { return this[$host] }
    set host(val) { this[$host] = val }

    get port() { return this[$port] }
    set port(val) { this[$port] = val }

    get localAddress() { return this[$localAddr] }
    set localAddress(val) { this[$localAddr] = val }

    get socketPath() { return this[$socketPath] }
    set socketPath(val) { this[$socketPath] = val }

    get user() { return this[$user] }
    set user(val) { this[$user] = val }

    get password() { return this[$pwd] }
    set password(val) { this[$pwd] = val }

    get database() { return this[$db] }
    set database(val) { this[$db] = val }

    get charset() { return this[$charset] }
    set charset(val) { this[$charset] = val }

    get timezone() { return this[$timezone] }
    set timezone(val) { this[$timezone] = val }

    get connectTimeout() { return this[$connTimeout] }
    set connectTimeout(val) { this[$connTimeout] = val }

    get stringifyObjects() { return this[$stringifyObjs] }
    set stringifyObjects(val) { this[$stringifyObjs] = val }

    get typeCast() { return this[$typeCast] }
    set typeCast() { this[$typeCast] = val }

    get queryFormat() { return this[$queryFormat] }
    set queryFormat(val) { this[$queryFormat] = val }

    get supportBigNumbers() { return this[$supportBigNumbers] }
    set supportBigNumbers(val) { this[$supportBigNumbers] = val }

    get bigNumberStrings() { return this[$bigNumberStrings] }
    set bigNumberStrings(val) { this[$bigNumberStrings] = val }

    get dateStrings() { return this[$dateStrings] }
    set dateStrings(val) { this[$dateStrings] = val }

    get debug() { return this[$debug] }
    set debug(val) { this[$debug] = val }

    get trace() { return this[$trace] }
    set trace(val) { this[$trace] = val }

    get multipleStatements() { return this[$multiStmts] }
    set multipleStatements(val) { this[$multiStmts] = val }

    get flags() { return this[$flags] }
    set flags(val) { this[$flags] = val }

    get ssl() { return this[$ssl] }
    set ssl(val) { this[$ssl] = val }
}

module.exports.MysqlConfig = MysqlConfig;