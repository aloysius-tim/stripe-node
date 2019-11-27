declare namespace Stripe {
  /**
   * The BankAccount object.
   */
  interface BankAccount {
    account: string | Account | null;

    /**
     * The name of the person or business that owns the bank account.
     */
    account_holder_name: string | null;

    /**
     * The type of entity that holds the account. This can be either `individual` or `company`.
     */
    account_holder_type: string | null;

    /**
     * Name of the bank associated with the routing number (e.g., `WELLS FARGO`).
     */
    bank_name: string | null;

    /**
     * Two-letter ISO code representing the country the bank account is located in.
     */
    country: string;

    /**
     * Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account.
     */
    currency: string | null;

    customer: string | Customer | null;

    /**
     * Whether this bank account is the default external account for its currency.
     */
    default_for_currency: boolean | null;

    /**
     * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
     */
    fingerprint: string | null;

    /**
     * Unique identifier for the object.
     */
    id: string;

    last4: string;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata:
      | {
        [key: string]: string;
      }
      | null;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'bank_account';

    /**
     * The routing transit number for the bank account.
     */
    routing_number: string | null;

    /**
     * For bank accounts, possible values are `new`, `validated`, `verified`, `verification_failed`, or `errored`. A bank account that hasn't had any activity or validation performed is `new`. If Stripe can determine that the bank account exists, its status will be `validated`. Note that there often isn't enough information to know (e.g., for smaller credit unions), and the validation is not always run. If customer bank account verification has succeeded, the bank account status will be `verified`. If the verification failed for any reason, such as microdeposit failure, the status will be `verification_failed`. If a transfer sent to this bank account fails, we'll set the status to `errored` and will not continue to send transfers until the bank details are updated.
     *
     * For external accounts, possible values are `new` and `errored`. Validations aren't run against external accounts because they're only used for payouts. This means the other statuses don't apply. If a transfer fails, the status is set to `errored` and transfers are stopped until account details are updated.
     */
    status: string;
  }

  interface DeletedBankAccount {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'bank_account';

    /**
     * Always true for a deleted object
     */
    deleted: true;

    /**
     * Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account.
     */
    currency?: string | null;
  }
}