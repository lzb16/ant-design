import * as React from 'react';
import { forwardRef, useContext } from 'react';
import classNames from 'classnames';
import CalendarOutlined from '@ant-design/icons/CalendarOutlined';
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';
import CloseCircleFilled from '@ant-design/icons/CloseCircleFilled';
import SwapRightOutlined from '@ant-design/icons/SwapRightOutlined';
import { RangePicker as RCRangePicker } from 'rc-picker';
import { GenerateConfig } from 'rc-picker/lib/generate/index';
import zhCN from '../locale/zh_CN';
import { ConfigConsumerProps, ConfigContext } from '../../config-provider';
import SizeContext from '../../config-provider/SizeContext';
import LocaleReceiver from '../../locale-provider/LocaleReceiver';
import { getRangePlaceholder, transPlacement2DropdownAlign } from '../util';
import { Components, getTimeProps, PickerLocale, RangePickerProps } from '.';
import { FormItemInputContext } from '../../form/context';
import { getMergedStatus, getStatusClassNames } from '../../_util/statusUtils';
import { PickerComponentClass } from './interface';

export default function generateRangePicker<DateType>(
  generateConfig: GenerateConfig<DateType>,
): PickerComponentClass<RangePickerProps<DateType>> {
  class RangePicker extends React.Component<RangePickerProps<DateType>> {
    static contextType = ConfigContext;

    context: ConfigConsumerProps;

    pickerRef = React.createRef<RCRangePicker<DateType>>();

    focus = () => {
      if (this.pickerRef.current) {
        this.pickerRef.current.focus();
      }
    };

    blur = () => {
      if (this.pickerRef.current) {
        this.pickerRef.current.blur();
      }
    };

    renderPicker = (contextLocale: PickerLocale) => {
      const locale = { ...contextLocale, ...this.props.locale };
      const { getPrefixCls, direction, getPopupContainer } = this.context;
      const {
        prefixCls,
        getPopupContainer: customGetPopupContainer,
        className,
        placement,
        size: customizeSize,
        bordered = true,
        placeholder,
        status: customStatus,
        ...restProps
      } = this.props;
      const { format, showTime, picker } = this.props as any;

      let additionalOverrideProps: any = {};

      additionalOverrideProps = {
        ...additionalOverrideProps,
        ...(showTime ? getTimeProps({ format, picker, ...showTime }) : {}),
        ...(picker === 'time' ? getTimeProps({ format, ...this.props, picker }) : {}),
      };
      const rootPrefixCls = getPrefixCls();

      return (
        <SizeContext.Consumer>
          {size => {
            const mergedSize = customizeSize || size;

            return (
              <FormItemInputContext.Consumer>
                {({ hasFeedback, status: contextStatus, feedbackIcon }) => {
                  const suffixNode = (
                    <>
                      {picker === 'time' ? <ClockCircleOutlined /> : <CalendarOutlined />}
                      {hasFeedback && feedbackIcon}
                    </>
                  );

                  return (
                    <RCRangePicker<DateType>
                      separator={
                        <span aria-label="to" className={`${prefixCls}-separator`}>
                          <SwapRightOutlined />
                        </span>
                      }
                      ref={this.pickerRef}
                      dropdownAlign={transPlacement2DropdownAlign(direction, placement)}
                      placeholder={getRangePlaceholder(picker, locale, placeholder)}
                      suffixIcon={suffixNode}
                      clearIcon={<CloseCircleFilled />}
                      prevIcon={<span className={`${prefixCls}-prev-icon`} />}
                      nextIcon={<span className={`${prefixCls}-next-icon`} />}
                      superPrevIcon={<span className={`${prefixCls}-super-prev-icon`} />}
                      superNextIcon={<span className={`${prefixCls}-super-next-icon`} />}
                      allowClear
                      transitionName={`${rootPrefixCls}-slide-up`}
                      {...restProps}
                      {...additionalOverrideProps}
                      className={classNames(
                        {
                          [`${prefixCls}-${mergedSize}`]: mergedSize,
                          [`${prefixCls}-borderless`]: !bordered,
                        },
                        getStatusClassNames(
                          prefixCls as string,
                          getMergedStatus(contextStatus, customStatus),
                          hasFeedback,
                        ),
                        className,
                      )}
                      locale={locale!.lang}
                      prefixCls={prefixCls}
                      getPopupContainer={customGetPopupContainer || getPopupContainer}
                      generateConfig={generateConfig}
                      components={Components}
                      direction={direction}
                    />
                  );
                }}
              </FormItemInputContext.Consumer>
            );
          }}
        </SizeContext.Consumer>
      );
    };

    render() {
      return (
        <LocaleReceiver componentName="DatePicker" defaultLocale={zhCN}>
          {this.renderPicker}
        </LocaleReceiver>
      );
    }
  }

  return forwardRef<RangePicker, RangePickerProps<DateType>>((props, ref) => {
    const { prefixCls: customizePrefixCls } = props;

    const { getPrefixCls } = useContext(ConfigContext);
    const prefixCls = getPrefixCls('picker', customizePrefixCls);

    return <RangePicker {...props} prefixCls={prefixCls} ref={ref} />;
  }) as unknown as PickerComponentClass<RangePickerProps<DateType>>;
}
